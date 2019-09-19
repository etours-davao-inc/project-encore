import React, { useContext } from 'react';
import Context from '../Context';

export default () => {
  const { data } = useContext(Context);
  return (
    <section style={style.section}></section>
  )
}

const style = {
  section: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    height: '100%',
    width: '100%',
    border: '1px solid silver',
    marginTop: '15px'
  }
}