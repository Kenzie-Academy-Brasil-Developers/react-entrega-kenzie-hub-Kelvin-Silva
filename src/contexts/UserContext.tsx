import { createContext, ReactNode, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  FieldErrorsImpl,
  FieldPathValues,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { toast } from 'react-toastify';
import api from '../services/api';
import { schemaRegister } from '../validations/registerUser';
import { yupResolver } from '@hookform/resolvers/yup';
import { string } from 'yup';

interface IUserContextProps {
  children: ReactNode;
}

export interface IDataLogin {
  email: string;
  password: string;
}

interface IDataRegister {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: string[];
  works: string[];
  created_at: string;
  updated_at: string;
  avatar_url: string | null;
}

export interface ITechs {
  title: string;
  status: string;
  id: string;
}

interface ISchemaRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  techs: ITechs[];
  setTechs: React.Dispatch<React.SetStateAction<ITechs[]>>;
  registerUser: (data: IDataRegister) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<ISchemaRegister>;
  register: UseFormRegister<any>;
  errors: FieldErrorsImpl;
  loginUser: (data: IDataLogin) => Promise<void>;
  loading: boolean;
}

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IUserContextProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [techs, setTechs] = useState([] as ITechs[]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem('HubToken');

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get('/profile');

          setUser(data);
          setTechs(data.techs);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }

    loadUser();
  }, []);

  async function loginUser(data: IDataLogin) {
    try {
      localStorage.clear();
      const response = await api.post('/sessions', data);

      const { user: userResponse, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      setUser(userResponse);
      localStorage.setItem('HubToken', token);
      localStorage.setItem('HubId', response.data.user.id);

      const toNavigate = location.state?.from?.pathname || 'home';
      toast.success('Usuário logado com sucesso');

      setTimeout(() => {
        navigate(toNavigate, { replace: true });
      }, 2000);
    } catch (error: any) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISchemaRegister>({
    resolver: yupResolver(schemaRegister),
  });

  async function registerUser(data: IDataRegister) {
    api
      .post('/users', data)
      .then((response) => {
        toast.success('Usuário cadastrado');
      })
      .catch((error) => {
        console.error(error.response.data);
        toast.error(error.response.data.message);
      });
    reset();
  }

  return (
    <UserContext.Provider
      value={{
        registerUser,
        handleSubmit,
        register,
        errors,
        loginUser,
        user,
        loading,
        techs,
        setTechs,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
