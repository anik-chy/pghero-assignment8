import React, { useEffect, useState } from 'react';
import './Blog.css'
import Post from '../Post/Post';


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
                {
                    posts.map(post => <Post
                        key={post.id}
                        post={post}
                    ></Post>)
                }
            </div>
            <div className='bookmarked-container'>
                <div className='spent-time'>
                    <p>Spent time on read: <span>100</span> min</p>
                </div>
                <div className="book-marked-blogs">
                    <p>Bookmarked Blogs : <span>8</span></p>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;