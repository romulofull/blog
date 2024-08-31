import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [postId, setPostId] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/api/posts/${id}`)
                .then(response => {
                    setTitle(response.data.title);
                    setContent(response.data.content);
                    setPostId(id);
                });
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { title, content };
        if (postId) {
            axios.put(`http://localhost:5000/api/posts/${postId}`, post)
                .then(() => navigate('/'));
        } else {
            axios.post('http://localhost:5000/api/posts', post)
                .then(() => navigate('/'));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titulo" required />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Contenido" required />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default PostForm;
