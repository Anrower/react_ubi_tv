import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import PostItem from './components/PostItem';
import './styles/App.css'

function App() {
  //  Использовал деструктуризацию так как функция,
  //  UseState возвращает массив из двух объектов
  //  1ый аргумент функции.
  //  2ой Функция которая обновляет State
  const [value, setValue] = useState('Input text')

  return (
    <div className="App">
      <PostItem />
    </div>
  );
}

export default App;
