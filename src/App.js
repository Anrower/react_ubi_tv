import React, { useState } from 'react';
import PostList from './components/PostList';
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'PHP', body: 'Description' },
    { id: 3, title: 'Goland', body: 'Description' },
  ])
  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Ruby', body: 'Description' },
    { id: 2, title: 'C#', body: 'Description' },
    { id: 3, title: 'C++', body: 'Description' },
  ])

  return (
    <div className="App">
      <PostList posts={posts} title='Post list №1' />
      <PostList posts={posts2} title='Post list №2' />
    </div>
  );
}

export default App;
