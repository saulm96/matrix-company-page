import { useRef, useLayoutEffect } from "react";
import LpBackground from "../components/LandingPage/LpBackground";
import LpAnimatedGrid from "../components/LandingPage/LpAnimatedGrid/LpAnimatedGrid";
import { LpAnimatedTextSection } from "../components/LandingPage/LpAnimatedTextSection/LpAnimatedTextSection";
import ScrollLogo from "../assets/icons/scroll-icon.svg";
import "./LandingPage.css";
import gsap from "gsap";
import { ScrollTrigger} from "gsap/all";

const LandingPage = () => {
  gsap.registerPlugin(ScrollTrigger, gsap.AttrPlugin);
  const mainRef = useRef(null);
  const backgroundRef = useRef(null);
  const stickyWrapperRef = useRef(null);
  const scrollAdviserRef = useRef(null);

  const finalClipPathPoints = "-0.05 -0.05, -0.05 0.25, -0.05 0.5, -0.05 0.75, -0.05 1.05, 0.5 1.05, 1.05 1.05, 1.05 0.75, 1.05 0.5, 1.05 0.25, 1.05 -0.05, 0.5 -0.05";
  const polygonSelector = "#rotation-polygon";

  useLayoutEffect(() => {
    const polygonElement = mainRef.current?.querySelector(polygonSelector);

    if (!polygonElement) {
       console.error("Polygon element not found.");
       return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stickyWrapperRef.current,
          pin: true,
          start: "top top",
          end: "+=40%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        polygonElement,
        {
          attr: { points: finalClipPathPoints },
          ease: "none",
        },
        0
      );

      tl.to(
        ".hero-description",
        {
          opacity: 1,
          ease: "none",
        },
        0.15
      );

      gsap.to(scrollAdviserRef.current, {
        opacity: 0,
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: stickyWrapperRef.current,
          start: "1",
          end: "+=0.2%",
          scrub: 1,
        },
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <header></header>
      <main ref={mainRef}>
        <div className="sticky-wrapper" ref={stickyWrapperRef}>
          <section className="hero">
            <h1 className="hero-title">Automat.ai</h1>
            <p className="hero-subtitle">
              <i>"Your AI Automation Solution"</i>
            </p>
            <p className="hero-description">
              Discover the power of AI-driven automation with Automat.ai. Our
              platform streamlines your workflows, enhances productivity, and
              transforms the way you work. Join us on this journey to a smarter
              future.
            </p>
            <div className="scroll-adviser" ref={scrollAdviserRef}>
              <p>Scroll down to learn more</p>
              <div className="scroll-icon">
                <img src={ScrollLogo} alt="Scroll Down" />
              </div>
            </div>
          </section>
          <LpBackground ref={backgroundRef} />
        </div>
       <LpAnimatedTextSection />
      </main>
      <footer>
        <p>&copy; 2025 Your Company</p>
      </footer>
    </>
  );
};

export default LandingPage;