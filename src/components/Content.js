import React from "react";
import { useSpring, animated } from "react-spring";
import "./home.css";
import Zoom from 'react-reveal/Zoom'
import { GatsbyImage } from "gatsby-plugin-image"

export default function Content() {

  const h2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
  });

  return (
    <animated.div style={h2}>
      <Zoom>
        <h2 id="status">
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
          You can continue down the page to see some of the code I used for the contact form as well as come of the react animation components I added to this website. 
        </h2>
      </Zoom>
      <Zoom> 
        <div id="image-container" className="status1">
          <div>
            <h2 className="image-text">Dependencies</h2>
            <p>text text</p>
          </div> 
          <div>
            {/* <GatsbyImage
              src="../images/dependencies.png"
              alt="code screenshot of dependencies"
            /> */}
          </div>
        </div>
      </Zoom>
      <Zoom>
        <div id="image-container" className="status1">
          <div>
            <h2 className="image-text">Nodemailer</h2>
            <p>text text</p>
          </div> 
          <div>
            {/* <GatsbyImage
              src="../images/nodemailer.png"
              alt="code screenshot of nodemailer"
            /> */}
          </div>
        </div>
      </Zoom> 
      <Zoom> 
        <div id="image-container" className="status1">
          <div>
            <h2 className="image-text">Router</h2>
            <p>text text</p>
          </div> 
          <div>
            {/* <GatsbyImage
              src="../images/router.png"
              alt="code screenshot of router"
            /> */}
          </div>
        </div>
      </Zoom>
      <Zoom>  
        <div id="image-container" className="status1">
          <div>
            <h2 className="image-text">Express</h2>
            <p>text text</p>
          </div> 
          <div>
            {/* <GatsbyImage
              src="../images/express.png"
              alt="code screenshot of express"
            /> */}
          </div>
        </div>
      </Zoom>
      <Zoom> 
        <div id="image-container" className="status1">
          <div>
            <h2 className="image-text">Form</h2>
            <p>text text</p>
          </div> 
          <div>
            {/* <GatsbyImage
              src="../images/formJs.png"
              alt="code screenshot of form.js"
            /> */}
          </div>
        </div>
      </Zoom>
      <Zoom> 
        <div id="image-container" className="status1">
          <div>
            <h2 className="image-text">Form Return Statement</h2>
            <p>text text</p>
          </div> 
          <div>
            {/* <GatsbyImage
              src="../images/returnFormjs.png"
              alt="code screenshot of return statement on form.js"
            /> */}
          </div>
        </div>
      </Zoom>      
    </animated.div>
  );
}
