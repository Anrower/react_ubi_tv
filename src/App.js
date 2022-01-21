import React, { useState } from 'react';
import PostItem from './components/PostItem';
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'PHP', body: 'Description' },
    { id: 3, title: 'Goland', body: 'Description' },
  ])

  return (
    <div className="App">
      {posts.map(post =>
        <PostItem post={post} />
      )}
    </div>
  );
}

export default App;
