"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface DashcardProps {
  title: string;
  icon: React.ReactNode;
  subtitle?: string;
  thirdtitle?: string;
}

export const Dashcard = ({
  title,
  icon,
  subtitle,
  thirdtitle,
}: DashcardProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    // Calculate position relative to the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
  };

  return (
    <Card
      ref={cardRef}
      className="relative border rounded-lg overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      {/* Light effect that follows mouse */}
      {isMounted && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle 120px at ${position.x}px ${position.y}px, rgba(var(--primary-rgb), 0.15), transparent 40%)`,
          }}
        />
      )}

      <div className="relative z-10 transition-transform duration-300 group-hover:scale-[1.02]">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <div className="text-muted-foreground">{icon}</div>
        </CardHeader>
        <CardContent className="space-y-1">
          {subtitle && <div className="text-2xl font-bold">{subtitle}</div>}
          {thirdtitle && (
            <p className="text-xs text-muted-foreground">{thirdtitle}</p>
          )}
        </CardContent>
      </div>
    </Card>
  );
};
