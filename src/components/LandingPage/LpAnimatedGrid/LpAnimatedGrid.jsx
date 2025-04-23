import { useLayoutEffect, useRef } from "react";

import { TimeComparisonChart } from "./charts/TimeDistributionCharts";

import CardBg from "../../../assets/videos/card-bg.mp4";

import Robot1 from "../../../assets/images/robot1.png";
import Robot2 from "../../../assets/images/robot2.png";
import Robot3 from "../../../assets/images/robot3.png";

import ScheduleIcon from "@mui/icons-material/Schedule";
import StairsIcon from "@mui/icons-material/Stairs";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

import "./LpAnimatedGrid.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const LpAnimatedGrid = () => {
  const gridContainerRef = useRef(null);
  const item1Ref = useRef(null);
  const item2Ref = useRef(null);
  const item3Ref = useRef(null);
  const item4Ref = useRef(null);

  useLayoutEffect(() => {
    const gridContainer = gridContainerRef.current;
    const item1 = item1Ref.current;
    const item2 = item2Ref.current;
    const item3 = item3Ref.current;
    const item4 = item4Ref.current;

    if (!gridContainer || !item1 || !item2 || !item3 || !item4) return;

    const commonScrollTrigger = {
      trigger: gridContainer,
      scrub: 1,
    };

    gsap.to(item1, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        ...commonScrollTrigger,
        start: "top 90%", 
        end: "center 20%",
      },
    });

    gsap.to(item2, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        ...commonScrollTrigger,
        start: "top 90%", 
        end: "center 20%",
      },
    });

    gsap.to(item3, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        ...commonScrollTrigger,
        start: "center 90%", 
        end: "center 50%",
      },
    });

    gsap.to(item4, {
      opacity: 1,
      x: 0,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        ...commonScrollTrigger,
        start: "center 90%", // Item 4 empieza aún antes
        end: "center 50%",
      },
    });

    return () => gsap.killTweensOf([item1, item2, item3, item4]);
  }, []);

  return (
    <section className="lp-animated-grid-container" ref={gridContainerRef}>
      <div className="lp-animated-grid">
        <div className="lp-grid-item lp-grid-item-1" ref={item1Ref}>
          <h2>Efficiency First</h2>
          <div className="lp-grid-item-content-1">
            <p>
              Save time by automating your most routine workflows. We design
              intelligent systems that eliminate repetitive tasks, simplify
              processes, and reduce manual effort — so your team can focus on
              what truly creates value. Less busywork, more strategic impact.
            </p>

            <div className="chart-holder">
              <TimeComparisonChart />
            </div>
          </div>
        </div>

        <div className="lp-grid-item lp-grid-item-2" ref={item2Ref}>
          <div className="card2-content-wrapper">
            <p>Let our automatic agents do hard work.</p>
            <p>No more time wasted in repetitive tasks</p>
            <p>We are your AI automation solution</p>

            <div className="img-card-container">
              <img src={Robot1} alt="robot-pet-1" />
              <img src={Robot2} alt="robot-pet-2" />
              <img src={Robot3} alt="robot-pet-3" />
            </div>
          </div>
        </div>

        <div className="lp-grid-item lp-grid-item-3" ref={item3Ref}>
          <video autoPlay loop muted playsInline className="video-background">
            <source src={CardBg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="lp-grid-item lp-grid-item-4" ref={item4Ref}>
          <div className="card4-content-wrapper">
            <p className="benefits-title">Key benefits</p>

            <div className="list-item-wrapper">
              <div className="list-title-wrapper">
                <PrecisionManufacturingIcon
                  className="list-item-img"
                  fontSize="large"
                />
                <p className="list-item-text">Improved accuracy:</p>
              </div>
              <p className="list-item-text">
                Minimizes errors and increases final quality
              </p>
            </div>

            <div className="list-item-wrapper">
              <div className="list-title-wrapper">
                <StairsIcon className="list-item-img" fontSize="large" />
                <p className="list-item-text">Improved accuracy:</p>
              </div>
              <p className="list-item-text">
                Minimizes errors and increases final quality
              </p>
            </div>

            <div className="list-item-wrapper">
              <div className="list-title-wrapper">
                <ScheduleIcon className="list-item-img" fontSize="large" />
                <p className="list-item-text">Improved accuracy:</p>
              </div>
              <p className="list-item-text">
                Minimizes errors and increases final quality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LpAnimatedGrid;
