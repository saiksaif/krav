"use client"
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Mysection.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Mysection({ headline, children }) {
  const headlineRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      headlineRef.current,
      {
        autoAlpha: 0,
        y: -20,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          scroller: ".container",
          trigger: headlineRef.current,
          start: "top 60%",
          end: "bottom 0%",
          toggleActions: "play none restart reverse",
        },
      }
    );
    return () => {};
  }, []);

  return (
    <div className={styles.section + " text-black"} ref={sectionRef}>
      {children}
    </div>
  );
}
