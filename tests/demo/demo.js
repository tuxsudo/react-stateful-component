import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from '../../src/index.js';
import style from './demo.css';

// Create demo here...
const demo = (
    <div className={style.container}>
        <MyComponent name="Jared" points={100000} />
        <MyComponent name="Sara" points={0} />
        <MyComponent name="Elijah" points={-111} />
    </div>
);


ReactDOM.render(
    demo,
    document.getElementById('app')
);
