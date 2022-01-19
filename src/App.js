import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';

function App() {
  //  Использовал деструктуризацию так как функция,
  //  UseState возвращает массив из двух объектов
  //  1ый аргумент функции.
  //  2ой Функция которая обновляет State
  const [value, setValue] = useState('Input text')

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      {/* Применял двухсторонее связывание.
       Состояния h2 и Input  */}
    </div>
  );
}

export default App;
