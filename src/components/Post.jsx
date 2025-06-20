import React, { useState } from 'react'
import {PostComponent} from  "./Postcomponent"

export const Post = () => {
    const [posts,setposts]=useState([]);
    const postComponents=posts.map(post=><PostComponent
     name={post.name}
    subtitle={post.subtitle}
    time={post.title}
    image={post.image}
    description={post.description}
    />)

    function addPost(){
        setposts([...posts,{
      name: "Uday",
      subtitle: "10000 followers",
      time: "2m ago",
      image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description: "Hey my name is uday."
    }])
    }
   return (
    <div style={{background: "#dfe6e9", height: "100vh", }}>
      <button onClick={addPost}>Add post</button>
      <div style={{display: "flex", justifyContent: "center" }}>
        <div>
          {postComponents}
        </div>
      </div>
    </div>
  )
}


