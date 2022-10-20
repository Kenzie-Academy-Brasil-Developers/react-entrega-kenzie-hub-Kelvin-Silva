import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ButtonsStyled } from '../../styles/buttons';
import { UserContext } from '../../contexts/UserContext';
import { HomeStyled } from './style';

import { MdOutlineAdd } from 'react-icons/md';
import { BsFillTrashFill } from 'react-icons/bs';
import AddModal from '../../components/AddModal';
import api from '../../services/api';
import { toast } from 'react-toastify';

export interface IShowModal {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Home() {
  const { user, techs, setTechs } = useContext(UserContext);
  const [showModal, setShowModal] = useState<IShowModal | boolean>(false);

  const navigate = useNavigate();

  function logOut() {
    window.localStorage.clear();

    navigate('/login');
  }

  async function remove(idTech: string) {
    try {
      await api.delete(`/users/techs/${idTech}`);
      toast.success('Tecnologia Apagada');

      const techsFiltered = techs.filter((techs) => techs.id !== idTech);
      setTechs(techsFiltered);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {user && (
        <HomeStyled>
          <nav>
            <div className='container'>
              <h1>Kenzie Hub</h1>
              <ButtonsStyled onClick={logOut}>Sair</ButtonsStyled>
            </div>
          </nav>
          <header>
            <div className='container'>
              <h2>Olá, {user.name}</h2>
              <p>{user.course_module}</p>
            </div>
          </header>
          <main>
            <div className='container'>
              <section>
                <div>
                  <h3>Tecnologias</h3>
                  <button onClick={() => setShowModal(true)}>
                    <MdOutlineAdd size={24} />
                  </button>
                </div>
                <ul>
                  {techs.length ? (
                    techs.map((techs, index) => {
                      return (
                        <li key={index}>
                          <h4>{techs.title}</h4>
                          <div>
                            <span>{techs.status}</span>
                            <button onClick={() => remove(techs.id)}>
                              <BsFillTrashFill color='white' size={13} />
                            </button>
                          </div>
                        </li>
                      );
                    })
                  ) : (
                    <h4>Não há tecnologias</h4>
                  )}
                </ul>
              </section>
            </div>
          </main>
        </HomeStyled>
      )}
      {showModal && <AddModal setShowModal={setShowModal} />}
    </>
  );
}

export default Home;
