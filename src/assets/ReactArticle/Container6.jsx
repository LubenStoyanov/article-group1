import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Container1 = () => {
  return (
    <div className='everyContainer'>
<div className='stepsimage'><h2>#TUTORIAL 6</h2>
      <img src="https://us.123rf.com/450wm/patthana/patthana2202/patthana220200035/181969353-abstract-green-neon-light-arrow-direction-geometric-on-grey-design-modern-futuristic-background-vect.jpg?ver=6"/></div>        <h3>Demystifying styled-components</h3>
        <p>For so many React devs, styled-components seems kinda magical. It isn't at all clear how it uses traditional CSS features under-the-hood, and that lack of clarity can cause real problems when things go awry. In this post, we'll learn exactly how styled-components works by building our own mini-version.</p>
        <Router>
           <Link to="www.joshwcomeau.com/react/next-level-playground/">Read more</Link> 
        </Router>
    </div>
  )
}

export default Container1
