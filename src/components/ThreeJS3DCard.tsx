import React from 'react';
// import './ThreeDCard.css';
import withRouter from '../utils/withRouter';

interface ThreeDCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  id: number,
  moreDes?: string,
  subheader?: string,
  tryLink?: string,
  sorceCodeLink?: string,
  rating?: number
  navigate?:(text?:string) => void
}

const ThreeDCard: React.FC<ThreeDCardProps> = ({ title, description, imageUrl ,tryLink,sorceCodeLink,navigate}) => {
  return (
    <div className="preview ">
    <div className=" flex items-center justify-center" style={{ perspective: '1000px' }}>
      <div className="flex items-center justify-center relative transition-all duration-200 ease-linear inter-var" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(0deg) rotateX(0deg)' }}>
        <div className="[transform-style:preserve-3d] bg-gray-50 relative group/card dark:hover:shadow-2xl
         dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]
          border-black/[0.1]
        w-full h-auto 
         rounded-xl p-6 border">
          <div className="w-fit transition duration-200 ease-linear text-xl font-bold text-neutral-600 dark:text-white">
            {title}
          </div>
          <p className="w-fit transition duration-200 ease-linear text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            {description}
          </p>
          <div className="transition duration-200 ease-linear w-full mt-4">
            <img
              alt="thumbnail"
              loading="lazy"
              width="1000"
              height="1000"
              decoding="async"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              src={imageUrl}
              style={{ color: 'transparent' }}
            />
          </div>
          <div className="flex justify-between items-center mt-20">
            <a
              className="w-fit transition duration-200 ease-linear px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              target="__blank"
              href={tryLink}
              style={{ transform: 'translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)' }}
            >
              Try now →
            </a>
            <button
              className="w-fit transition duration-200 ease-linear px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              style={{ transform: 'translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)' }}
              onClick={()=>navigate && navigate(sorceCodeLink)}
            >
              Github
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default withRouter(ThreeDCard);