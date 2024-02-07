import styles from "./style.module.scss";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Index() {


  const backgroundImage = useRef(null);
  const introImage = useRef(null);
  const introText = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

      gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: true,
          start: "top",
          end: "+=300px",
        },
      }).from(backgroundImage.current, { 
        clipPath: "inset(15%)",
        borderRadius: 10,
       })
      .to(introImage.current, {opacity: 0}, 0)
      .to(introText.current, {opacity: 0}, 0)

  })

  return (
    <div className="relative h-[140vh] w-[100%] flex justify-center">
      <div
        className="w-[100%] h-[140vh] bg-black absolute brightness-[.4]"
        ref={backgroundImage}>
        <Image
          className="object-cover object-top"
          src={'/images/static/background-main.jpg'}
          fill={true}
          alt="background image"
          priority={true}
        />
      </div>
      <div className="flex justify-center relative gap-2 m-[35vh]">
        <div ref={introImage} data-scroll data-scroll-speed="0.5" className="w-[200px] h-[200px] md:h-[300px] md:w-[300px] lg:h-[500px] lg:w-[500px] absolute brightness-[.6] blur-sm">
          <Image
            src={'/images/static/bg-icon.png'}
            className="object-contain"
            alt="intro image"
            fill={true}
            priority={true}
          />
        </div>
        <h1 ref={introText} data-scroll data-scroll-speed="0.9" className="text-white text-[7vw] z-[3] text-center whitespace-nowrap">آیا شما فریب خورده‌اید؟</h1>
      </div>
    </div>
  );
}