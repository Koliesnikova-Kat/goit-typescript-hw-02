import ReactDOM from 'react-dom/client';
import App from './App';
import { Toaster } from 'react-hot-toast';

const container = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(container).render(
  <>
    <App />
    <Toaster position='top-center' />
  </>
);
