import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem 0 2rem;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #ff9000;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    max-width: 300px;
  }
`;

export const Schedule = styled.div`
  flex: 1;

  h1 {
    font-size: 36px;
  }

  form > div {
    margin: 2rem 0 0 0;
    color: #000000;
  }

  form > div > strong {
    color: #ff9000;
    font-size: 16px;
    line-height: 26px;
    display: block;
    margin-bottom: 16px;
  }

  p {
    margin-top: 8px;
    color: #ff9000;
    display: flex;
    align-items: center;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: #ff9000;
      margin: 0 8px;
    }
  }
`;
