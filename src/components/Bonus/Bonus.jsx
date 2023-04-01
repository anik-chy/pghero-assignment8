import React from 'react';
import './Bonus.css'

const Bonus = () => {
    return (
        <div className='bonus-container'>
            <h5>Props vs state</h5>
            <p>State is owned by the local jsx file and the component itself updates it but props are owned and read only by a parent.</p>
            <h5>How does useState work?</h5>
            <p>useState is a react hook. it adds state to a functional component.</p>
            <h5>Purpose of useEffect other than fetching data.</h5>
            <p>It controls the outside effect over the file. useEffect runs after every render. So, if we need anything to update periodically we can use it.</p>
            <h5>How Does React work?</h5>
            <p>One of the biggest advantages of using React is that you can infuse HTML code with JavaScript.Users can create a representation of a DOM node by declaring the Element function in React. </p>
        </div>
    );
};

export default Bonus;