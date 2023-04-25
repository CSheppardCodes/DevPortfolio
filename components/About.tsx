import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ opacity: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        src="https://cdn.sanity.io/images/ltuexkre/production/a766c574c295f2103c63c2dfdf675557c664d016-600x600.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          I'm Chris and I code. I wrote my first {">>>"}print("Hello World!") in
          my high school robotics class. I thought we would be just building the
          robots, but it turned 90% of the class was programming. And much like
          my troubleschooting sessions in VS Code... I caught the Bug. So began
          my journey with coding. That summer I set a goal to code for at least
          a half hour a day from Eric Matthes "Python Crash Course:
          Project-Based Intro to Programming ". I ended up coding for 2 hours a
          day that whole summer. Since then I have been studying computer
          science at UT Dallas gaining friends, projects, and knowledge about
          the world of programming. My next goal is to solve real-life problems
          with code one byte at a time. //add emojis
        </p>
      </div>
    </motion.div>
  );
}
