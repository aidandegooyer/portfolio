import React, { useRef, useState, ReactNode, useEffect } from "react";
import { Card } from "@/components/ui/card";

interface ReactiveCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  animated?: boolean;
  reactive_coefficient?: number;
  r?: number;
  g?: number;
  b?: number;
  a?: number;
}

const ReactiveCard = ({ children, className, ...props }: ReactiveCardProps) => {
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const [parallaxTransform, setParallaxTransform] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationFrame = useRef<number | null>(null);
  const ref = useRef(null);
  const [hasFlipped, setHasFlipped] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFlipped) {
          setHasFlipped(true);
        }
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cardElem = cardContainerRef.current;
    if (!cardElem) return;
    const rect = cardElem.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX =
      ((y - centerY) / centerY) * -15 * (props.reactive_coefficient || 1);
    const rotateY =
      ((x - centerX) / centerX) * 8 * (props.reactive_coefficient || 1);

    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    animationFrame.current = requestAnimationFrame(() => {
      setParallaxTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    });
  };

  const resetTransform = () => {
    setParallaxTransform("");
  };

  if (!props.animated) {
    return (
      <div className={`${className}`} ref={ref}>
        <div
          ref={cardContainerRef}
          className="group perspective-[1000px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTransform}
        >
          <Card
            className="bg-muted mx-auto w-full transform-gpu overflow-hidden rounded-2xl border-gray-300 shadow-lg transition-transform duration-75 dark:border-gray-700"
            style={{
              transform: `rotateY(0deg) ${parallaxTransform}`,
            }}
          >
            <div
              className={`pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${
                  mousePosition.y
                }px, ${`rgba(
                ${props.r || 0}, 
                ${props.g || 80}, 
                ${props.b || 140}, 
                ${props.a || 0.15})`}, transparent 60%)`,
              }}
            />
            {children}
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${className} ${hasFlipped ? "rotate-x-0" : "rotate-x-90"} transition-all duration-500 ease-in-out`}
      ref={ref}
    >
      <div
        ref={cardContainerRef}
        className="group perspective-[1000px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTransform}
      >
        <Card
          className="bg-muted mx-auto w-full transform-gpu overflow-hidden rounded-2xl border-gray-300 shadow-lg transition-transform duration-75 dark:border-gray-700"
          style={{
            transform: `rotateY(0deg) ${parallaxTransform}`,
          }}
        >
          <div
            className={`pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${
                mousePosition.y
              }px, ${`rgba(
                ${props.r || 0}, 
                ${props.g || 80}, 
                ${props.b || 140}, 
                ${props.a || 0.15})`}, transparent 60%)`,
            }}
          />
          {children}
        </Card>
      </div>
    </div>
  );
};

export default ReactiveCard;
