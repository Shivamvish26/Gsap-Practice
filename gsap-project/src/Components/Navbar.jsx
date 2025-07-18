import React from "react";
import { navLinks } from "../../Constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(ScrollTrigger); 

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)", 
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <nav className="fixed w-full top-0 left-0 p-4 z-50 transition-colors">
      <div className="flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" className="w-8 h-8" />
          <p className="text-white font-semibold text-lg">MOJITO</p>
        </a>

        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="text-white hover:underline">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
