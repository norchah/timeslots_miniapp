import React, { useRef, useState } from "react";
import { useModalStore } from "../../stores/useModalStore";

export default function ModalWrapper({ children }) {
  const close = useModalStore((s) => s.close);

  const startY = useRef(0);
  const [offset, setOffset] = useState(0);

  const onTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
  };

  const onTouchMove = (e) => {
    const delta = e.touches[0].clientY - startY.current;
    if (delta > 0) setOffset(delta);
  };

  const onTouchEnd = () => {
    if (offset > 120) close();
    setOffset(0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={close}
      />

      {/* Modal */}
      <div
        className="relative w-full bg-gray-700 rounded-t-2xl transition-transform"
        style={{
          transform: `translateY(${offset}px)`,
          height: "90vh",
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="w-12 h-1 bg-gray-600 rounded-full mx-auto mt-3 mb-2" />

        <button
          onClick={close}
          className="absolute top-3 right-4 text-slate-400 text-xl"
        >
          ✕
        </button>

        <div className="h-full overflow-y-auto p-4">
          {children}
        </div>
      </div>
    </div>
  );
}