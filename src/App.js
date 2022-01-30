import React, { useState, useRef } from 'react';
import PostList from './components/PostList';
import './styles/App.css'
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Race' },
    { id: 2, title: 'PHP', body: 'Chase of Base' },
    { id: 3, title: 'Goland', body: 'OI' },
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  // get post from child compontent
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0 ' }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Sort by'
          options={[
            { value: 'title', name: 'Name' },
            { value: 'body', name: 'Description' }
          ]}
        />
      </div>
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
