import React from "react";
import { useSpring, animated } from "react-spring";
import "./home.css";
import Zoom from 'react-reveal/Zoom'
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
          <div className="image-text">
            <h2>Dependencies</h2>
            <p>These are the required dependencies for Server.js :</p>
            <ul>
              <li>Express</li>
              <li>Cors</li>
              <li>Nodemailer</li>
            </ul>
          </div> 
          <div className="image-item">
            <StaticImage
              src="../images/dependencies.png"
              alt="code screenshot of dependencies"
            />
          </div>
        </div>
      </Zoom>
      <Zoom> 
        <div id="image-container" className="status1">
          <div className="image-text">
            <h2>Nodemailer</h2>
            <p>This is a node module used for e-mail sending. I used a fake email and password from ethereal for testing purposes. You are still able to send a message to this email and I will receive it at that address.</p>
            
          </div> 
          <div className="image-item">
            <StaticImage
              src="../images/nodemailer.png"
              alt="code screenshot of dependencies"
            />
          </div>
        </div>
      </Zoom>      
      <Zoom> 
        <div id="image-container" className="status1">
          <div className="image-text">
            <h2>Middleware</h2>
            <p>This is the express.js router middleware similar to what we learned about this semester. This time we are using it to create an email message that will be sent from the contact page.</p>         
          </div> 
          <div className="image-item">
            <StaticImage
              src="../images/router.png"
              alt="code screenshot of middleware"
            />
          </div>
        </div>
      </Zoom>
      <Zoom> 
        <div id="image-container" className="status1">
          <div className="image-text">
            <h2>Form</h2>
            <p>This is the backend code for the contact form.</p>         
          </div> 
          <div className="image-item">
            <StaticImage
              src="../images/formJs.png"
              alt="code screenshot of form"
            />
          </div>
        </div>
      </Zoom>             
    </animated.div>
  );
}
