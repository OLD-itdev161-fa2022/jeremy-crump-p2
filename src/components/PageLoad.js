import React from 'react'
import { useSpring, animated} from 'react-spring'
import './home.css'

export default function PageLoad() {
  
  const h1 = useSpring({
    from: { opacity: 0, marginLeft: -100},
    to: { opacity: 1, marginLeft: 0 },
    delay: 1000,
    config: {duration: 1000},
    
  })
    return (
   
      <animated.div style={h1}>
        <h1>Hey, I'm Jeremy</h1>
      </animated.div>
    );
}
