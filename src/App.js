import React, { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import './styles/App.css'
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'PHP', body: 'Description' },
    { id: 3, title: 'Goland', body: 'Description' },
  ])

  return (
    <div className="App">
      <form>
        <MyInput type='text' placeholder='Post name' />
        <MyInput type='text' placeholder='Post description' />
        <MyButton disabled>Create new post</MyButton>
      </form>
      <PostList posts={posts} title='Post list №1' />
    </div>
  );
}

export default App;
