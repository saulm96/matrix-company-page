import { forwardRef } from "react";

import LoopedBG from "../../assets/videos/loopedBG.mp4";

const LpBackground = forwardRef((props, ref) => {
  const clipPathId = "rotation-clip-path";
  const polygonId = "rotation-polygon";

  const initialPoints = "0.44 0.5, 0.40 0.54, 0.46 0.6, 0.40 0.66, 0.44 0.7, 0.50 0.64, 0.56 0.7, 0.60 0.66, 0.54 0.6, 0.60 0.54, 0.56 0.5, 0.50 0.56";

  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute', overflow: 'hidden' }}>
        <defs>
          <clipPath id={clipPathId} clipPathUnits="objectBoundingBox">
            <polygon id={polygonId} points={initialPoints} />
          </clipPath>
        </defs>
      </svg>

      <div
        ref={ref}
        className="lp-background"
        style={{ clipPath: `url(#${clipPathId})` }}
      >
       
        <video autoPlay loop muted playsInline>

           <source src={LoopedBG} type="video/mp4" />
          Tu navegador no soporta la etiqueta de vídeo.
        </video>
      </div>
    </>
  );
});

LpBackground.displayName = 'LpBackground';

export default LpBackground;
