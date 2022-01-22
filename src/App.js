import React, { useState, useRef } from 'react';
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

  const [post, setPost] = useState({ title: '', body: '' })

  // const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, { ...post, id: Date.now() }])
    setPost({ title: '', body: '' })

    // console.log(title)
    // console.log(bodyInputRef.current.value)
  }

  return (
    <div className="App">
      <form>
        {/* Managed component */}
        <MyInput
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
          type='text'
          placeholder='Post name'
        />
        {/* UnManaged Component */}
        <MyInput
          // ref={bodyInputRef}
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
          type='text'
          placeholder='Post description'
        />
        <MyButton onClick={addNewPost}>Create new post</MyButton>
      </form>
      <PostList posts={posts} title='Post list №1' />
    </div>
  );
}

export default App;
