/* eslint-disable @typescript-eslint/ban-types */
import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, AnimatedContainer } from './styles';

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
          description: 'Ocorreu um erro ao fazer logon',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Container>
      <Content>
        <AnimatedContainer>
          <img src={logoImg} alt="GoBarber" />
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

            {/* <Link to="forgot-password">Esqueci minha senha</Link> */}
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
