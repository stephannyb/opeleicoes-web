import { Form } from '@unform/web';
import React, { useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FiPower } from 'react-icons/fi';
import Modal from 'react-modal';
import Select from 'react-select';
import okImg from '../../assets/correct.png';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/Auth';
import { Container, Content, Header, HeaderContent, Schedule } from './styles';

const Dashboard: React.FC = () => {
  const [open, setOpen] = useState(false);

  const formRef = useRef(null);
  const { signOut } = useAuth();

  const options1 = [
    { value: 'CPC', label: 'CPC' },
    { value: 'CPM', label: 'CPM' },
    { value: 'CPRI', label: 'CPR I' },
    { value: 'CPRII', label: 'CPR II' },
    { value: 'CPRIII', label: 'CPR III' },
    { value: 'CPRIV', label: 'CPR IV' },
  ];

  const options2 = [
    { value: '1º BPM', label: '1º BPM' },
    { value: '2º BPM', label: '2º BPM' },
    { value: '3º BPM', label: '3º BPM' },
    { value: '4º BPM', label: '4º BPM' },
    { value: '5º BPM', label: '5º BPM' },
    { value: '6º BPM', label: '6º BPM' },
    { value: '7º BPM', label: '7º BPM' },
    { value: '8º BPM', label: '8º BPM' },
    { value: '9º BPM', label: '9º BPM' },
    { value: '10º BPM', label: '10º BPM' },
    { value: '11º BPM', label: '11º BPM' },
    { value: '12º BPM', label: '12º BPM' },
    { value: '13º BPM', label: '13º BPM' },
    { value: '14º BPM', label: '14º BPM' },
    { value: '15º BPM', label: '15º BPM' },
    { value: '16º BPM', label: '16º BPM' },
    { value: '1ª CIPM', label: '1ª CIPM' },
    { value: '2ª CIPM', label: '2ª CIPM' },
    { value: '3ª CIPM', label: '3ª CIPM' },
    { value: '4ª CIPM', label: '4ª CIPM' },
    { value: '5ª CIPM', label: '5ª CIPM' },
    { value: '6ª CIPM', label: '6ª CIPM' },
    { value: '7ª CIPM', label: '7ª CIPM' },
    { value: '8ª CIPM', label: '8ª CIPM' },
    { value: '9ª CIPM', label: '9ª CIPM' },
    { value: '10ª CIPM', label: '10ª CIPM' },
  ];

  const options3 = [
    { value: '1', label: '1ª' },
    { value: '2', label: '2ª' },
    { value: '3', label: '3ª' },
    { value: '4', label: '4ª' },
    { value: '5', label: '5ª' },
    { value: '6', label: '6ª' },
    { value: '7', label: '7ª' },
    { value: '8', label: '8ª' },
    { value: '9', label: '9ª' },
    { value: '10', label: '10ª' },
    { value: '11', label: '11ª' },
    { value: '12', label: '12ª' },
    { value: '13', label: '13ª' },
    { value: '14', label: '14ª' },
    { value: '15', label: '15ª' },
    { value: '16', label: '16ª' },
    { value: '17', label: '17ª' },
    { value: '18', label: '18ª' },
    { value: '19', label: '19ª' },
    { value: '20', label: '20ª' },
    { value: '21', label: '21ª' },
    { value: '22', label: '22ª' },
    { value: '23', label: '23ª' },
    { value: '24', label: '24ª' },
    { value: '25', label: '25ª' },
    { value: '26', label: '26ª' },
    { value: '27', label: '27ª' },
    { value: '28', label: '28ª' },
    { value: '29', label: '29ª' },
    { value: '30', label: '30ª' },
    { value: '31', label: '31ª' },
    { value: '32', label: '32ª' },
    { value: '33', label: '33ª' },
    { value: '34', label: '34ª' },
    { value: '35', label: '35ª' },
    { value: '36', label: '36ª' },
    { value: '37', label: '37ª' },
    { value: '38', label: '38ª' },
    { value: '39', label: '39ª' },
    { value: '40', label: '40ª' },
    { value: '41', label: '41ª' },
    { value: '42', label: '42ª' },
    { value: '43', label: '43ª' },
    { value: '44', label: '44ª' },
    { value: '45', label: '45ª' },
    { value: '46', label: '46ª' },
    { value: '47', label: '47ª' },
    { value: '48', label: '48ª' },
    { value: '49', label: '49ª' },
    { value: '50', label: '50ª' },
    { value: '51', label: '51ª' },
    { value: '52', label: '52ª' },
    { value: '53', label: '53ª' },
    { value: '54', label: '54ª' },
    { value: '55', label: '55ª' },
    { value: '56', label: '56ª' },
    { value: '57', label: '57ª' },
    { value: '58', label: '58ª' },
    { value: '59', label: '59ª' },
    { value: '60', label: '60ª' },
    { value: '61', label: '61ª' },
    { value: '62', label: '62ª' },
    { value: '63', label: '63ª' },
    { value: '64', label: '64ª' },
    { value: '65', label: '65ª' },
    { value: '66', label: '66ª' },
    { value: '67', label: '67ª' },
    { value: '68', label: '68ª' },
    { value: '69', label: '69ª' },
  ];

  const options4 = [
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

  const options5 = [
    { value: 'Comum', label: 'Comum' },
    { value: 'Eleitoral', label: 'Eleitoral' },
  ];

  const options6 = [
    { value: 'Boca De Urna', label: 'Boca De Urna' },
    {
      value: 'Transporte Ilegal de Eleitores',
      label: 'Transporte Ilegal de Eleitores',
    },
    { value: 'Compra de Votos', label: 'Compra de Votos' },
    { value: 'Propaganda Ilegal', label: 'Propaganda Ilegal' },
    {
      value: 'Integrante da Mesa com Camisa de Partido',
      label: 'Integrante da Mesa com Camisa de Partido',
    },
    { value: 'Apreensão de Material', label: 'Apreensão de Material' },
    { value: 'Celular em Urna', label: 'Celular em Urna' },
    { value: 'Desordem', label: 'Desordem' },
    { value: 'Desacato', label: 'Desacato' },
    { value: 'Desobediência', label: 'Desobediência' },
    { value: 'Porte Ilegal de Arma', label: 'Porte Ilegal de Arma' },
    { value: 'Outro', label: 'Outro' },
  ];

  const options7 = [
    { value: 'Conduzido a Delegacia', label: 'Conduzido a Delegacia' },
    {
      value: 'Conduzido ao Juiz Eleitoral',
      label: 'Conduzido ao Juiz Eleitoral',
    },
    { value: 'Prisão em Flagrante', label: 'Prisão em Flagrante' },
    { value: 'Resolvido no Local', label: 'Resolvido no Local' },
    { value: 'Outro', label: 'Outro' },
  ];

  const { handleSubmit, control } = useForm<any>();

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

  const handlesubmit = (data: any) => {
    console.log(data);
    setOpen(true);
  };

  function refreshPage() {
    window.location.reload();
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Operação Eleições" />
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Operação Eleições 2022 - 1º TURNO</h1>

          <Form onSubmit={handleSubmit(handlesubmit)} ref={formRef}>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => {
                const comando = options1.find(
                  (c: { value: any }) => c.value === value,
                );

                const handleSelectChange = (selectedOption: any | null) => {
                  onChange(selectedOption?.value);
                };
                return (
                  <div>
                    <strong>Grande Comando *:</strong>
                    <Select
                      value={comando}
                      options={options1}
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
              name="comando"
            />

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => {
                const opm = options2.find(
                  (c: { value: any }) => c.value === value,
                );
                const handleSelectChange = (selectedOption: any | null) => {
                  onChange(selectedOption?.value);
                };
                return (
                  <div>
                    <strong>OPM *:</strong>
                    <Select
                      value={opm}
                      options={options2}
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
              name="opm"
            />

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => {
                const zona = options3.find(
                  (c: { value: any }) => c.value === value,
                );
                const handleSelectChange = (selectedOption: any | null) => {
                  onChange(selectedOption?.value);
                };
                return (
                  <div>
                    <strong>Zona *:</strong>
                    <Select
                      value={zona}
                      options={options3}
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
              name="zona"
            />

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => {
                const cidade = options4.find(
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
                      options={options4}
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

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => {
                const tipo = options5.find(
                  (c: { value: any }) => c.value === value,
                );
                const handleSelectChange = (selectedOption: any | null) => {
                  onChange(selectedOption?.value);
                };
                return (
                  <div>
                    <strong>Tipo de Ocorrência *:</strong>
                    <Select
                      value={tipo}
                      options={options5}
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
              name="tipo"
            />

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => {
                const ocorrencia = options6.find(
                  (c: { value: any }) => c.value === value,
                );
                const handleSelectChange = (selectedOption: any | null) => {
                  onChange(selectedOption?.value);
                };
                return (
                  <div>
                    <strong>Ocorrência *:</strong>
                    <Select
                      value={ocorrencia}
                      options={options6}
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
              name="ocorrencia"
            />

            <Controller
              control={control}
              name="descricao"
              render={({ field }) => {
                return (
                  <div>
                    <Input
                      {...field}
                      name="descricao"
                      type="text"
                      placeholder="Descrição"
                    />
                  </div>
                );
              }}
            />

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => {
                const desfecho = options7.find(
                  (c: { value: any }) => c.value === value,
                );
                const handleSelectChange = (selectedOption: any | null) => {
                  onChange(selectedOption?.value);
                };
                return (
                  <div>
                    <strong>Desfecho :</strong>
                    <Select
                      value={desfecho}
                      options={options7}
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
              rules={{ required: false }}
              name="desfecho"
            />

            <Button type="submit">Enviar</Button>
          </Form>

          <Modal isOpen={open} style={customStyles}>
            <img src={okImg} width={100} alt="ok" />
            <Button onClick={refreshPage}>OK</Button>
          </Modal>
        </Schedule>
      </Content>
    </Container>
  );
};

export default Dashboard;
