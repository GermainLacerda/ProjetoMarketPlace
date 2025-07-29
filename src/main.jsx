import { StrictMode } from 'react';
import   ReactDOM  from 'react-dom/client';
import './styles/index.css';
import AppRoutes from './routes/routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
);

