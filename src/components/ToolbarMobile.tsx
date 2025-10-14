"use client";

interface ToolbarMobileProps {
  onCTA: (type: "text" | "image" | "zoom") => void;
  className?: string;
}

export default function ToolbarMobile({ onCTA, className }: ToolbarMobileProps) {
  return (
    <div className={`bg-base-200 p-2 flex justify-around border-t shadow-md ${className}`}>
      <button className="btn btn-ghost" onClick={() => onCTA("text")}>
        ➕ Testo
      </button>
      <button className="btn btn-ghost" onClick={() => onCTA("image")}>
        🖼️ Immagine
      </button>
      <button className="btn btn-ghost" onClick={() => onCTA("zoom")}>
        🔍 Zoom
      </button>
    </div>
  );
}
