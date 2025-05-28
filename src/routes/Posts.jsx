import urlFetch from "../axios/config";

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import './Posts.scss'

const Posts = () =>{
    const { id } = useParams();
    const [post, setPost] = useState({});

    const getPosts = async() =>{
        try{
            const res = await urlFetch.get(`/posts/${id}`)

            const data = res.data
        
            setPost(data)
        }catch(err){
            throw new Error(err)
        }
        
    };

    useEffect(() =>{
        getPosts()
    },[])

    return(
        <div className="post-container" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default Posts