import { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import api from '../services/api';
import { schemaRegister } from '../validations/registerUser';
import { yupResolver } from '@hookform/resolvers/yup';

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [techs, setTechs] = useState([]);
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

  async function loginUser(data) {
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
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  async function registerUser(data) {
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
