import React from "react";
import "./Post.css";
import icon from "/bookmark.svg";

const Post = (props) => {
  const {
    author_name,
    blog_title,
    cover_img,
    author_img,
    publist_date,
    read_time,
  } = props.post;

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
            <p id="reading-time">{read_time} min read <iframe src={icon} frameborder="0" width="20px" height="20px"></iframe></p>
        </div>
      </div>
      <h3 id="blog-title">{blog_title}</h3>
      <button id="mark-read">Mark as read</button>
    </div>
  );
};

export default Post;
