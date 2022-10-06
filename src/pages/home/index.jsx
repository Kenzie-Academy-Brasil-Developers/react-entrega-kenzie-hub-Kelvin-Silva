import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { ButtonsStyled } from '../../styles/buttons';
import { HomeStyled } from './style';

function Home() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const token = localStorage.getItem('HubToken');
  useEffect(() => {
    async function loginUser() {
      await api
        .get('/profile')
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => console.error(error));
    }
    if (token) {
      loginUser();
    }
  }, []);

  function logOut() {
    window.localStorage.clear();

    navigate('/login');
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
              <p> Que pena! Estamos em desenvolvimento :(</p>
              <span>
                Nossa aplicação está em desenvolvimento, em breve teremos
                novidades
              </span>
            </div>
          </main>
        </HomeStyled>
      )}
    </>
  );
}

export default Home;
