import React, { useState } from 'react';
import Header from './Components/Header';
import Todo from './Components/Todo';
import './style.css';

export default function App() {
    return(
      <div>
        <Header/>
        <hr/>
        <br/>
        <Todo/>
      </div>
    )
}
