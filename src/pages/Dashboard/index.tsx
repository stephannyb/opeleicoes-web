/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from '@unform/web';
import React, { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FiList, FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Select, { MultiValue, SingleValue } from 'react-select';
import AsyncSelect from 'react-select/async';
import logoImg from '../../assets/eleicoes.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';
import api from '../../services/api';
import { Container, Content, Header, HeaderContent, Schedule } from './styles';

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

const options6 = [
  { value: 'Boca de Urna', label: 'Boca de Urna' },
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
  { value: 'Desobediencia', label: 'Desobediência' },
  { value: 'Porte Ilegal de Arma', label: 'Porte Ilegal de Arma' },
  { value: 'Outros', label: 'Outro' },
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
interface localInicial {
  value: string;
  label: string;
}

const Dashboard: React.FC = () => {
  const [showValidar, setShowValidar] = useState(false);

  const { signOut } = useAuth();
  const { addToast } = useToast();

  const history = useHistory();

  const { control } = useForm<any>();
  const cpf = localStorage.getItem('@opEleicoes:cpf');

  const [loading, setLoading] = useState(false);

  const [selectedLocal, setSelectedLocal] = useState<localInicial | null>();
  const [selectedIndicadores, setSelectedIndicadores] = useState<
    localInicial[] | null
  >();

  const [opm, selectedOpm] = useState<string | null>();
  const [ocorrencia, selectedOocorrencia] = useState<string | null>();
  const [desfecho, selectedDesfecho] = useState<string | null>();

  const handleSubmit = useCallback(
    async (data: any) => {
      const local = selectedLocal?.value;
      let errorMessage = '';

      if (!local) {
        errorMessage = 'O campo LOCAL é obrigatorio';
        addToast({ title: 'Erro', description: errorMessage, type: 'error' });
      }
      if (!opm) {
        errorMessage = 'O campo OPM é obrigatorio';
        addToast({ title: 'Erro', description: errorMessage, type: 'error' });
      }
      if (!ocorrencia) {
        errorMessage = 'O campo OCORRÊNCIA é obrigatorio';
        addToast({ title: 'Erro', description: errorMessage, type: 'error' });
      }
      if (!desfecho) {
        errorMessage = 'O campo DESFECHO é obrigatorio';
        addToast({ title: 'Erro', description: errorMessage, type: 'error' });
      }

      if (!selectedIndicadores?.length) {
        errorMessage = 'Selecione pelo menos um indicador';
        addToast({ title: 'Erro', description: errorMessage, type: 'error' });
      }

      if (errorMessage) {
        addToast({ title: 'Erro', description: errorMessage, type: 'error' });
        return;
      }

      Object.assign(
        data,
        { local },
        { opm },
        { desfecho },
        { ocorrencia },
        { indicadores: selectedIndicadores },
      );

      setLoading(true);
      try {
        await api.post('relatorio', {
          cpf,
          data,
        });

        addToast({
          title: 'Sucesso',
          description: 'Ocorrencia criada com sucesso',
          type: 'success',
        });
        window.location.reload();
      } catch {
        addToast({
          title: 'Erro',
          description:
            'Oops, erro ao cadastrar ocorrência, tente novamente em alguns instantes',
          type: 'error',
        });
      }
      setLoading(false);
    },
    [
      addToast,
      cpf,
      desfecho,
      ocorrencia,
      opm,
      selectedIndicadores,
      selectedLocal,
    ],
  );

  useEffect(() => {
    api
      .post('fiscais')
      .then(resposta => {
        setShowValidar(resposta.data.isFiscal);
      })
      .catch(() => {
        addToast({
          title: 'Erro',
          description: 'Oops, erro na verificacao de fiscal',
          type: 'error',
        });
      });
  }, [addToast, cpf]);

  const mapResponseToValuesAndLabels = (data: {
    id: any;
    nome: any;
    municipio: any;
  }) => ({
    value: data.id,
    label: `${data.nome} - ${data.municipio}`,
  });

  // eslint-disable-next-line no-shadow
  async function loadCidade(value: string) {
    const data = await api
      .post('locais', {
        cidade: value.toUpperCase(),
      })
      .then(res => res.data.res)
      .then(res => res.map(mapResponseToValuesAndLabels));
    return data;
  }

  const handelLocalChange = (event: SingleValue<localInicial>) => {
    setSelectedLocal(event);
  };

  const mapResponseToValuesAndLabelsToIndicadores = (data: {
    id: any;
    nome: any;
  }) => ({
    value: data.id,
    label: `${data.nome}`,
  });
  // eslint-disable-next-line no-shadow
  async function loadIndicadores(value: string) {
    const shearch = value.charAt(0).toUpperCase() + value.slice(1);
    const data = await api
      .post('indicadores', {
        indicador: shearch,
      })
      .then(res => res.data.res)
      .then(res => res.map(mapResponseToValuesAndLabelsToIndicadores));
    return data;
  }

  const handelIndicadorChange = (event: MultiValue<localInicial>) => {
    // console.log(event);
    setSelectedIndicadores(event as localInicial[]);

    // console.log(selectedIndicadores);
  };

  const listar = () => {
    history.push('/validar');
  };

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Operação Eleições" />
          <div>
            {showValidar ? (
              <button type="button" onClick={listar}>
                <FiList />
              </button>
            ) : null}
            <button type="button" onClick={() => signOut()}>
              <FiPower />
            </button>
          </div>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Operação Eleições 2022 - 1º TURNO</h1>

          <Form onSubmit={handleSubmit}>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => {
                const opm = options2.find(
                  (c: { value: any }) => c.value === value,
                );
                // eslint-disable-next-line no-shadow
                const handleSelectChange = (selectedOption: any | null) => {
                  if (selectedOption) {
                    selectedOpm(selectedOption?.value);
                  }
                  onChange(selectedOption?.value);
                };
                return (
                  <div>
                    <strong>OPM da ocorrência* :</strong>
                    <Select
                      value={opm}
                      options={options2}
                      placeholder="OPM"
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
              render={({ field }) => {
                return (
                  <div>
                    <strong>Local* :</strong>
                    <AsyncSelect
                      {...field}
                      cacheOptions
                      placeholder="Pesquise ..."
                      loadOptions={loadCidade}
                      onChange={handelLocalChange}
                      defaultOptions
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
                const ocorrencia = options6.find(
                  (c: { value: any }) => c.value === value,
                );
                const handleSelectChange = (selectedOption: any | null) => {
                  if (selectedOption) {
                    selectedOocorrencia(selectedOption?.value);
                  }
                  onChange(selectedOption?.value);
                };
                return (
                  <div>
                    <strong>Ocorrência* :</strong>
                    <Select
                      value={ocorrencia}
                      options={options6}
                      placeholder="Ocorrência"
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
              render={({ field }) => {
                return (
                  <div>
                    <strong>Indicadores* :</strong>
                    <AsyncSelect
                      {...field}
                      cacheOptions
                      isMulti
                      placeholder="Pesquise ..."
                      loadOptions={loadIndicadores}
                      onChange={handelIndicadorChange}
                      defaultOptions
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
              name="indicador"
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
                  if (selectedOption) {
                    selectedDesfecho(selectedOption?.value);
                  }
                  onChange(selectedOption?.value);
                };
                return (
                  <div>
                    <strong>Desfecho* :</strong>
                    <Select
                      value={desfecho}
                      options={options7}
                      placeholder="Desfecho"
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

            <Button disabled={loading} type="submit">
              Enviar
            </Button>
          </Form>
        </Schedule>
      </Content>
    </Container>
  );
};

export default Dashboard;
