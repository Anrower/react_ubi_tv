import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import './styles/App.css'

function App() {
  //  Использовал деструктуризацию так как функция,
  //  UseState возвращает массив из двух объектов
  //  1ый аргумент функции.
  //  2ой Функция которая обновляет State
  const [value, setValue] = useState('Input text')

  return (
    <div className="App">
      <div className='post'>
        <div className='post__content'>
          <strong>1. Javascript</strong>
          <div>
            Javascript - is programming language
          </div>
        </div>
        <div className='post__btns'>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
