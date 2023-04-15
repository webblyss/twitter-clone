import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TwitterProvider } from "./utils/ContextAPI";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <TwitterProvider>
    <App />
  </TwitterProvider>
  </React.StrictMode>
);
