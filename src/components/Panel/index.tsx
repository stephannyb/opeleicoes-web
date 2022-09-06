import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import api from '../../services/api';
import Button from '../Button';
import {
  CardContent,
  CardPanel,
  ModalContent,
  TextCard,
  TittleModal
} from './styles';

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

type ItemsArray = Array<Items>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Panel() {
  const [open, setOpen] = useState(false);
  const [card, setCard] = useState<Items[]>([]);

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

  const loadUser = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await api
      .post('validar', {
        cidade: 'Natal',
      })
      .then(res => {
        setCard(res.data.res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    loadUser();
  }, []);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <CardPanel onClick={openModal}>
        <CardContent>
          <>
            <TextCard>{card[0]?.st_nomeguerra}</TextCard>
            <TextCard>Contato:</TextCard>
            <TextCard>{card[0]?.cidade}</TextCard>
            <TextCard>{card[0]?.ocorrencia}</TextCard>
          </>
        </CardContent>
      </CardPanel>

      <Modal isOpen={open} style={customStyles}>
        <TittleModal>
          <TextCard className="modal">{card[0]?.st_nomeguerra}</TextCard>
          <Button className="close" onClick={closeModal}>
            X
          </Button>
        </TittleModal>
        <TextCard className="modal">{card[0]?.ocorrencia}</TextCard>
        <TextCard className="modal">{card[0]?.descricao}</TextCard>
        <TextCard className="modal">{card[0]?.desfecho}</TextCard>
        <ModalContent>
          <Button>Validar</Button>
          <Button className="secondary">Invalidar</Button>
        </ModalContent>
      </Modal>
    </>
  );
}
