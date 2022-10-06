import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { GlobalStyle } from './styles/global';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import { ButtonsStyled } from './styles/buttons';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <ToastContainer />
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
