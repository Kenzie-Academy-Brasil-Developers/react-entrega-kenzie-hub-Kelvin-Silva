import React, { useContext, useState } from 'react';

import { FormStyled } from '../../styles/form';
import { ContainerStyled } from '../login/style';
import { ButtonsStyled } from '../../styles/buttons';

import { AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../contexts/UserContext';

const Register = () => {
  const { errors, registerUser, handleSubmit, register } =
    useContext(UserContext);

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
        <select id='course_module' {...register('course_module')}>
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
