"use client";
import Books from "@/components/Books";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import BookPreview from "@/components/BookPreview";
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
        <BookPreview />
    </div>
  );
}
