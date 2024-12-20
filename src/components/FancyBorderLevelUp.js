import React from 'react';

function FancyBorderLevelUp({ color, children }) {
    const [borderColor, setBorderColor] = React.useState('transparent');
  
    const handleMouseEnter = () => setBorderColor(color);
    const handleMouseLeave = () => setBorderColor('transparent');
  
    const borderStyle = {
      border: `2px solid ${borderColor}`,
      transition: 'border 0.3s ease-in-out',
    };
  
    return (
      <div
        className={`FancyBorderLevelUp FancyBorderLevelUp-${color}`}
        style={borderStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    );
  }

  export default FancyBorderLevelUp;