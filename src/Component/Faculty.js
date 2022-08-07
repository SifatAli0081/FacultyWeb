import React, { useEffect, useState } from 'react'
import Card from './Card';
import './Faculty.css';
import Header from './Header';

const Faculty = () => {
    const [posts,setposts] =useState([]);
    useEffect(() =>{
        fetch('https://mocki.io/v1/3f4bb4e6-2060-40a5-b454-6c35030416e1')
        .then((response) =>response.json())
        .then((data)=>{
          setposts(data);
        })
        .catch((error) =>{console.log(error);})
    },[])
  return (
    <div>
    <Header/>
    <div>
    <h2 className="header m-5">UIU Facultys</h2>
    <section>
    {
      posts.map((posts) =>(<Card
      posts={posts} 
      name={posts.name}
      image={posts.image}
        />
      ))
    }
    </section>
    </div>
    </div>
  )
}

export default Faculty;