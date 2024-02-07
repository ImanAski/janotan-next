"use client";
import Link from "next/link";
import {useRef, useState} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {AnimatePresence, motion} from "framer-motion";
import {useGSAP} from "@gsap/react";
import Image from "next/image";


const navItems = [
    {
        title: "خانه",
        href: "/",
    },
    {
        title: "فروشگاه",
        href: "/",
    },
    {
        title: "پروفایل",
        href: "/profile",
    },
    {
        title: "درباره ما",
        href: "/",
    },
    {
        title: "درخواست وقت ملااقات",
        href: "/",
    },
];

export default function Index() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuHovered, setIsMenuHovered] = useState(false);

    const middleNavRef = useRef(null);

    useGSAP(() => {
       gsap.registerPlugin(ScrollTrigger);

       // ScrollTrigger.create({
       //     trigger: document.documentElement,
       //     start: "top top",
       //     end: "bottom bottom",
       //     scrub: true,
       //     onUpdate: (self) => {
       //          if (self.direction > 0) {
       //              // Down
       //              console.log("up")
       //              gsap.to(middleNavRef, { display: "hidden"}, 0)
       //          } else {
       //              // Up
       //              gsap.to(middleNavRef, { display: "flex" }, 0)
       //              console.log("down")
       //          }
       //     }
       // })

       const middleNav = middleNavRef.current;

    });

    return (
        <div className="fixed z-[1000] flex justify-center w-[100%] bottom-5">
            <div className="bg-[#222222]/80 rounded-xl flex justify-center transition-all">
                <div
                    className={`text-white m-2 bg-[#333333] rounded-xl z-[1000] items-center justify-center gap-1 transition-all ease-in-out bottom-0 flex`}>
                    <Link className="p-4" href="/profile">
                        <Image src={"/images/static/icons/profile.png"} alt="profile" width={25} height={25}/>
                    </Link>
                </div>
                <AnimatePresence mode={"wait"}>
                <motion.div
                    ref={middleNavRef}
                    className={`${ isMenuOpen ? "flex opacity-100 translate-y-0" : "hidden opacity-0 -translate-y-20"} md:opacity-100 md:translate-y-0 text-white md:m-2 md:mr-1 md:ml-1 bg-[#3e3e3e] rounded-xl z-[1000] md:items-center md:justify-center transition-all ease-in-out md:bottom-0 md:flex flex-col md:flex-row md:relative absolute bottom-[100px] w-[100%] left-0 md:w-auto`}>
                    {
                        navItems.map((items, index) => {
                            const {title, href} = items;
                            return <Link href={href} key={index}
                                         className="p-5 w-full md:w-auto text-center md:first:rounded-tr-xl md:first:rounded-br-xl md:last:rounded-tl-xl md:last:rounded-bl-xl transition-all ease-in-out hover:bg-black">{title}</Link>
                        })
                    }
                </motion.div>

                </AnimatePresence>
                <div
                    ref={middleNavRef}
                    className="text-white m-2 mr-1 ml-1 bg-[#3e3e3e] rounded-xl z-[1000] md:hidden items-center justify-center gap-1 transition-all ease-in-out bottom-0 flex">
                    <motion.button onClick={() => setIsMenuOpen(!isMenuOpen)}
                          className="p-5 w-full first:rounded-tr-xl first:rounded-br-xl last:rounded-tl-xl last:rounded-bl-xl transition-all ease-in-out hover:bg-black">
                        <div className="space-y-2">
                            <div className={`${ isMenuOpen ? "w-3" : "w-6"} h-0.5 bg-white transition-all`}></div>
                            <div className={`${ isMenuOpen ? "w-6" : "w-6"} h-0.5 bg-white transition-all`}></div>
                            <div className={`${ isMenuOpen ? "w-4" : "w-6"} h-0.5 bg-white transition-all`}></div>
                        </div>
                    </motion.button>
                </div>
                <div
                    className="text-white m-2 bg-[#333333] rounded-xl z-[1000] flex items-center justify-center gap-1 transition-all ease-in-out bottom-0">
                    <Link className="p-4" href="/cart">
                        <Image src={"/images/static/icons/shopping-cart.png"} alt="profile" width={25} height={25}/>
                    </Link>
                </div>

            </div>
        </div>
    )
}