import styled from 'styled-components';

export const CardPanel = styled.div`
  div {
    margin: 1rem auto;
    color: white;
    border-radius: 25px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }

  .success {
    border: 5px solid limegreen;
  }

  .danger {
    border: 5px solid indianred;
  }

  @media (max-width: 992px) {
    div {
      color: white;
      border-radius: 25px;
      width: 300px;
      height: 180px;
    }
  }
`;

export const TextCard = styled.h4`
  :first-child {
    color: #fc9022;
    margin-top: 2rem;
  }
  margin-bottom: 1rem;
  line-break: anywhere;

  &.modal {
    color: #000000;
  }
`;

export const TittleModal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;

  font-size: larger;
  font-weight: bolder;

  h4 {
    margin-right: 7rem;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 25px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
