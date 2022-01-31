import React, { useState, useRef, useMemo } from 'react';
import PostList from './components/PostList';
import './styles/App.css'
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Race' },
    { id: 2, title: 'PHP', body: 'Chase of Base' },
    { id: 3, title: 'Goland', body: 'OI ' },
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' })


  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

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
      <hr style={{ margin: '15px 0 ' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {sortedAndSearchedPosts.length
        ?
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Post list №1' />
        :
        <h2 style={{ textAlign: 'center' }}>
          Posts not found!
        </h2>
      }
    </div>
  );
}

export default App;
