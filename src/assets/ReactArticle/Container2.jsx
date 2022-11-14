import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Container1 = () => {
  return (
    <div className='everyContainer'>
<div className='stepsimage'><h2>#TUTORIAL 2</h2>
      <img src="https://us.123rf.com/450wm/patthana/patthana2202/patthana220200035/181969353-abstract-green-neon-light-arrow-direction-geometric-on-grey-design-modern-futuristic-background-vect.jpg?ver=6"/></div> <h3>Understanding useMemo and useCallback</h3>
        <p>What's the deal with these two hooks?! Lots of devs find them confusing, for a whole host of reasons. In this tutorial, we'll dig deep and understand what they do, why they're useful, and how to get the most out of them.</p>
        <Router>
           <Link to="www.joshwcomeau.com/react/next-level-playground/">Read more</Link> 
        </Router>
    </div>
  )
}

export default Container1
