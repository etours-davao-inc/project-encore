import React, { useContext } from 'react';
import Context from '../../Context';

export default () => {
  return (
    <div style={style.wrapper}>
      <p style={style.header}>Itinerary</p>
      <button style={style.btnPrimary}>Add</button>
      <p style={style.header}>Transportation</p>
      <button style={style.btnPrimary}>Add</button>
      <p style={style.header}>Accommodation</p>
      <button style={style.btnPrimary}>Add</button>
      <p style={style.header}>Expenses</p>
      <button style={style.btnPrimary}>Add</button>
    </div>
  )
}

const style = {
  wrapper: {
    padding: '4px',
    backgroundColor: 'white',
    border: '1px solid silver',
    borderRadius: '2px',
    minHeight: '200px'
  },
  header: {
    fontWeight: 'bold'
  },
  btnPrimary: {
    color: '#fff',
    backgroundColor: '#28a745',
    backgroundImage: 'linear-gradient(-180deg,#34d058,#28a745 90%)'
  }
}