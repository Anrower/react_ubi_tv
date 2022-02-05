import React, { useState, useRef, useMemo } from 'react';
import PostList from './components/PostList';
import './styles/App.css'
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/UsePosts'


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Race' },
    { id: 2, title: 'PHP', body: 'Chase of Base' },
    { id: 3, title: 'Goland', body: 'OI ' },
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  // get post from child compontent
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0 ' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title='Post list №1'
      />
    </div >
  );
}

export default App;
