import React from 'react';
import Container1 from './Container1';
import Container2 from './Container2';
import Container3 from './Container3';
import Container4 from './Container4';
import Container5 from './Container5';
import Container6 from './Container6';


const Main = () => {
  return (
    <div>
      <h1>REACT</h1>
      <div className='containers'>
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
        <Container6 />
      </div>
    </div>
  )
}

export default Main
