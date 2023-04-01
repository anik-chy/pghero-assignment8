import React from "react";
import "./Post.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Post = (props) => {
  const {
    author_name,
    blog_title,
    cover_img,
    author_img,
    publist_date,
    read_time,
  } = props.post;
  const changeReadTimmer = props.readTimmer;
  
  return (
    <div className="post">
      <img id="cover-image" src={cover_img} alt="" />
      <div className="post-meta-data">
        <div className="post-detail-section">
          <div className="author-img">
            <img src={author_img} alt="" />
          </div>
          <div>
            <p id="author-name">{author_name}</p>
            <p id="publish-date">{publist_date}</p>
          </div>
        </div>
        <div>
          <p id="reading-time">{read_time} min read{" "}
          <button onClick={() => changeReadTimmer(read_time)}className='btn-bookmark'><FontAwesomeIcon icon={faBookmark} />
          </button>
          </p>
        </div>
      </div>
      <h3 id="blog-title">{blog_title}</h3>
      <button id="mark-read" onClick={() => changeReadTimmer(read_time)}>Mark as read</button>
    </div>
  );
};

export default Post;
