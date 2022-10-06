import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { FormStyled } from '../../styles/form';
import { ContainerStyled } from '../login/style';
import { ButtonsStyled } from '../../styles/buttons';

import { AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup
    .string()
    .email('Deve ser um e-mail válido')
    .required('Email é obrigatório'),
  password: yup
    .string()
    .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
    .matches(/[a-z]/, 'Deve conter ao menos 1 letra minuscula')
    .matches(/(\d)/, 'Deve conter ao menos um número')
    .matches(/(\W)|_/, 'Deve conter um caracter especial')
    .matches(/.{8,}/, 'Deve ter no minimo 8 digitos')
    .required('Senha é obrigatória'),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref('password')],
      'Confirmação de senha deve ser igual a senha'
    ),
  bio: yup.string().required('Bio é obrigatório'),
  contact: yup.string().required('Contato obrigatório'),
  course_module: yup.string().required(),
});

const Register = () => {
  const [typePass, setTypePass] = useState('password');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function registerUser(data) {
    api
      .post('/users', data)
      .then((response) => {
        console.log(response.data);
        toast.success('Usuário cadastrado');
      })
      .catch((error) => {
        console.error(error.response.data);
        toast.error(error.response.data.message);
      });
    reset();
  }

  return (
    <ContainerStyled>
      <div>
        <h1>Kenzie Hub</h1>
        <Link to={`/login`}>Voltar</Link>
      </div>

      <FormStyled onSubmit={handleSubmit(registerUser)}>
        <h2>Crie sua conta</h2>
        <p>Rapido e grátis, vamos nessa</p>
        <label htmlFor='name'>Nome</label>
        <input
          type='text'
          id='name'
          placeholder='Digite seu nome'
          {...register('name')}
        />
        <span className='error__name'>{errors.name?.message}</span>

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          placeholder='Digite seu email'
          {...register('email')}
        />
        <span className='error__name'>{errors.email?.message}</span>

        <label htmlFor='password'>Senha</label>
        <div>
          <input
            type='password'
            id='password'
            placeholder='Digite sua senha'
            {...register('password')}
          />
          <AiFillEye className='eye' />
        </div>
        <span className='error__name'>{errors.password?.message}</span>

        <label htmlFor='confirm-password'>Confirmar Senha</label>
        <div>
          <input
            type='password'
            id='confirm-password'
            placeholder='Digite novamente sua senha'
            {...register('confirmPassword')}
          />
          <AiFillEye className='eye' />
        </div>
        <span className='error__name'>{errors.confirmPassword?.message}</span>

        <label htmlFor='bio'>Bio</label>
        <input
          type='text'
          id='bio'
          placeholder='Fale sobre você'
          {...register('bio')}
        />
        <span className='error__name'>{errors.bio?.message}</span>

        <label htmlFor='contact'>Contato</label>
        <input
          type='text'
          id='contact'
          placeholder='Opção de contato'
          {...register('contact')}
        />
        <span className='error__name'>{errors.contact?.message}</span>

        <label htmlFor='course_module'>Selecionar Módulo</label>
        <select
          name='course_module'
          id='course_module'
          {...register('course_module')}
        >
          <option value='Primeiro módulo (Introdução ao Frontend)'>
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value='Segundo módulo (Frontend Avançado)'>
            Segundo módulo (Frontend Avançado)
          </option>
          <option value='Terceiro módulo (Introdução ao Backend)'>
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value='Quarto módulo (Backend Avançado)'>
            Quarto módulo (Backend Avançado)
          </option>
        </select>
        <span className='error__name'>{errors.course_module?.message}</span>

        <ButtonsStyled type='submit'>Cadastrar</ButtonsStyled>
      </FormStyled>
    </ContainerStyled>
  );
};

export default Register;
