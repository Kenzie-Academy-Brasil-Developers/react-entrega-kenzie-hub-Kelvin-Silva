import * as yup from 'yup';

export const schemaRegister = yup.object({
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

export const schemaLogin = yup.object({
  email: yup
    .string()
    .email('Deve ser um e-mail válido')
    .required('Email é obrigatório'),
  password: yup
    .string()
    .min(8, 'No minimo 8 caracteres')
    .required('Senha é obrigatória'),
});

export const schemaAddTec = yup.object({
  title: yup.string().required('Item obrigatório'),
  status: yup.string().required('Item obrigatório'),
});
