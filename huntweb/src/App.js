import React from 'react';
import './styles.css';
import Routes from './routes';

import Header from './components/Header/index.js';
import Main from './pages/main';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);


export default App;
