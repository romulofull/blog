import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './PostList';
import PostForm from './PostForm';
import './estilos.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PostList />} />
                <Route path="/crear" element={<PostForm />} />
                <Route path="/editar/:id" element={<PostForm />} />
                </Routes>
        </Router>
    );
};

export default App;
