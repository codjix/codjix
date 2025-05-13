"use client";
import { useRef, useEffect, CanvasHTMLAttributes } from "react";

type CanvasBGProps = CanvasHTMLAttributes<HTMLCanvasElement> & {
  pattern?: string[];
  geometry?: [number, number];
  dot?: number;
};

export const CanvasBG = ({
  pattern = ["#8882", "#8884", "#8886", "#8888"],
  geometry = [512, 512],
  dot = 30,
  ...props
}: CanvasBGProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const spacing = 5;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        canvas.width = geometry[0];
        canvas.height = geometry[1];
        for (let x = 0; x < canvas.width; x += dot + spacing) {
          for (let y = 0; y < canvas.height; y += dot + spacing) {
            ctx.fillStyle = pattern[Math.floor(Math.random() * pattern.length)];
            ctx.save();
            ctx.translate(x + dot / 2, y + dot / 2);
            ctx.fillRect(-dot / 2, -dot / 2, dot, dot);
            ctx.restore();
          }
        }
      }
    }
  }, [pattern, dot, geometry]);

  return <canvas ref={canvasRef} {...props} />;
};
