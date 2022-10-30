/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from '@unform/web';
import React, { useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FiArrowLeftCircle } from 'react-icons/fi';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {
  ModalContent,
  TextCard,
  TittleModal
} from '../../components/Panel/styles';
import api from '../../services/api';
import { Container, Content, Header, HeaderContent, Schedule } from './styles';

interface ItemsLocal {
  aptos: string;
  bairro: string;
  cep: string;
  codigo: string;
  endereco: string;
  id: string;
  latitude: string;
  longitude: string;
  municipio: string;
  nome: string;
  sessoes: string;
  sessoes_previstas: string;
  zona: string;
}

interface ItemsOcorrencia {
  descricao: string;
  desfecho: string;
  id: string;
  operacao: string;
  opm_id: string;
  st_matricula: string;
  st_nomeguerra: string;
  st_postograduacao: string;
  st_telefonecelular: string;
  status: string;
  tipo_id: string;
}

interface ItemsTipo {
  grupo_id: string;
  id: string;
  nome: string;
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
  const [local, setLocal] = useState<ItemsLocal>();
  const [ocorrencia, setOcorrencia] = useState<ItemsOcorrencia>();
  const [tipo, setTipo] = useState<ItemsTipo>();
  const [erro, setErro] = useState();
  const cpf = localStorage.getItem('@opEleicoes:cpf');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const formRef = useRef(null);

  const pesquisarOcorrencia = async (data: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await api
      .post('oc', {
        ocId: data.id,
      })
      .then(res => {
        setLocal(res.data.local);
        setOcorrencia(res.data.ocorrencia);
        setTipo(res.data.tipo);
        console.log(res);
      })
      .catch(error => {
        setErro(error.response.data);
      });
  };

  const validarOcorrencia = async (
    ocId: string | undefined,
    status: number,
  ) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await api
      .post('validar', {
        ocId,
        status,
        cpf,
      })
      .then(res => {
        console.log(res.data.res);
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  };

  // eslint-disable-next-line no-shadow
  const handleSend = () => {
    setModalIsOpen(true);
  };

  const voltar = () => {
    history.push('/dashboard');
  };

  const status = (number: any) => {
    if (number === 1) {
      return 'Validado ✅';
    }
    if (number === 2) {
      return 'Invalidado ❌';
    }
    if (number === 0) {
      return 'Ainda não validado ❕';
    }
    return null;
  };

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

          <Form onSubmit={handleSubmit(pesquisarOcorrencia)} ref={formRef}>
            <Controller
              control={control}
              name="id"
              render={({ field }) => {
                return (
                  <div>
                    <Input
                      {...field}
                      name="ocorrencia"
                      type="text"
                      placeholder="Digite o ID da ocorrência"
                    />
                  </div>
                );
              }}
            />
            <Button type="submit" onClick={handleSend}>
              Pesquisar
            </Button>
          </Form>
          <Modal isOpen={modalIsOpen} style={customStyles} ariaHideApp={false}>
            <TittleModal>
              {erro ? (
                <TextCard className="modal">{`${erro}`}</TextCard>
              ) : (
                <TextCard className="modal">
                  {`${ocorrencia?.st_postograduacao} ${ocorrencia?.st_nomeguerra} - ${ocorrencia?.st_telefonecelular}`}
                </TextCard>
              )}
              <Button className="close" onClick={() => setModalIsOpen(false)}>
                X
              </Button>
            </TittleModal>
            {erro ? null : (
              <>
                <TextCard className="modal">{`Ocorrência: ${tipo?.nome}`}</TextCard>
                <TextCard className="modal">{`Cidade: ${local?.municipio}`}</TextCard>
                <TextCard className="modal">{`Endereço: ${local?.endereco}. ${local?.bairro}`}</TextCard>
                <TextCard className="modal">{`Local: ${local?.nome}`}</TextCard>

                <TextCard className="modal">
                  {`Descrição: ${ocorrencia?.descricao}`}
                </TextCard>
                <TextCard className="modal">
                  {`Desfecho: ${ocorrencia?.desfecho}`}
                </TextCard>
                <TextCard className="modal">
                  {`Status: ${status(ocorrencia?.status)}`}
                </TextCard>
                <ModalContent>
                  <Button
                    onClick={() => {
                      validarOcorrencia(ocorrencia?.id, 1);
                    }}
                  >
                    Validar
                  </Button>
                  <Button
                    onClick={() => {
                      validarOcorrencia(ocorrencia?.id, 2);
                    }}
                    className="secondary"
                  >
                    Invalidar
                  </Button>
                </ModalContent>
              </>
            )}
          </Modal>
        </Schedule>
      </Content>
    </Container>
  );
};

export default Listar;
