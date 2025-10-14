"use client";

interface ToolbarProps {
  addText: () => void;
  addImage: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
  className?: string;
}

export default function ToolbarDesktop({
  addText,
  addImage,
  zoomIn,
  zoomOut,
  className,
}: ToolbarProps) {
  return (
    <div className={`w-80 bg-base-200 p-4 flex flex-col gap-4 h-[calc(100vh-64px)] ${className}`}>
      <button className="btn" onClick={addText}>
        ➕ Testo
      </button>
      <button className="btn" onClick={addImage}>
        🖼️ Immagine
      </button>
      <button className="btn" onClick={zoomIn}>
        🔍 Zoom In
      </button>
      <button className="btn" onClick={zoomOut}>
        🔍 Zoom Out
      </button>
    </div>
  );
}
