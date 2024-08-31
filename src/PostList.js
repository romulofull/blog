// src/components/PostList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/posts')
            .then(response => setPosts(response.data));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/api/posts/${id}`)
            .then(() => setPosts(posts.filter(post => post._id !== id)));
    };

    return (
        <div>
            <h1>MI BLOG</h1>
            <Link to="/crear">Crear Nuevo Post</Link>
            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <Link to={`/editar/${post._id}`}>Editar</Link>
                        <button onClick={() => handleDelete(post._id)}>Borrar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
