import "./SpeechBubble.css";
export const SpeechBubble = ({ children, className = '' }) => {
    return (
      <div className={`speech-bubble ${className}`}>
        {children}
      </div>
    );
  };