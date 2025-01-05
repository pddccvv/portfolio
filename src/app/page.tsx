"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div className=" text-white w-full h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center">
        <div className="space-y-4">
          <p className="text-lg text-gray-300">Hello world, I&apos;m</p>
          <h1 className="text-4xl font-bold text-red-500">Rudiyat</h1>
          <p className="text-lg mt-2 text-gray-300">
            {displayText}
            <span className="animate-blink">|</span>
          </p>
          <p className="text-gray-400 mt-2">Welcome to my personal website</p>

          <div className="flex justify-center space-x-4">
            <ul className="flex gap-4">
              <li>
                <Link href="https://github.com/pddccvv" target="_blank">
                  <Image
                    src="/assets/ico/ico-github.svg"
                    alt="Github"
                    width={40}
                    height={40}
                    className="p-2 rounded-full bg-white border-2 border-red-500 hover:scale-105 transform transition-all duration-300"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/pddccvv"
                  target="_blank"
                >
                  <Image
                    src="/assets/ico/ico-linkedln.svg"
                    alt="LinkedIn"
                    width={40}
                    height={40}
                    className="p-2 rounded-full bg-white border-2 border-red-500 hover:scale-105 transform transition-all duration-300"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com/pddccvv" target="_blank">
                  <Image
                    src="/assets/ico/ico-instagram.svg"
                    alt="Instagram"
                    width={40}
                    height={40}
                    className="p-2 rounded-full bg-white border-2 border-red-500 hover:scale-105 transform transition-all duration-300"
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <button className="px-6 py-3 text-lg text-white border border-red-500 rounded-md bg-transparent hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:text-white transition duration-300">
              Hire Me
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/assets/img/profile.jpeg"
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-full object-cover bg-transparent shadow-xl border-4 border-red-500"
          />
        </div>
      </div>
    </div>
  );
}
