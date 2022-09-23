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
  st_telefonecelular: string;
  tipo: string;
  uf: string;
  zona: string;
  status: string;
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
  const [card, setCard] = useState<Items>();
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
        setCard(res.data.res);
      })
      .catch(error => {
        console.log(error);
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
              <TextCard className="modal">
                {`${card?.st_postograduacao} ${card?.st_nomeguerra} - ${card?.st_telefonecelular}`}
              </TextCard>
              <Button className="close" onClick={() => setModalIsOpen(false)}>
                X
              </Button>
            </TittleModal>
            <TextCard className="modal">
              {`Ocorrência: ${card?.ocorrencia}`}
            </TextCard>
            <TextCard className="modal">{`Local: ${card?.cidade}`}</TextCard>
            <TextCard className="modal">
              {`Descrição: ${card?.descricao}`}
            </TextCard>
            <TextCard className="modal">
              {`Desfecho: ${card?.desfecho}`}
            </TextCard>
            <TextCard className="modal">
              {`Status: ${status(card?.status)}`}
            </TextCard>
            <ModalContent>
              <Button
                onClick={() => {
                  validarOcorrencia(card?.id, 1);
                }}
              >
                Validar
              </Button>
              <Button
                onClick={() => {
                  validarOcorrencia(card?.id, 2);
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
