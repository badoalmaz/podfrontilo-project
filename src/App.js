import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AuthContextProvider from './contexts/AuthContext';
import MainRoutes from './MainRoutes';

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />
          <MainRoutes />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
