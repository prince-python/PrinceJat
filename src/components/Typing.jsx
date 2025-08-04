import React, { useEffect, useState } from 'react';

const TypingText = ({ lines = [], speed = 80, pause = 1000 }) => {
  const [text, setText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        timeout = setTimeout(() => {
          setText((prev) => prev + lines[lineIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setText('');
          setCharIndex(0);
          setLineIndex((prev) => (prev + 1) % lines.length);
        }, pause);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, isTyping]);

  return (
    <div
      style={{
        color: '#00FF00',
        fontFamily: 'monospace',
        fontSize: '1.7rem',
        textShadow: '0 0 5px #00ff00, 0 0 10px #00ff00',
        whiteSpace: 'pre',
        letterSpacing: '1px',
        background: 'rgba(0,0,0,0.0)',
        padding: '0.4rem 1rem',
        borderRadius: '5px',
        border: '1px solid #00FF00',
        display: 'inline-block',
      }}
    >
      {text}
      <span className="cursor">█</span>
    </div>
  );
};

export default TypingText;
