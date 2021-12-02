import React from "react";
import { useSpring, animated } from "react-spring";
import "./home.css";

export default function PageLoad() {

  const h2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 3000 },
  });

  return (
    <animated.div style={h2}>
      <h2>
        This is a space I use to showcase some of the things I have worked on. I also use this as a personal space to try new things and play around with new technologies I am learning. Feel free to have a look around.
      </h2>
    </animated.div>
  );
}
