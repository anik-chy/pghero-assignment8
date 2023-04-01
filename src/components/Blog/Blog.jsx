import React, { useEffect, useState } from 'react';
import './Blog.css'
import Post from '../Post/Post';


const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [readTime, setReadTime] = useState(0);
    
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/anik-chy/fake-blog-data/main/blogs.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    const changeReadTime = (curReadTime) => {
        let newReadingTime = readTime + curReadTime;
        console.log(curReadTime);
        setReadTime(newReadingTime);
    }

    return (
        <div className='blog-container'>
            <div className='post-container'>
                {
                    posts.map(post => <Post
                        key={post.id}
                        post={post}
                        readTimmer={changeReadTime}
                    ></Post>)
                }
            </div>
            <div className='bookmarked-container'>
                <div className='spent-time'>
                    <p>Spent time on read: {readTime} min</p>
                </div>
                <div className="book-marked-blogs">
                    <p>Bookmarked Blogs : <span>8</span></p>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;