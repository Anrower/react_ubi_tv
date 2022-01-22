import React, { useState } from 'react';
import PostList from './components/PostList';
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'PHP', body: 'Description' },
    { id: 3, title: 'Goland', body: 'Description' },
  ])

  return (
    <div className="App">

      <PostList posts={posts} title='Post list №1' />
    </div>
  );
}

export default App;
