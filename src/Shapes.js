// not currently used

export const Circle = ({ color }) => {
    const style = {
      width: '20px',
      height: '20px',
      backgroundColor: color,
      borderRadius: '50%',
      display: 'inline-block',
      margin: '5px'
    };
  
    return <div style={style} />;
  };
  
  export const Square = ({ color }) => {
    const style = {
      width: '20px',
      height: '20px',
      backgroundColor: color,
      display: 'inline-block',
      margin: '5px'
    };
  
    return <div style={style} />;
  };
  
  // Similar components for Hexagon and Triangle...
  