import React, { useEffect, useState } from 'react';
import './Blog.css'


const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/anik-chy/fake-blog-data/main/blogs.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    return (
        <div className='blog-container'>
            <div className='post-container'>
                
            </div>
            <div className='bookmarked-container'>
                <h4>Right Section</h4>
            </div>
            
        </div>
    );
};

export default Blog;