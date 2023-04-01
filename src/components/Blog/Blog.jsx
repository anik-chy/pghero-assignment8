import React, { useEffect, useState } from 'react';
import './Blog.css'
import Post from '../Post/Post';
import Bookmarked from '../Bookmarked/Bookmarked';


const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [readTime, setReadTime] = useState(0);
    const [bookmarkedPost, setBookmarkTitle] = useState([]);
    
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

    const changeBookmarked = (curPostTitle) => {
        for(let title of bookmarkedPost)
        {
            if(title === curPostTitle)
            {
                console.log("found")
                return;
            }
        }
        {
            const newBookmarkedPosts = [...bookmarkedPost,curPostTitle]
            setBookmarkTitle(newBookmarkedPosts)
            // bookMarkedPostTitles.map(<Bookmarked titles={bookmarkedPost}></Bookmarked>)
        }
    }

    return (
        <div className='blog-container'>
            <div className='post-container'>
                {
                    posts.map(post => <Post
                        key={post.id}
                        post={post}
                        readTimmer={changeReadTime}
                        bookMarker={changeBookmarked}
                    ></Post>)
                }
            </div>
            <div className='bookmarked-container'>
                <div className='spent-time'>
                    <p>Spent time on read: {readTime} min</p>
                </div>
                <div className="book-marked-blogs">
                    <p>Bookmarked Blogs : {bookmarkedPost.length}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;