import React, { useEffect, useRef } from "react";
import arrow from "../assets/images/arrow.svg";
import gsap from "gsap";

const Marquee = () => {
  const marqueeInnerRef = useRef(null); // Ref for the inner container
  let currentScroll = useRef(0); // Use ref to store current scroll position
  let isScrollingDown = useRef(true); // Use ref to track scroll direction

  useEffect(() => {
    const arrowElements = document.querySelectorAll(".arrow");

    // Animation setup with GSAP
    let tween = gsap
      .to(marqueeInnerRef.current, {
        xPercent: -100,
        repeat: -1,
        duration: 10,
        ease: "linear",
      })
      .totalProgress(0.5);

    gsap.set(marqueeInnerRef.current, { xPercent: -50 });

    // Scroll event listener
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Determine scroll direction
      isScrollingDown.current = scrollY > currentScroll.current;

      // Update tween timeScale based on scroll direction
      gsap.to(tween, {
        timeScale: isScrollingDown.current ? 1 : -1,
      });

      // Toggle "active" class on arrows based on scroll direction
      arrowElements.forEach((arrowElement) => {
        arrowElement.classList.toggle("active", !isScrollingDown.current);

        // Toggle rotation class based on scroll direction
        if (isScrollingDown.current) {
          arrowElement.classList.remove("arrow_rotated");
        } else {
          arrowElement.classList.add("arrow_rotated");
        }
      });

      // Update current scroll position
      currentScroll.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  // Generate at least 16 items
  const items = [];
  for (let i = 0; i < 16; i++) {
    items.push(
      <div className="marquee_part" key={i}>
        <p>{i % 2 === 0 ? "UX/UI Designer" : "React Developer"}</p>
        <div className="marquee_arrow">
          <img src={arrow} alt="" className="arrow" />
        </div>
      </div>
    );
  }

  return (
    <div className="marquee">
      <div className="marquee_inner" ref={marqueeInnerRef}>
        {items}
      </div>
    </div>
  );
};

export default Marquee;
