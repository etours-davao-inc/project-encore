import React, { useContext } from 'react';

import { Context } from './Context';

export default () => {
  const { data } = useContext(Context);
  return (
    <React.Fragment>
      <h1>{data.productName}</h1>
      <div style={style.inputGroup}>
        <label for="productName" style={style.label}>Product Name</label>
        <input 
          id="productName" 
          type="text" 
          style={style.input} 
          value={data.productName}
          name="productName"
          onChange={e => actions.onInputChange(e)} />
      </div>
    </React.Fragment>
  )
};

const style = {
  inputGroup: {
    display: 'grid',
    gridTemplateColumns: "150px auto",
    alignItems: 'center'
  },
  label: {
    fontSize: '18px',
    color: 'gray',
    lineHeight: '18px'
  },
  input: {
    width: '450px',
    fontSize: '18px',
    color: 'gray',
    lineHeight: '18px',
    padding: '4px'
  }
}