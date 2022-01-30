import React, { useState, useRef } from 'react';
import PostList from './components/PostList';
import './styles/App.css'
import PostForm from './components/PostForm';


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'PHP', body: 'Description' },
    { id: 3, title: 'Goland', body: 'Description' },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  // get post from child compontent
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length !== 0
        ?
        <PostList remove={removePost} posts={posts} title='Post list №1' />
        :
        <h2 style={{ textAlign: 'center' }}>
          Posts not found!
        </h2>
      }
    </div>
  );
}

export default App;
