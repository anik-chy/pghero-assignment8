import React from 'react';
import './Bookmarked.css'

const Bookmarked = (props) => {
    return (
        <div className='bookmarked-post'>
            <p>{props.titles}</p>
        </div>
    );
};

export default Bookmarked;