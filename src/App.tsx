import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Navbar } from './components/Navbar';
import { ShoppingCartProvider } from './providers/ShoppingCartProvider';

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App