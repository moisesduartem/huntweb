import React from 'react';
import './styles.css';

import Header from './components/Header/index.js';
import Main from './pages/main';

const App = () => (
  <div className="App">
    <Header />
    <Main message="Hello World" />
  </div>
);


export default App;
