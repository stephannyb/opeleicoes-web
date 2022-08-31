import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useRef } from 'react';
import { FiPower } from 'react-icons/fi';
import Select from 'react-select';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Header, HeaderContent, Schedule } from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/Auth';

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
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
    { value: '1ºBPM', label: '1ºBPM' },
    { value: '2ºBPM', label: '2ºBPM' },
    { value: '3ºBPM', label: '3ºBPM' },
    { value: '4ºBPM', label: '4ºBPM' },
    { value: '5ºBPM', label: '5ºBPM' },
    { value: '6ºBPM', label: '6ºBPM' },
    { value: '7ºBPM', label: '7ºBPM' },
    { value: '8ºBPM', label: '8ºBPM' },
    { value: '9ºBPM', label: '9ºBPM' },
    { value: '10ºBPM', label: '10ºBPM' },
    { value: '11ºBPM', label: '11ºBPM' },
    { value: '12ºBPM', label: '12ºBPM' },
    { value: '13ºBPM', label: '13ºBPM' },
    { value: '14ºBPM', label: '14ºBPM' },
    { value: '15ºBPM', label: '15ºBPM' },
    { value: '16ºBPM', label: '16ºBPM' },
    { value: '1ªCIPM', label: '1ªCIPM' },
    { value: '2ªCIPM', label: '2ªCIPM' },
    { value: '3ªCIPM', label: '3ªCIPM' },
    { value: '4ªCIPM', label: '4ªCIPM' },
    { value: '5ªCIPM', label: '5ªCIPM' },
    { value: '6ªCIPM', label: '6ªCIPM' },
    { value: '7ªCIPM', label: '7ªCIPM' },
    { value: '8ªCIPM', label: '8ªCIPM' },
    { value: '9ªCIPM', label: '9ªCIPM' },
    { value: '10ªCIPM', label: '10ªCIPM' },
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
    { value: 'Boca de urna', label: 'Boca de urna' },
    { value: 'Eleitoral', label: 'Eleitoral' },
  ];

  const handlesubmit = (data: any, e: any) => console.log(data, e);

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

          <Form onSubmit={handlesubmit} ref={formRef}>
            <div>
              <strong>Grande Comando:</strong>
              <Select
                options={options1}
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

            <div>
              <strong>OPM:</strong>
              <Select
                options={options2}
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

            <div>
              <strong>Zona:</strong>
              <Select
                options={options3}
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

            <div>
              <strong>Cidade:</strong>
              <Select
                options={options4}
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

            <div>
              <strong>Tipo de Ocorrência:</strong>
              <Select
                options={options5}
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

            <div>
              <strong>Ocorrência:</strong>
              <Select
                options={options6}
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

            <div>
              <Input name="descricao" type="text" placeholder="Descrição" />
            </div>

            <Button type="submit">Enviar</Button>
          </Form>
        </Schedule>
      </Content>
    </Container>
  );
};

export default Dashboard;
