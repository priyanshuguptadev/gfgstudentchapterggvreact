// components/Hero.js
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-wrap p-8 items-center bg-green-50">
      <div className="w-full lg:w-1/2">
        <h1 className="text-4xl font-bold mb-4">AIM OF GFG STUDENT CHAPTER GGV:</h1>
        <p>
          The aim of the Geeks for Geeks (GFG) Student Chapter is to foster a
          community of tech enthusiasts within educational institutions,
          providing a platform for students to enhance their technical
          knowledge, coding skills, and professional development...
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <video
          autoplay
          loop
          muted
          src="/assets/gfg-video.mp4"
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
