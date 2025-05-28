import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import './Home.scss'

import urlFetch from "../axios/config";

const Home = () =>{
    const [posts, setPosts] = useState([])

    const getPosts = async () =>{
        try{
            const res = await urlFetch.get('/posts')
            
            const data = res.data

            setPosts(data)
        }catch(err){
            throw new Error(err)
        }
    }

    useEffect(() =>{
        getPosts()
    },[])

    return (
        <div className="home">
            <h1>All Posts</h1>
            {posts.length === 0 ? <p>Loading</p> : (
                posts.map((post) => (
                    <div className="post" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link to={`/posts/${post.id}`} className="btn">Read more</Link>
                    </div>
                ))
            )}
        </div>
       
    )
   
}

export default Home;