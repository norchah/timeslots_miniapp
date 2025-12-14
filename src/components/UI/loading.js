import React from 'react';

export default function Loading({children}) {
  return (
    <div className="bg-slate-800 text-white h-screen flex items-center justify-center">
      <h1>{children}</h1>
    </div>
  );
}
