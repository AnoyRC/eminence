'use client';

import { useRouter } from 'next/navigation';

const Button = ({ label, rounded, fullWidth, color, style, location }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(location);
  };

  return (
    <button
      className={
        (rounded ? 'rounded-full ' : '') +
        (style + ' ' || '') +
        (fullWidth ? 'w-full ' : 'w-fit ') +
        color +
        ' hover:scale-105 transition-all duration-300 ease-in-out active:scale-100'
      }
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
export default Button;
