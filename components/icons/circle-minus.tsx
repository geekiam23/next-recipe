import { FC } from 'react';

export interface IconProps {
  fill?: string;
  size?: string;
}

const CircleMinus: FC<IconProps> = ({ size, fill = 'none' }) => {
  return (
    <div className={size}>
      <svg xmlns='http://www.w3.org/2000/svg' fill={fill} viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    </div>
  );
};

export default CircleMinus;
