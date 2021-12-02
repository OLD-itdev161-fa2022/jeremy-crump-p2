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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        imperdiet lectus nunc, eget rhoncus odio varius at. In posuere urna
        justo, ut mollis erat egestas volutpat. Donec vestibulum tristique magna
        sed pulvinar. Proin quis neque eleifend, egestas orci sed, bibendum
        felis. Suspendisse viverra, tortor sed auctor euismod, odio velit
        viverra massa, vitae rutrum dolor tellus in eros. Vivamus ut orci vel
        metus congue vulputate id eget mauris. In ornare, elit cursus sagittis
        varius, nisl turpis finibus risus, nec gravida orci velit sed elit.
      </h2>
    </animated.div>
  );
}
