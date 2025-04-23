import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { GlitchedText } from "../glitchedText/GlitchedText";

import "./LpAnimatedTextSection.css";
import OwlRobot from "../../../assets/images/robot-owl.png"

gsap.registerPlugin(ScrollTrigger);

export const LpAnimatedTextSection = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const gridContainer = containerRef.current;
    const title = titleRef.current;

    if (!gridContainer || !title) return;

    gsap.set(title, {
      opacity: 0,
      transform: "rotate(45deg) translate(30%, -200%)",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gridContainer,
        start: "top 90%",
        end: "center 100%", // Ajusta este valor según necesites
        scrub: 1,
        
      },
    });

    tl.to(title, {
      opacity: 1,
      transform: "rotate(0deg) translate(0%, 0%)",
      duration: 3,
      ease: "power2.out",
    })
    .to(title, {
      transform: "rotate(0deg) translate(-25%, 0%)",
      duration: 5,
      ease: "power2.out",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="animatedTextContainer" ref={containerRef}>
      <div className="animated-title-wrapper glitched-text" ref={titleRef}>
        <GlitchedText />
      </div>
        <img src={OwlRobot} alt="Owl Robot" className="mascot-img" />
    </section>
  );
};
