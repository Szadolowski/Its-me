"use client";

import { useState, useEffect, useCallback } from "react";

interface AboutTypeWriterProps {
  texts: string[];
  speed?: number;
  pause?: number;
  loop?: boolean;
}

export function AboutTypeWriter({
  texts,
  speed = 120,
  pause = 1200,
  loop = true,
}: AboutTypeWriterProps) {
  return (
    <TypeWriterEffect
      texts={texts}
      speed={speed}
      pause={pause}
      loop={loop}
      textEffect={(line) => <span>{line}</span>}
    />
  );
}

interface TypeWriterProps {
  text?: string;
  texts?: string[];
  speed?: number;
  textEffect?: React.ReactNode | ((text: string) => React.ReactNode);
  pause?: number; // pause after finishing a line
  loop?: boolean;
}

export function TypeWriterEffect({
  text,
  texts,
  textEffect,
  speed = 150,
  pause = 1200,
  loop = true,
}: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState<string | React.ReactNode>(
    ""
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeText = texts?.length ? texts[currentIndex] : text ?? "";

  const moveToNext = useCallback(() => {
    if (texts?.length) {
      const hasNext = currentIndex + 1 < texts.length;
      if (hasNext) {
        setCurrentIndex((prev) => prev + 1);
        setDisplayedText("");
      } else if (loop) {
        setCurrentIndex(0);
        setDisplayedText("");
      }
      return;
    }
    setDisplayedText("");
  }, [texts, currentIndex, loop]);

  // Reset when the active text changes
  useEffect(() => {
    setDisplayedText("");
  }, [activeText]);

  useEffect(() => {
    if (!activeText) return;

    if (
      typeof displayedText === "string" &&
      displayedText.length < activeText.length
    ) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(activeText.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeoutId);
    }

    if (
      typeof displayedText === "string" &&
      displayedText.length === activeText.length
    ) {
      const timeoutId = setTimeout(() => {
        if (textEffect) {
          const nextValue =
            typeof textEffect === "function"
              ? textEffect(activeText)
              : textEffect;
          setDisplayedText(nextValue);
        } else {
          moveToNext();
        }
      }, pause);
      return () => clearTimeout(timeoutId);
    }

    if (typeof displayedText !== "string") {
      const timeoutId = setTimeout(() => {
        moveToNext();
      }, pause);
      return () => clearTimeout(timeoutId);
    }
  }, [activeText, displayedText, moveToNext, pause, speed, textEffect]);

  return (
    <p>
      {displayedText}
      <span className="inline-block w-2.5 h-5 ml-1 bg-custom-addition animate-pulse align-middle"></span>
    </p>
  );
}
