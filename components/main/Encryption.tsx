"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const educationData = [
  {
    title: "BSc(Hons) Degree in Information Technology specializing in Software Engineering",
    institution: "SLIIT University",
    duration: "Sep 2021 - Present · 3 years ",
    location: "Sri Lanka",
    level: "Undergraduate",
    logo: "/sliit-web-logo.png", 
  },
  {
    title: "Advance Level",
    institution: "Seventh-day Adventist High School",
    duration: "June 2019 - Dec 2019 · 6 months",
    location: "Sri Lanka",
    logo: "/nvq-logo.png",
  }
];

const Education = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-8 py-16">
      {/* Heading */}
      <motion.div
        variants={slideInFromTop}
        className="text-[40px] font-medium text-center text-gray-200 mb-10"
      >
        Academic Education
        <p className="text-lg text-gray-400 mt-2">
          Discover the stages of my academic learning journey.
        </p>
      </motion.div>

      {/* Education List */}
      <div className="w-full max-w-4xl">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex items-center gap-6 bg-gray-900/40 rounded-lg p-5 mb-6 border border-gray-700"
          >
            {/* Logo */}
            <Image src={edu.logo} alt={edu.institution} width={50} height={50} className="rounded-md" />
            
            {/* Details */}
            <div>
              <h3 className="text-lg font-semibold text-white">{edu.title}</h3>
              <p className="text-sm text-gray-400">{edu.institution}</p>
              <p className="text-xs text-gray-500">{edu.duration}</p>
              <p className="text-xs text-gray-500">{edu.location}</p>
              <p className="text-xs text-gray-400 mt-1">{edu.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
