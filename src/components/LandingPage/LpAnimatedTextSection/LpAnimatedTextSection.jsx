import { GlitchedText } from "../glitchedText/GlitchedText";
import "./LpAnimatedTextSection.css";
import OwlRobot from "../../../assets/images/robot-owl.png";
import { SpeechBubble } from "../../SpeechBubble/SpeechBubble";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const LpAnimatedTextSection = () => {

  return (
    <section className="animatedTextContainer" >
      <div
        className="animated-title-wrapper glitched-text"
      >
        <GlitchedText />
      </div>
      <div className="mascot-wrapper">
        <div className="mascot-speech-container">
          <img
            src={OwlRobot}
            alt="Owl Robot"
            className="mascot-img"
          />
          
            <SpeechBubble
              className="current-bubble"
            >
              <p>"ALOOOOOOOOOOOOOOOOOOO"</p>
            </SpeechBubble>
        </div>
      </div>
    </section>
  );
};