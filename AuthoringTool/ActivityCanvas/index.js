import React, { useContext } from 'react';
import { Context } from '../Context';

import Activity from './Activity';

export default () => {
  const { data } = useContext(Context);
  return (
    <section style={style.section}>
      <Activity />
      <AddColumn />
    </section>
  )
}

const AddColumn = () => {
  return (
    <div style={style.addColumn}> +Add New Day</div>
  )
}

const style = {
  section: {
    display: 'grid',
    gridGap: '8px',
    gridTemplateColumns: '1fr 1fr 1fr',
    padding: '12px',
    height: '100%',
    width: '100%',
    border: '1px solid silver',
    marginTop: '15px'
  },
  addColumn: {
    textAlign: 'center',
    padding: '40px 0 40px 0',
    color: '#586069',
    backgroundColor: 'white',
    borderRadius: '6px',
    border: '2px dashed silver'
  }
}