import React from 'react';

import { Provider } from './Context';

import Product from './Product';
import ActivityCanvas from './ActivityCanvas';

export default () => {
  return (
    <Provider>
      <Product />
      <ActivityCanvas />
    </Provider>
  )
}