"use client"
import { useRef } from "react";
import Mysection from "../components/Mysection";
import Image from "next/image";


export default function Home() {
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
        <div className="flex justify-center">
          <Image src="/image00007.png" width="130" height="50" className="mt-2" />
        </div>
        <div className="text-right px-6 items-center flex justify-end">
          <button className="oddFont hover:italic text-3xl font-light">
            MENU
          </button>
        </div>
      </div>
      <div className="container2 w-full h-[100vh] overflow-hidden">
        <div className="container">
          <div ref={section1}>
            <Mysection
              headline={`Lorem Ipsum Dolor Sit Amet`}
            >
              <div className="text-[200px] flex flex-col items-center justify-center h-full">
                <div className="letterSpacingLess">
                  OWN YOUR CULTURE
                </div>
                <div className="letterSpacingLess">
                  TELL YOUR STORIES
                </div>
              </div>
            </Mysection>
          </div>
          <div ref={section2}>
            <Mysection
              headline={`Lorem Ipsum Dolor Sit Amet`}
            >
              <div className="w-full h-full flex justify-center items-center">
                <video src="/Karv-UIUX.mp4" autoPlay></video>
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
