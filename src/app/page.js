"use client";
import Image from "next/image";
import Link from "next/link";
import Books from "@/components/Books";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import Book from "@/components/Book";
import Description from "@/components/Description";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll({
          smooth: true,
          mobile: {
            smooth: true
          },
          tablet: {
              smooth: true
          }
        });
      }
    )()
  });

  return (
    <div>
      <Hero />
      <Description />
      <Books />
      <Book />
    </div>
  );
}
