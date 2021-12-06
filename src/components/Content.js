import React from "react";
import { useSpring, animated } from "react-spring";
import "./home.css";
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import { StaticImage } from "gatsby-plugin-image"

export default function Content() {

  const h2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
  });

  return (
    <animated.div style={h2}>
      <Zoom>
        <h2 id="status" className="status1">
          This is a website i'm creating for <span>[IT-DEV 161-500]</span> Project 2
          <br></br>
          <br></br>
          I decided on doing the deep dive option of Project 2. I wanted to try something new and expand on some of the technologies we learned this semester. 
          <br></br>
          <br></br>
          For this website, I used <span>React</span> with <span>Gatsby.js</span>. It was cool learning more about components in react. I'm beginning to feel alot more comfortable navigating through React and how to use this framework.
          <br></br>
          <br></br>
          There is a form submission on the contact page using a <span>[Node.js Express]</span>
          <br></br>
          <br></br>
          You can continue down the page to see some of the code I used. 
        </h2>
      </Zoom>
      <Zoom> 
        <h2 id="status" className="status2">
          These are some cards where content will go
        </h2>
      </Zoom>
      <Zoom>
        <h2 id="status" className="status3">
          if you keep scrolling more will appear
        </h2>
      </Zoom> 
      <Zoom> 
        <h2 id="status" className="status4">
          here is another card, this one is a different color as well
        </h2>
      </Zoom>
      <Zoom>  
        <h2 id="status" className="status5">
          This one is light sea green!
        </h2>
      </Zoom>
      <Fade>
        <div className="image-container">
          <h2 className="image-text">Here is a photo of my cat, Scarlet</h2> 
          <StaticImage
            src="../images/Scarlet_Instagram_Rollei35.jpg"
            alt="Scarlet the cat"
          />
        </div>
      </Fade>   
    </animated.div>
  );
}
