"use client";
import { FaVideo, FaMagic, FaPalette, FaMusic } from "react-icons/fa";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between bg-white text-black px-6">
      <div className="relative z-10 max-w-2xl p-10 lg:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
          About Vertex Studio
        </h1>
        <p className="text-lg md:text-xl text-black leading-relaxed">
          At <span className="font-semibold text-black">Vertex Studio</span>, we
          specialize in high-quality video editing and post-production services
          for individuals, businesses, and creators. Whether you need a
          cinematic wedding film, a corporate promotional video, engaging social
          media content, or high-end commercial editing, our expert team ensures
          every project is polished to perfection.
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-3">
            <FaVideo className="text-blue-500 text-3xl" />
            <p className="text-lg md:text-xl text-black">
              Cinematic Video Editing
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <FaMagic className="text-purple-500 text-3xl" />
            <p className="text-lg md:text-xl text-black">
              Smooth Transitions & Effects
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <FaPalette className="text-orange-500 text-3xl" />
            <p className="text-lg md:text-xl text-black">
              Advanced Color Grading
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <FaMusic className="text-green-500 text-3xl" />
            <p className="text-lg md:text-xl text-black">
              High-Quality Sound Design
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[500px]">
        <video
          className="w-full h-full object-cover rounded-lg shadow-xl"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/about.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
