import React from 'react';
import ReactDOM from 'react-dom';

export default {
  mount: () => {
    console.log('here')
    const Hello = () => (<h1>Hello, Isabel</h1>);
    const root = document.getElementById('root');
    ReactDOM.render(<Hello />, root);
  }
}

