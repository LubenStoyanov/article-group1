import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Container1 = () => {
  return (
    <div className='everyContainer'>
<div className='stepsimage'><h2>#TUTORIAL 3</h2>
      <img src="https://us.123rf.com/450wm/patthana/patthana2202/patthana220200035/181969353-abstract-green-neon-light-arrow-direction-geometric-on-grey-design-modern-futuristic-background-vect.jpg?ver=6"/></div> <h3>Why React Re-Renders</h3>
        <p>In React, we don't update the DOM directly, we tell React what we want the DOM to look like, and React tackles the rest. But how exactly does it do this? In this tutorial, we'll unpack exactly when and why React re-renders, and how we can use this information to optimize the performance of our React apps.</p>
        <Router>
           <Link to="www.joshwcomeau.com/react/next-level-playground/">Read more</Link> 
        </Router>
    </div>
  )
}

export default Container1
