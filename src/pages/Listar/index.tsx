/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from '@unform/web';
import React, { useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FiArrowLeftCircle } from 'react-icons/fi';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Panel from '../../components/Panel';
import {
  ModalContent,
  TextCard,
  TittleModal
} from '../../components/Panel/styles';
import api from '../../services/api';
import { Container, Content, Header, HeaderContent, Schedule } from './styles';

interface Items {
  cidade: string;
  comando: string;
  descricao: string;
  desfecho: string;
  id: string;
  ocorrencia: string;
  operacao: string;
  opm: string;
  st_matricula: string;
  st_nomeguerra: string;
  st_postograduacao: string;
  tipo: string;
  uf: string;
  zona: string;
}

const Listar: React.FC = () => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const history = useHistory();
  const { handleSubmit, control } = useForm<any>();
  const [card, setCard] = useState<Items[]>([]);
  const [green, setGreen] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState<Items>();
  const formRef = useRef(null);

  const loadUser = async (data: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await api
      .post('validar', {
        cidade: data.cidade,
      })
      .then(res => {
        setCard(res.data.res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // const loadLocais = async () => {
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   await api
  //     .get('locais')
  //     .then(res => {
  //       setArray(res.data.res);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
  //
  // useEffect(() => {
  //   loadLocais();
  // });

  const handleSend = (cards: Items) => {
    setModalData(cards);
    setModalIsOpen(true);
  };

  const voltar = () => {
    history.push('/dashboard');
  };

  const options = [
    { value: 'Acari', label: 'Acari' },
    { value: 'Afonso Bezerra', label: 'Afonso Bezerra' },
    { value: 'Água Nova', label: 'Água Nova' },
    { value: 'Alexandria', label: 'Alexandria' },
    { value: 'Almino Afonso', label: 'Almino Afonso' },
    { value: 'Alto do Rodrigues', label: 'Alto do Rodrigues' },
    { value: 'Angicos', label: 'Angicos' },
    { value: 'Antônio Martins', label: 'Antônio Martins' },
    { value: 'Apodi', label: 'Apodi' },
    { value: 'Areia Branca', label: 'Areia Branca' },
    { value: 'Arez', label: 'Arez' },
    { value: 'Assu', label: 'Assu' },
    { value: 'Baía Formosa', label: 'Baía Formosa' },
    { value: 'Baraúna', label: 'Baraúna' },
    { value: 'Barcelona', label: 'Barcelona' },
    { value: 'Bento Fernandes', label: 'Bento Fernandes' },
    { value: 'Boa Saúde', label: 'Boa Saúde' },
    { value: 'Bodó', label: 'Bodó' },
    { value: 'Bom Jesus', label: 'Bom Jesus' },
    { value: 'Brejinho', label: 'Brejinho' },
    { value: 'Caiçara do Norte', label: 'Caiçara do Norte' },
    { value: 'Caiçara do Rio do Vento', label: 'Caiçara do Rio do Vento' },
    { value: 'Caicó', label: 'Caicó' },
    { value: 'Campo Grande', label: 'Campo Grande' },
    { value: 'Campo Redondo', label: 'Campo Redondo' },
    { value: 'Canguaretama', label: 'Canguaretama' },
    { value: 'Caraúbas', label: 'Caraúbas' },
    { value: 'Carnaúba dos Dantas', label: 'Carnaúba dos Dantas' },
    { value: 'Carnaubais', label: 'Carnaubais' },
    { value: 'Ceará Mirim', label: 'Ceará Mirim' },
    { value: 'Cerro Corá', label: 'Cerro Corá' },
    { value: 'Coronel Ezequiel', label: 'Coronel Ezequiel' },
    { value: 'Coronel João Pessoa', label: 'Coronel João Pessoa' },
    { value: 'Cruzeta', label: 'Cruzeta' },
    { value: 'Currais Novos', label: 'Currais Novos' },
    { value: 'Doutor Severiano', label: 'Doutor Severiano' },
    { value: 'Enquanto', label: 'Enquanto' },
    { value: 'Equador', label: 'Equador' },
    { value: 'Espírito Santo', label: 'Espírito Santo' },
    { value: 'Extromoz', label: 'Extromoz' },
    { value: 'Felipe Guerra', label: 'Felipe Guerra' },
    { value: 'Fernando Pedroza', label: 'Fernando Pedroza' },
    { value: 'Florânia', label: 'Florânia' },
    { value: 'Francisco Dantas', label: 'Francisco Dantas' },
    { value: 'Frutuoso Gomes', label: 'Frutuoso Gomes' },
    { value: 'Galinhos', label: 'Galinhos' },
    { value: 'Goianinha', label: 'Goianinha' },
    {
      value: 'Governador Dix-Sept Rosado',
      label: 'Governador Dix-Sept Rosado',
    },
    { value: 'Grossos', label: 'Grossos' },
    { value: 'Guamaré', label: 'Guamaré' },
    { value: 'Ielmo Marinho', label: 'Ielmo Marinho' },
    { value: 'Ipanguaçu', label: 'Ipanguaçu' },
    { value: 'Ipueira', label: 'Ipueira' },
    { value: 'Itajá', label: 'Itajá' },
    { value: 'Itaú', label: 'Itaú' },
    { value: 'Jaçanã', label: 'Jaçanã' },
    { value: 'Jandaíra', label: 'Jandaíra' },
    { value: 'Janduís', label: 'Janduís' },
    { value: 'Japi', label: 'Japi' },
    { value: 'Jardim de Angicos', label: 'Jardim de Angicos' },
    { value: 'Jardim de Piranhas', label: 'Jardim de Piranhas' },
    { value: 'Jardim do Seridó', label: 'Jardim do Seridó' },
    { value: 'João Câmara', label: 'João Câmara' },
    { value: 'João Dias', label: 'João Dias' },
    { value: 'José da Penha', label: 'José da Penha' },
    { value: 'Jucurutu', label: 'Jucurutu' },
    { value: 'Jundiá', label: 'Jundiá' },
    { value: 'Lagoa dAnta', label: 'Lagoa dAnta' },
    { value: 'Lagoa de Pedras', label: 'Lagoa de Pedras' },
    { value: 'Logoa de Velhos', label: 'Logoa de Velhos' },
    { value: 'Lagoa Nova', label: 'Lagoa Nova' },
    { value: 'Lagoa Salgada', label: 'Lagoa Salgada' },
    { value: 'Lajes', label: 'Lajes' },
    { value: 'Lajes Pintadas', label: 'Lajes Pintadas' },
    { value: 'Lucécia', label: 'Lucécia' },
    { value: 'Luís Gomes', label: 'Luís Gomes' },
    { value: 'Macaíba', label: 'Macaíba' },
    { value: 'Macau', label: 'Macau' },
    { value: 'Major sales', label: 'Major sales' },
    { value: 'Marcelino Vieira', label: 'Marcelino Vieira' },
    { value: 'Martins', label: 'Martins' },
    { value: 'Maxaranguape', label: 'Maxaranguape' },
    { value: 'Messias Tarcino', label: 'Messias Tarcino' },
    { value: 'Montanhas', label: 'Montanhas' },
    { value: 'Monte Alegre', label: 'Monte Alegre' },
    { value: 'Monte das Gameleiras', label: 'Monte das Gameleiras' },
    { value: 'Mossoró', label: 'Mossoró' },
    { value: 'Natal', label: 'Natal' },
    { value: 'Nísia Floresta', label: 'Nísia Floresta' },
    { value: 'Nova Cruz', label: 'Nova Cruz' },
    { value: 'Olho-dÁgua do Borges', label: 'Olho-dÁgua do Borges' },
    { value: 'Ouro Branco', label: 'Ouro Branco' },
    { value: 'Paraná', label: 'Paraná' },
    { value: 'Paraú', label: 'Paraú' },
    { value: 'Parazinho', label: 'Parazinho' },
    { value: 'Parelhas', label: 'Parelhas' },
    { value: 'Parnamirim', label: 'Parnamirim' },
    { value: 'Passa e Fica', label: 'Passa e Fica' },
    { value: 'Passagem', label: 'Passagem' },
    { value: 'Patu', label: 'Patu' },
    { value: 'Pau dos Ferros', label: 'Pau dos Ferros' },
    { value: 'Pedra Grande', label: 'Pedra Grande' },
    { value: 'Pedra Preta', label: 'Pedra Preta' },
    { value: 'Pedro Avelino', label: 'Pedro Avelino' },
    { value: 'Pedro Velho', label: 'Pedro Velho' },
    { value: 'Pendências', label: 'Pendências' },
    { value: 'Pilões', label: 'Pilões' },
    { value: 'Poço Branco', label: 'Poço Branco' },
    { value: 'Portalegre', label: 'Portalegre' },
    { value: 'Porto do Mangue', label: 'Porto do Mangue' },
    { value: 'Pureza', label: 'Pureza' },
    { value: 'Rafael Fernandes', label: 'Rafael Fernandes' },
    { value: 'Rafael Godeiro', label: 'Rafael Godeiro' },
    { value: 'Riacho da Cruz', label: 'Riacho da Cruz' },
    { value: 'Riacho de Santana', label: 'Riacho de Santana' },
    { value: 'Riachuelo', label: 'Riachuelo' },
    { value: 'Rio do Fogo', label: 'Rio do Fogo' },
    { value: 'Rodolfo Fernandes', label: 'Rodolfo Fernandes' },
    { value: 'Ruy Barbosa', label: 'Ruy Barbosa' },
    { value: 'Santa Cruz', label: 'Santa Cruz' },
    { value: 'Santa Maria', label: 'Santa Maria' },
    { value: 'Santana dos Matos', label: 'Santana dos Matos' },
    { value: 'Santana do Seridó', label: 'Santana do Seridó' },
    { value: 'Santo Antônio', label: 'Santo Antônio' },
    { value: 'São Bento do Norte', label: 'São Bento do Norte' },
    { value: 'São Bento do Traíri', label: 'São Bento do Traíri' },
    { value: 'São Fernando', label: 'São Fernando' },
    { value: 'São Francisco do Oeste', label: 'São Francisco do Oeste' },
    { value: 'São Gonçalo do Amarante', label: 'São Gonçalo do Amarante' },
    { value: 'São João do Sabugi', label: 'São João do Sabugi' },
    { value: 'São José de Mipibu', label: 'São José de Mipibu' },
    { value: 'São José do Campestre', label: 'São José do Campestre' },
    { value: 'São José do Seridó', label: 'São José do Seridó' },
    { value: 'São Miguel', label: 'São Miguel' },
    { value: 'São Miguel do Gostoso', label: 'São Miguel do Gostoso' },
    { value: 'São Paulo do Potengi', label: 'São Paulo do Potengi' },
    { value: 'São Pedro', label: 'São Pedro' },
    { value: 'São Rafael', label: 'São Rafael' },
    { value: 'São Tomé', label: 'São Tomé' },
    { value: 'São Vicente', label: 'São Vicente' },
    { value: 'Senador Elói de Souza', label: 'Senador Elói de Souza' },
    { value: 'Senador Georgino Avelino', label: 'Senador Georgino Avelino' },
    { value: 'Serra Caiada', label: 'Serra Caiada' },
    { value: 'Serra de São Bento', label: 'Serra de São Bento' },
    { value: 'Serra do Mel', label: 'Serra do Mel' },
    { value: 'Serra Negra do Norte', label: 'Serra Negra do Norte' },
    { value: 'Serrinha', label: 'Serrinha' },
    { value: 'Serrinha dos Pintos', label: 'Serrinha dos Pintos' },
    { value: 'Severiano Melo', label: 'Severiano Melo' },
    { value: 'Sítio Novo', label: 'Sítio Novo' },
    { value: 'Taboleiro Grande', label: 'Taboleiro Grande' },
    { value: 'Taipu', label: 'Taipu' },
    { value: 'Tangará', label: 'Tangará' },
    { value: 'Tenente Ananias', label: 'Tenente Ananias' },
    { value: 'Tenente Laurentino Cruz', label: 'Tenente Laurentino Cruz' },
    { value: 'Tibau', label: 'Tibau' },
    { value: 'Tibau do Sul', label: 'Tibau do Sul' },
    { value: 'Timbaúba dos Batistas', label: 'Timbaúba dos Batistas' },
    { value: 'Touros', label: 'Touros' },
    { value: 'Triunfo Potiguar', label: 'Triunfo Potiguar' },
    { value: 'Umarizal', label: 'Umarizal' },
    { value: 'Upanema', label: 'Upanema' },
    { value: 'Várzea', label: 'Várzea' },
    { value: 'Venha-Ver', label: 'Venha-Ver' },
    { value: 'Vera Cruz', label: 'Vera Cruz' },
    { value: 'Viçosa', label: 'Viçosa' },
    { value: 'Vila Flor', label: 'Vila Flor' },
  ];

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Operação Eleições" />
          <button type="button" onClick={voltar}>
            <FiArrowLeftCircle />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Operação Eleições 2022 - 1º TURNO</h1>

          <Form onSubmit={handleSubmit(loadUser)} ref={formRef}>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => {
                const cidade = options.find(
                  (c: { value: any }) => c.value === value,
                );
                const handleSelectChange = (selectedOption: any | null) => {
                  onChange(selectedOption?.value);
                };
                return (
                  <div>
                    <strong>Cidade *:</strong>
                    <Select
                      value={cidade}
                      options={options}
                      onChange={handleSelectChange}
                      theme={theme => ({
                        ...theme,
                        borderRadius: 10,
                        colors: {
                          ...theme.colors,
                          primary25: 'orange',
                          primary: 'orange',
                        },
                      })}
                    />
                  </div>
                );
              }}
              rules={{ required: true }}
              name="cidade"
            />

            <Button type="submit">Pesquisar</Button>
          </Form>

          {card.map(cards => (
            <Panel
              key={cards.id}
              nome={cards.st_nomeguerra}
              contato={cards.st_matricula}
              cidade={cards.cidade}
              ocorrencia={cards.ocorrencia}
              status={green}
              show={() => {
                handleSend(cards);
              }}
            />
          ))}
          <Modal isOpen={modalIsOpen} style={customStyles} ariaHideApp={false}>
            <TittleModal>
              <TextCard className="modal">{modalData?.st_nomeguerra}</TextCard>
              <Button className="close" onClick={() => setModalIsOpen(false)}>
                X
              </Button>
            </TittleModal>
            <TextCard className="modal">{modalData?.ocorrencia}</TextCard>
            <TextCard className="modal">{modalData?.descricao}</TextCard>
            <TextCard className="modal">{modalData?.desfecho}</TextCard>
            <ModalContent>
              <Button
                onClick={() => {
                  setGreen(true);
                }}
              >
                Validar
              </Button>
              <Button
                onClick={() => {
                  setGreen(false);
                }}
                className="secondary"
              >
                Invalidar
              </Button>
            </ModalContent>
          </Modal>
        </Schedule>
      </Content>
    </Container>
  );
};

export default Listar;
