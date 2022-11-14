import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Container1 = () => {
  return (
    <div className='everyContainer'>
<div className='stepsimage'><h2>#TUTORIAL 5</h2>
      <img src="https://us.123rf.com/450wm/patthana/patthana2202/patthana220200035/181969353-abstract-green-neon-light-arrow-direction-geometric-on-grey-design-modern-futuristic-background-vect.jpg?ver=6"/></div>        <h3>Delightful React File/Directory Structure</h3>
        <p>How should we structure components and other files in our React apps? I've iterated my way to a solution I'm really happy with. In this blog post, I'll share how it works, what the tradeoffs are, and how I mitigate them.</p>
        <Router>
           <Link to="www.joshwcomeau.com/react/next-level-playground/">Read more</Link> 
        </Router>
    </div>
  )
}

export default Container1
