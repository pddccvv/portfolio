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
    <div className="bg-dark w-full h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-2 gap-8 items-center text-center">
          <div>
            <p className="text-lg">hello world, I&apos;m</p>
            <span className="text-3xl font-bold text-red-500">Rudiyat</span>
            <p className="text-lg mt-2">
              {displayText}
              <span className="animate-blink">|</span>
            </p>
            <p className="text-gray-400 mt-2">Welcome to my personal website</p>

            <div className="flex justify-center items-center">
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <li>
                  <Link href="https://github.com/pddccvv" target="_blank">
                    <Image
                      src="/assets/logo/logo-github.png"
                      alt="Logo"
                      width={40}
                      height={40}
                      className="bg-red-300 rounded-full"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/pddccvv" target="_blank">
                    <Image
                      src="/assets/logo/logo-linkedln.png"
                      alt="Logo"
                      width={40}
                      height={40}
                      className="bg-red-300 rounded-full"
                    />
                  </Link>
                </li>
                {/* <li>
                  <Link href="https://github.com/pddccvv" target="_blank">
                    <Image
                      src="/assets/logo/logo-github.png"
                      alt="Logo"
                      width={40}
                      height={40}
                    />
                  </Link>
                </li> */}
              </ul>
            </div>
            <div>
              <button className="mt-2 px-3 py-2 text-sm text-red-500 border border-red-500 rounded-md bg-transparent transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:text-white">
                Hire Me
              </button>
            </div>
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
