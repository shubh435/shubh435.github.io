import React from 'react';
import './LampEffect.css';
interface IProps{
label:string
}
const LampEffect:React.FC<IProps> = ({label}) => {
  return (
    <div className="lamp-container">
      <div className="lamp-light"></div>
      <div className="lamp-text">
        <h3 className='uppercase text-white '>{label}</h3>
      </div>
    </div>
  );
};

export default LampEffect;