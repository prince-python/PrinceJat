import React from 'react';

const Loading = () => {
  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'black',
  
        color: '#00ff00',
        fontSize: '5rem'
      }} >
        
        <span style={
          {
               fontFamily: 'TESLA',
               
        
          marginLeft: '5px',
          animation: 'blink 0.8s infinite',
          
          color: '#00ff00'
        }} className="">{">_"}</span>
      </div>

      {/* Embedded CSS using a <style> tag */}
      <style>{`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Loading;
