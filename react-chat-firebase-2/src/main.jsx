import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom'

import App from './components/App.jsx';

import { initializeApp } from "firebase/app";


//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSTJtjsBBOjOUBUu2cizOpgGukKX1P0T8",
  authDomain: "react-chat-au24.firebaseapp.com",
  projectId: "react-chat-au24",
  storageBucket: "react-chat-au24.firebasestorage.app",
  messagingSenderId: "65861974881",
  appId: "1:65861974881:web:988d0738095336d6552320"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);