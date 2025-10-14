"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, Text, Image } from "fabric";
import ToolbarDesktop from "../../../components/ToolbarDesktop";
import ToolbarMobile from "../../../components/ToolbarMobile";
import ModalBottom from "../../../components/ModalBottom";

export default function PapiroEditor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<Canvas | null>(null);
  const [modalContent, setModalContent] = useState<"text" | "image" | "zoom" | null>(null);

useEffect(() => {
  const initCanvas = async () => {
    const canvas = new Canvas(canvasRef.current!, {
      width: 1000,
      height: 600,
      backgroundColor: "#fff8e1",
    });
    fabricRef.current = canvas;
  };

  initCanvas();

  return () => {
    fabricRef.current?.dispose();
  };
}, []);

  function addText() {
    const text = new Text("Scrivi qui!", {
      left: 100,
      top: 100,
      fill: "red",
      fontSize: 28,
      fontFamily: "Comic Sans MS",
    });
    fabricRef.current?.add(text);
    setModalContent(null);
  }

  function addImage() {
    const url = prompt("URL immagine:");
    if (!url) return;
    /*Image.fromURL(url, (img) => {
      img.scale(0.4);
      fabricRef.current?.add(img);
    }, undefined);*/
    setModalContent(null);
  }

  function zoomIn() {
    const canvas = fabricRef.current;
    if (!canvas) return;
    canvas.setZoom(canvas.getZoom()! * 1.2);
  }

  function zoomOut() {
    const canvas = fabricRef.current;
    if (!canvas) return;
    canvas.setZoom(canvas.getZoom()! / 1.2);
  }

  return (
    <div className="flex relative">
      <ToolbarDesktop
        addText={addText}
        addImage={addImage}
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        className="hidden md:flex"
      />
      <div className="flex-1 flex justify-center items-center p-6">
        <canvas
          ref={canvasRef}
          className="border border-base-300 shadow-lg max-w-full max-h-[80vh]"
        />
      </div>
      <ToolbarMobile
        onCTA={(type) => setModalContent(type)}
        className="fixed bottom-0 left-0 right-0 md:hidden"
      />
      {modalContent && (
        <ModalBottom onClose={() => setModalContent(null)}>
          {modalContent === "text" && (
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">Aggiungi Testo</h2>
              <button className="btn btn-primary w-full" onClick={addText}>
                Inserisci Testo
              </button>
            </div>
          )}
          {modalContent === "image" && (
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">Aggiungi Immagine</h2>
              <button className="btn btn-primary w-full" onClick={addImage}>
                Inserisci Immagine
              </button>
            </div>
          )}
          {modalContent === "zoom" && (
            <div className="p-4 flex flex-col gap-2">
              <h2 className="font-bold text-lg mb-2">Zoom</h2>
              <button className="btn w-full" onClick={zoomIn}>
                Zoom In
              </button>
              <button className="btn w-full" onClick={zoomOut}>
                Zoom Out
              </button>
            </div>
          )}
        </ModalBottom>
      )}
    </div>
  );
}
