import React from "react";
import AboutHero from "../about/AboutHero";
import AboutContent from "../about/AboutContent";
import Testimonial from "../about/Testimonial";
import AboutContent1 from "../about/AboutContent1";

export default function About() {
  return (
    <div className="h-full w-full overflow-hidden">
      <AboutHero />
      <AboutContent />
      <AboutContent1 />
      <Testimonial />
    </div>
  );
}
