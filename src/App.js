import React, { useState } from 'react';

function App() {
  //  Использовал деструктуризацию так как функция,
  //  UseState возвращает массив из двух объектов
  //  1ый аргумент функции.
  //  2ой Функция которая обновляет State
  const [likes, setLikes] = useState(5)
  const [value, setValue] = useState('Input text')

  function increment() {
    setLikes(likes + 1)
  }

  function decrement() {
    setLikes(likes - 1)

  }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <h2>{value}</h2>
      {/* Применял двухсторонее связывание.
       Состояния h2 и Input  */}
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
