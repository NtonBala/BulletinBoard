import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';

ReactDOM.render(
    React.createElement(
        Board,
        {count: 11}
    ),
    document.getElementById('react-container')
);
