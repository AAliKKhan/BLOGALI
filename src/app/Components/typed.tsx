
"use client";
import React, { useEffect, useState, useRef } from "react";

const TypedText: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const textArray = ["Artificial Intelligence", "Agentic AI", "Generative AI", "Humanoids"];
  const [stringIndex, setStringIndex] = useState(0); // State to track current string index
  const [charIndex, setCharIndex] = useState(0); // State to track current character index
  const speed = 150; // Delay between each character (in ms)

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout; // Variable to store timeout ID

    const typeWriter = () => {
      if (charIndex < textArray[stringIndex].length) {
        if (textRef.current) {
          textRef.current.innerHTML += textArray[stringIndex].charAt(charIndex);
          setCharIndex((prev) => prev + 1); // Update charIndex
          typingTimeout = setTimeout(typeWriter, speed); // Store the timeout ID
        }
      } else {
        // Once the string is finished, proceed to the next one
        setTimeout(() => {
          if (stringIndex < textArray.length - 1) {
            setStringIndex((prev) => prev + 1); // Move to the next string
            setCharIndex(0); // Reset charIndex for the next string
            if (textRef.current) {
              textRef.current.innerHTML = ""; // Clear the text for the next string
            }
            typeWriter(); // Start typing the next string
          }
        }, 1000); // Delay before typing the next string
      }
    };

    typeWriter(); // Start the typewriter effect

    // Cleanup function to clear timeout when component unmounts
    return () => {
      clearTimeout(typingTimeout); // Clear the timeout using the stored ID
    };
  }, [charIndex, stringIndex]); // Add state variables as dependencies to ensure updates

  return (
    <div className="text-3xl font-semibold text-center mt-10">
      <div ref={textRef}></div>
    </div>
  );
};

export default TypedText;
