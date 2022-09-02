import React from 'react';
import { FiPower } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import Panel from '../../components/Panel';
import { useAuth } from '../../hooks/Auth';
import { Container, Content, Header, HeaderContent, Schedule } from './styles';

const Oficial: React.FC = () => {
  const { signOut } = useAuth();

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
          <Panel />
          <Panel />
          <Panel />
        </Schedule>
      </Content>
    </Container>
  );
};

export default Oficial;
