"use client";

import { useState, useEffect } from "react";

interface TypeWriterProps {
  text: string;
  speed?: number;
  textEffect?: React.ReactNode;
}

export default function TypeWriterEffect({
  text,
  textEffect,
  speed = 150,
}: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState<string | React.ReactNode>(
    ""
  );

  useEffect(() => {
    if (
      typeof displayedText === "string" &&
      displayedText.length < text.length
    ) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeoutId);
    } else if (
      typeof displayedText === "string" &&
      displayedText.length === text.length
    ) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(textEffect);
      }, 2000);
      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        setDisplayedText("");
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [displayedText, text, speed, textEffect]);

  return <p>{displayedText}</p>;
}
