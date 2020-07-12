console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Routes),
    document.getElementById('mount')
  );
});