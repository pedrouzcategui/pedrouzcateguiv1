// "use client";

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import { useRef } from "react";
// import SectionLabel from "./SectionLabel";

// gsap.registerPlugin(ScrollTrigger);

// type HorizontalScrollElement = {
//   children: React.ReactNode;
// };

// const HorizontalScrollElement = ({ children }: HorizontalScrollElement) => {
//   return (
//     <div className="horizontal-scroll-element w-[1000px] h-[700px] bg-red-400 text-secondary mr-8">
//       {children}
//     </div>
//   );
// };

// export default function HorizontalScroll() {
//   const sectionRef = useRef<HTMLDivElement>(null); // The full-width wrapper to pin
//   const scrollRef = useRef<HTMLDivElement>(null); // The moving content

//   useGSAP(
//     () => {
//       if (!scrollRef.current || !sectionRef.current) return;

//       const scrollWidth = scrollRef.current.offsetWidth;
//       const amountToScroll = scrollWidth - window.innerWidth;

//       gsap.to(scrollRef.current, {
//         x: -amountToScroll,
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current, // Pin the outer full-width section
//           pin: true,
//           scrub: 1,
//           start: "center center",
//           markers: true,
//           end: () => `+=${amountToScroll}`,
//         },
//       });
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <div className="overflow-x-hidden">
//       {/* 1. SECTION REF: This is 100% width and gets pinned */}
//       <SectionLabel>Projects</SectionLabel>
//       <section ref={sectionRef} className="flex items-center">
//         {/* 2. THE VISUAL CONTAINER: This handles the 95% width and overflow */}
//         <div className="mx-auto h-[80vh]  overflow-hidden">
//           {/* 3. SCROLL REF: This is the long strip that actually moves */}
//           <div ref={scrollRef} className="flex h-full items-center gap-4 w-fit">
//             <HorizontalScrollElement>a</HorizontalScrollElement>
//             <HorizontalScrollElement>b</HorizontalScrollElement>
//             <HorizontalScrollElement>c</HorizontalScrollElement>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
