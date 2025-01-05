
"use client";
import React, { useEffect, useRef, useCallback, useMemo } from "react";

const TypedText: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  // const textArray = ["Artificial Intelligence", "Agentic AI", "Generative AI", "Humanoids"];
  const textArray = useMemo(() => ["Artificial Intelligence", "Agentic AI", "Generative AI", "Humanoids"], []);

  const speed = 150; // Delay between each character (in ms)
  const typingTimeout = useRef<NodeJS.Timeout | null>(null); // Ref to store timeout ID

  // Use refs for managing the current indices
  const stringIndex = useRef(0); // To track the current string in the array
  const charIndex = useRef(0); // To track the current character in the current string

  const typeWriter = useCallback(() => {
    if (charIndex.current < textArray[stringIndex.current].length) {
      if (textRef.current) {
        textRef.current.innerHTML += textArray[stringIndex.current].charAt(charIndex.current);
        charIndex.current++; // Increment charIndex
        typingTimeout.current = setTimeout(typeWriter, speed); // Store timeout ID
      }
    } else {
      // Once the string is finished, proceed to the next one
      setTimeout(() => {
        if (stringIndex.current < textArray.length - 1) {
          stringIndex.current++; // Move to the next string
          charIndex.current = 0; // Reset charIndex for the next string
          if (textRef.current) {
            textRef.current.innerHTML = ""; // Clear the text for the next string
          }
          typeWriter(); // Start typing the next string
        }
      }, 1000); // Delay before typing the next string
    }
  }, [textArray, speed]); // Dependencies are the `textArray` and `speed`

  useEffect(() => {
    typeWriter(); // Start the typewriter effect when the component is mounted

    // Cleanup function to clear the timeout when the component unmounts
    return () => {
      if (typingTimeout.current) {
        clearTimeout(typingTimeout.current); // Clear timeout if any
      }
    };
  }, [typeWriter]); // Add `typeWriter` to the dependency array

  return (
    <div className="text-3xl font-semibold text-center mt-10">
      <div ref={textRef}></div>
    </div>
  );
};

export default TypedText;
