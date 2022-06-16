// import logo from './logo.svg';
import React from 'react';

import './App.css';
import { Counter } from './components/Counter/Counter';
import { Likes } from './components/Likes/Likes';
import { ClassCounter } from './components/ClassCounter.scss/ClassCounter';

const App = () => {
  return (
    <div className="App">
      <Likes />
      <Counter />
      <ClassCounter />
    </div>
  );
}

export default App;
