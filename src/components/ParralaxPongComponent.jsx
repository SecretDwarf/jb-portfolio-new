import React from "react";
import { useParallax } from "react-scroll-parallax";

const ParallaxPongComponent = () => {
  const parallax = useParallax({
    translateX: [0, 1100, "easeOutQuint"],
    translateY: [-10, 1100, "easeInQuint"],
  });
  const parallax2 = useParallax({
    translateX: [-200, 1100, "easeOutQuint"],
    translateY: [-10, 1100, "easeInQuint"],
  });
  const parallax3 = useParallax({
    translateX: [100, 1100, "easeOutQuint"],
    translateY: [200, 1100, "easeInQuint"],
  });

  return (
    <div className="pong-container-body">
      <div className="pong-box" ref={parallax.ref}>
        HEY
      </div>
      <div className="pong-box2" ref={parallax2.ref}>
        WEB
      </div>
      <div className="pong-box3" ref={parallax3.ref}>
        Independent Easing
      </div>
    </div>
  );
};

export default ParallaxPongComponent;
