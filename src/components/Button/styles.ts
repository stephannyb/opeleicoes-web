import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #000000;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &.close {
    background: #d11c1c;
    color: #ffffff;
    height: 50px;
    margin-left: auto;
    width: 50px;
  }

  &.secondary {
    margin-left: 1rem;
    background: #28262e;
    color: #ffffff;
  }

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
