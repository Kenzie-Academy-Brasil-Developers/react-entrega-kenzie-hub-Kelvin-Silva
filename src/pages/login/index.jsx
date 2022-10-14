import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { AiFillEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

import { ButtonsStyled } from '../../styles/buttons';
import { FormStyled } from '../../styles/form';
import { ContainerStyled } from './style';



import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../contexts/UserContext';
import { schemaLogin } from '../../validations/registerUser';

const Login = () => {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  // const navigate = useNavigate();

  // async function LoginUser(data) {
  //   await api
  //     .post('/sessions', data)
  //     .then((response) => {
  //       toast.success('Usuário logado');
  //       console.log(response);
  //       window.localStorage.clear();
  //       window.localStorage.setItem('HubToken', response.data.token);
  //       window.localStorage.setItem('HubId', response.data.user.id);

  //       setTimeout(() => {
  //         navigate('/home');
  //       }, 2000);
  //     })
  //     .catch((error) => {
  //       console.error(error.response.data);
  //       toast.error(error.response.data.message);
  //     });
  //   reset();
  // }

  return (
    <ContainerStyled>
      <h1>Kenzie Hub</h1>
      <FormStyled onSubmit={handleSubmit(loginUser)}>
        <h2>Login</h2>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          {...register('email')}
          placeholder='Digite seu email'
        />
        <span className='error__name'>{errors.email?.message}</span>
        <label htmlFor='password'>Senha</label>
        <div>
          <input
            type='password'
            id='password'
            {...register('password')}
            placeholder='Digite sua senha'
          />
          <AiFillEye className='eye' />
        </div>
        <span className='error__name'>{errors.password?.message}</span>
        <ButtonsStyled>Entrar</ButtonsStyled>
        <span>Ainda não possui uma conta?</span>
        <Link to={`/register`}>Cadastre-se</Link>
      </FormStyled>
    </ContainerStyled>
  );
};

export default Login;
