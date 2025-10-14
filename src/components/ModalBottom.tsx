"use client";

import { ReactNode } from "react";

interface ModalBottomProps {
  children: ReactNode;
  onClose: () => void;
}

export default function ModalBottom({ children, onClose }: ModalBottomProps) {
  return (
    <div className="fixed inset-0 flex justify-center items-end z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-base-100 w-full md:w-1/2 rounded-t-xl p-4 shadow-lg animate-slide-up">
        {children}
      </div>
    </div>
  );
}
