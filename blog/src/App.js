import { useState, useEffect } from "react";
import './App.css';
import Navbar from './container/Navbar'
import Hero from './container/Hero'
import Card from './container/Card';
import { addDataAPI, getDataAPI, updateDataAPI, deleteDataAPI } from './data'
import CreatePost from "./CreatePost";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    getDataAPI().then(posts => setPosts(posts));
  }, [])

  const addPost = (post) =>{
    return addDataAPI(post)
    .then(data => {
      setPosts([...posts, data])
    })
  }

  const updatePost = (post)=>{
    return updateDataAPI(post)
      .then(data=>{
        return data;
      })
  }

  const deletePost = (id)=>{
    console.log(id);
    return deleteDataAPI(id)
      .then(data=>{
        if(data.deletedCount == 1){
          setPosts(posts.filter(post => post.id !== id))
        }
      })
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CreatePost onCreate={addPost}/>
      <Card posts={posts} onDelete={deletePost} onUpdate={updatePost}/>
    </div>
  );
}

export default App;