"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Image from "next/image";

export default function Home() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const texts = ["Web Developer", "Full-Stack Developer"];
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[loopIndex % texts.length];

      if (!isDeleting) {
        setDisplayText((prev) => currentText.substring(0, prev.length + 1));

        if (displayText === currentText) {
          setIsDeleting(true);
          setTypingSpeed(150);
        }
      } else {
        setDisplayText((prev) => currentText.substring(0, prev.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setLoopIndex((prev) => prev + 1);
          setTypingSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed, loopIndex, texts]);

  return (
    <div className="bg-dark w-full h-screen">
      <Navbar />
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-2 gap-8 items-center text-center">
          <div>
            <p className="text-lg">hello world, I&apos;m</p>
            <span className="text-3xl font-bold">Rudiyat</span>
            <p className="text-lg mt-2">
              {displayText}
              <span className="animate-blink">|</span>
            </p>
            <p className="text-gray-400 mt-2">Welcome to my personal website</p>
          </div>

          <div>
            <Image
              src="/assets/img/profile.jpeg"
              alt="Logo"
              width={300}
              height={200}
              className="rounded-full object-cover border-2 border-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
