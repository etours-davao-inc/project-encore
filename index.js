import React from 'react';
import ReactDOM from 'react-dom';

import AuthoringTool from './AuthoringTool';

export default {
  mount: () => {
    console.log('here')
    const root = document.getElementById('root');
    ReactDOM.render(<AuthoringTool />, root);
  }
}

