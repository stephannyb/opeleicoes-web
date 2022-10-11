/* eslint-disable @typescript-eslint/ban-types */
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/eleicoes.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { AnimatedContainer, Background, Container, Content } from './styles';

interface SignInFormData {
  cpf: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handlesubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          cpf: Yup.string().required('CPF obrigatório'),
          // .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        await signIn({ cpf: data.cpf, password: data.password });
        localStorage.setItem('@opEleicoes:cpf', data.cpf);

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          title: 'Erro na autenticação',
          type: 'error',
          description: 'Credenciais Invalidas',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Container>
      <Content>
        <AnimatedContainer>
          <img src={logoImg} width={250} height={250} alt="eleições2022" />
          <Form onSubmit={handlesubmit} ref={formRef}>
            <h1>Entrar</h1>

            <Input icon={FiMail} name="cpf" type="text" placeholder="CPF" />

            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="senha"
            />

            <Button type="submit">Entrar</Button>

            <a
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
              href="http://www2.agendamento.pm.rn.gov.br/reset-senha/index.php?action=sendtoken"
            >
              Esqueci minha senha
            </a>
          </Form>
          {/* <Link to="/signup">
            <FiLogIn size={20} />
            Criar conta
          </Link> */}
        </AnimatedContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
