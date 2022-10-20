import './App.css';
import { GlobalStyle } from './styles/global';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import UserProvider from './contexts/UserContext';
import TechProvider from './contexts/TechContext';

function App() {
  return (
    <div className='App'>
      <ToastContainer autoClose={1000} />
      <GlobalStyle />

      <UserProvider>
        <TechProvider>
          <Routes />
        </TechProvider>
      </UserProvider>
    </div>
  );
}

export default App;
