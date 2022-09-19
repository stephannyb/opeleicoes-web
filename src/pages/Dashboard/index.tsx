/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from '@unform/web';
// import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FiList, FiPower } from 'react-icons/fi';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import Select, { SingleValue } from 'react-select';
import AsyncSelect from 'react-select/async';
import okImg from '../../assets/correct.png';
import notOkImg from '../../assets/cross.png';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/Auth';
import api from '../../services/api';
import { Container, Content, Header, HeaderContent, Schedule } from './styles';

const Dashboard: React.FC = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [erro, setErro] = useState(false);
  const formRef = useRef(null);
  const { signOut } = useAuth();

  function listar() {
    history.push('/listar');
  }

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
    id: string;
    nome: string;
    label: string;
    municipio: string;
  }

  const { handleSubmit, control } = useForm<any>();
  const { cpf } = useAuth();
  // const localInicial = {
  //   id: 0,
  //   nome: 'inicio',
  //   label: 'Local',
  //   municipio: 'inicio',
  // };
  const [selectedLocal, setSelectedLocal] = useState<localInicial | null>();

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

  const handlesubmit = async (data: any) => {
    console.log(data);
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const local = selectedLocal?.id;

    if (!local) {
      console.log('local eh obrigatorio');
    }
    Object.assign(data, { local });

    console.log(data);

    await api
      .post('relatorio', {
        cpf,
        data,
      })
      .then(res => {
        const k = res.config.data;
        console.log(k);
      })
      .catch(err => {
        setErro(true);
        console.log(err.response.data);
      });
  };

  const mapResponseToValuesAndLabels = (data: {
    id: number;
    nome: string;
    municipio: string;
  }) => ({
    value: data.id,
    label: `${data.nome} - ${data.municipio}`,
  });

  const handelLocalChange = (event: SingleValue<localInicial>) => {
    console.log(event);
    setSelectedLocal(event);
  };
  // eslint-disable-next-line no-shadow
  async function loadCidade(value: string) {
    const data = await api
      .post('validar', {
        cidade: value.toUpperCase(),
      })
      .then(res => res.data.res)
      .then(res => res.map(mapResponseToValuesAndLabels));

    // await axios(`http://10.0.0.198:3333/validar`, {
    //   method: 'POST',
    //   data: {
    //     cidade: value.toUpperCase(),
    //   },
    // })
    // console.log({ data });
    return data;
  }

  function refreshPage() {
    window.location.reload();
  }

  function openModal() {
    setOpen(true);
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Operação Eleições" />
          <div>
            <button type="button" onClick={listar}>
              <FiList />
            </button>
            <button type="button" onClick={signOut}>
              <FiPower />
            </button>
          </div>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Operação Eleições 2022 - 1º TURNO</h1>

          <Form onSubmit={handleSubmit(handlesubmit)} ref={formRef}>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => {
                const opm = options2.find(
                  (c: { value: any }) => c.value === value,
                );
                // eslint-disable-next-line no-shadow
                const handleSelectChange = (selectedOption: any | null) => {
                  onChange(selectedOption?.value);
                };
                return (
                  <div>
                    <strong>OPM *:</strong>
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
                    <strong>Local *:</strong>
                    <AsyncSelect
                      {...field}
                      cacheOptions
                      placeholder="Local"
                      loadOptions={loadCidade}
                      // onInputChange={data => data}
                      onChange={handelLocalChange}
                      // console.log(data);
                      // if (data) {
                      //   setSelectdLocal(data);
                      // }
                      // console.log(selectdLocal);

                      // value={selectdLocal}
                      defaultOptions
                    />
                  </div>
                );
              }}
              // rules={{ required: true }}
              name="local"
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

            <Button onClick={openModal} type="submit">
              Enviar
            </Button>
          </Form>

          <Modal isOpen={open} style={customStyles}>
            {erro === true ? (
              <img
                style={{ display: 'flex' }}
                src={notOkImg}
                width={100}
                alt="ok"
              />
            ) : (
              <img
                style={{ display: 'flex' }}
                src={okImg}
                width={100}
                alt="ok"
              />
            )}
            <Button onClick={refreshPage}>OK</Button>
          </Modal>
        </Schedule>
      </Content>
    </Container>
  );
};

export default Dashboard;
