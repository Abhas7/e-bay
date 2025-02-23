import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import Sign from './Sign';
import Register from './Register';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     <Register /> 
     <Sign /> 
  </StrictMode>
);