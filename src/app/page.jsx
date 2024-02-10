"use client"
import React, { useState, useEffect, useRef } from "react";
import Mysection from "../components/Mysection";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Section1 from "../components/landing/section1";

export default function Home() {
  const [showComponent, setShowComponent] = useState(false);
  const lastMouseMoved = useRef(Date.now());
  const scrollableContainerRef = useRef(null);

  React.useEffect(() => {
    function handleMouseMove() {
      lastMouseMoved.current = Date.now();
    }
    document.addEventListener('mousemove', handleMouseMove);

    // Clear the event listener if the component is unmounted
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (Date.now() - lastMouseMoved.current > 7000) {
        setShowComponent(true);

        // const scrollableContainerRef = useRef<HTMLDivElement>(null);
        if (scrollableContainerRef.current) {
          scrollableContainerRef.current.scrollTop = scrollableContainerRef.current.scrollHeight / 3;
        }

        console.log("=====================================")
      }
    }, 7000);

    // Clear the timeout if the component is unmounted or if the mouse moves
    return () => {
      clearTimeout(timeoutId);
      lastMouseMoved.current = Date.now(); // Reset the last mouse move timestamp
    };
  }, []);


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, 5000);
    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []);


  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  function scrollTo(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="overflow-hidden">
      <div className="w-[100vw] h-[80px] fixed text-center grid grid-cols-3">
        <div className=""></div>
        <div className="flex justify-center navBarLogoBox">
          <Image src="/image00007.png" alt="logo" width="800" height="600" className="mt-2 navBarLogo" priority />
        </div>
        <div className="text-right px-6 items-center flex justify-end">
          {showComponent &&
            <button className="oddFont hover:italic text-3xl font-light">
              MENU
            </button>
          }
        </div>
      </div>
      <div className="container2 w-full h-[100vh] overflow-hidden" ref={scrollableContainerRef}>
        <div className="container">
          <div ref={section1}>
            <Mysection
              headline={`Lorem Ipsum Dolor Sit Amet`}
            >
              {showComponent && <Section1 />}
            </Mysection>
          </div>
          <div ref={section2}>
            <Mysection
              headline={`Lorem Ipsum Dolor Sit Amet`}
            >
              <div className="w-full h-full flex justify-center items-center">
                <video src="/Karv-UIUX.mp4" autoPlay muted playsInline controlsList="nodownload nofullscreen noremoteplayback" className="bg-black"></video>
              </div>
            </Mysection>
          </div>
          <div ref={section3}>
            <Mysection
              headline={`Lorem Ipsum Dolor Sit Amet`}
            >
              Section 3
            </Mysection>
          </div>
        </div>
      </div>
    </main>
  );
}
