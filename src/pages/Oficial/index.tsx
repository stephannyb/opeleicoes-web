import React, { useEffect, useState } from 'react';
import { FiPower } from 'react-icons/fi';
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Panel from '../../components/Panel';
import {
  ModalContent,
  TextCard,
  TittleModal
} from '../../components/Panel/styles';
import { useAuth } from '../../hooks/Auth';
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

const Oficial: React.FC = () => {
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

  const { signOut } = useAuth();
  const [card, setCard] = useState<Items[]>([]);

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

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState<Items>();

  const handleSend = (cards: Items) => {
    setModalData(cards);
    setModalIsOpen(true);
  };

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

          {card.map(cards => (
            <Panel
              key={cards.id}
              nome={cards.st_nomeguerra}
              contato={cards.st_matricula}
              cidade={cards.cidade}
              ocorrencia={cards.ocorrencia}
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
              <Button>Validar</Button>
              <Button className="secondary">Invalidar</Button>
            </ModalContent>
          </Modal>
        </Schedule>
      </Content>
    </Container>
  );
};

export default Oficial;
