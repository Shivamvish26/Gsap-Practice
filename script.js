// gsap.from(".header", { duration: 1, opacity: 0, y: -100, ease: "bounce" });
// gsap.from(".links", { duration: 1, opacity: 0, delay: 1, stagger: 0.5 });
// gsap.from(".right", { duration: 2, x: "-100vw", delay: 1, ease: "power2.in" });
// gsap.from(".left", {
//   duration: 1,
//   x: "-100vw",
//   delay: 0.5,
//   ease: "power1.out",
// });
// gsap.to(".footer", { duration: 1, y: 0, delay: 2.5, ease: "elastic" });
// gsap.fromTo(
//   ".button",
//   { opacity: 0, scale: 0, rotation: 720 },
//   { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 }
// );

const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from(".header", { y: "-100%", ease: "bounce" })
  .from(".link", { opacity: 0, stagger: 0.5 })
  .from(".right", { x: "-100vw", ease: "power2.in" }, 1) //delay for 1 sec
  .from(".left", { x: "-100%" }, "<.5") //reference to the previous animation <.5s
  .to(".footer", { y: 0, ease: "elastic" })
  .fromTo(
    ".button",
    { opacity: 0, scale: 0, rotation: 720 },
    { opacity: 1, scale: 1, rotation: 0 }
  );

const button = document.querySelector(".button");

button.addEventListener("click", () => {
//   timeline.timeScale(3);
  timeline.reverse();
});
