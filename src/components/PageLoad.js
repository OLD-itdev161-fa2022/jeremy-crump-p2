import React from 'react'
import { useSpring, animated} from 'react-spring'
import './home.css'

export default function PageLoad() {

  
    const h1 = useSpring({
      from: { opacity: 0, marginLeft: -300 },
      to: { opacity: 1, marginLeft: 0 },
      config: { duration: 500 },
    });

    return (
   
      <animated.div style={h1}>
        <h1>Hey, Im Jeremy</h1>
      </animated.div>
    );
}
