import React from 'react';

export default function ButtonMain({children, navigate, page, className, type='button'}) {
  return (
    <button
      type={type}
      onClick={() => {navigate(page)}}
      className={`
              mt-2 p-2 rounded-xl bg-blue-500 text-white
              font-medium transition-all active:scale-[0.97]
              ${className}`}
    >{children}
    </button>
  );
}
