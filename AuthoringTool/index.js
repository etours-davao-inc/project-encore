import React from 'react';
import Product from './Product';

import { Provider } from './Context';

export default () => {
  return (
    <Provider>
      <Product />
    </Provider>
  )
}