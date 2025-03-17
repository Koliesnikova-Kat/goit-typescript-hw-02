// import React from "react";
import ReactDOM from 'react-dom/client';
import 'modern-normalize';

import App from './components/App/App';
// import './style.css';
import { Toaster } from 'react-hot-toast';

const container = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(container).render(
  // <React.StrictMode>
  <>
    <App />
    <Toaster position='top-center' />
  </>
  // </React.StrictMode>
);
