import React from 'react';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('contents');
const root = createRoot(container);
root.render(<App />);
