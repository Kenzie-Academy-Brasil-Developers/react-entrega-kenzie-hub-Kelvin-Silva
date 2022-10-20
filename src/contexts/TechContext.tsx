import { createContext, useContext } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';
import { ITechs, IUserContext, UserContext } from './UserContext';

export const TechContext = createContext<ITechContext>({} as ITechContext);

interface ITechContextProps {
  children: React.ReactNode;
}

export interface ITechContext {
  newTech: (data: ITechs) => Promise<void>;
}

const TechProvider = ({ children }: ITechContextProps) => {
  const { techs, setTechs } = useContext<IUserContext>(UserContext);

  async function newTech(data: ITechs) {
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
