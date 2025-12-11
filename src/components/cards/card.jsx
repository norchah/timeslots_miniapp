import React from 'react';

export default function Card({children, navigate, page}) {
  return (
    <button
      onClick={() => {
        navigate(page)
      }}
      className="w-full p-[2px] rounded-2xl
         bg-white/10 backdrop-blur-md

         active:scale-[0.98] transition-all"
    >
      <div
        className="rounded-2xl bg-white/5 backdrop-blur-xl
           p-4 text-left
           text-white select-none"
      >
        {children}
      </div>
    </button>
  );
}
