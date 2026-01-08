import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import RenderName from './RenderName.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RenderName name='Carlos' />
  </StrictMode>
);
