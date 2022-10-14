import { createContext, useContext } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';
import { UserContext } from '../contexts/UserContext';

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const { techs, setTechs } = useContext(UserContext);

  async function newTech(data) {
    try {
      const response = await api.post('/users/techs', data);
      
      toast.success('Nova tecnologia adicionada');
      setTechs([...techs, response.data]);

    } catch (error) {
      toast.error('Essa tecnologia já existe');
      console.error(error);
    }
  }

  return (
    <TechContext.Provider value={{ newTech }}>{children}</TechContext.Provider>
  );
};

export default TechProvider;
