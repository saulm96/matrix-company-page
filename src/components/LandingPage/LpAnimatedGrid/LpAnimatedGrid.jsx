import { TimeComparisonChart } from "./charts/TimeDistributionCharts";

import CardBg from "../../../assets/videos/card-bg.mp4";

import Robot1 from "../../../assets/images/robot1.png"

import "./LpAnimatedGrid.css";
const LpAnimatedGrid = () => {
  return (
    <section className="lp-animated-grid-container">
      <div className="lp-animated-grid">
        <div className="lp-grid-item lp-grid-item-1">
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

        <div className="lp-grid-item lp-grid-item-2">
          <h2>Seamless Integration and Scalability</h2>
        </div>

        <div className="lp-grid-item lp-grid-item-3">
          <video autoPlay loop muted playsInline className="video-background">
            <source src={CardBg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="lp-grid-item lp-grid-item-4"></div>
      </div>
    </section>
  );
};

export default LpAnimatedGrid;
