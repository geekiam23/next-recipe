import { FC } from 'react';

export interface IconProps {
  fill?: string;
  size?: string;
}

const CircleCheck: FC<IconProps> = ({ size, fill = "none" }) => {
  return (
    <div className={size}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={fill}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};

export default CircleCheck;
