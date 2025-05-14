import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'; // ✅ import BrowserRouter
import "./styles/Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Form.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
