import { motion } from "framer-motion";
import React from "react";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ opacity: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://cdn.sanity.io/images/ltuexkre/production/a766c574c295f2103c63c2dfdf675557c664d016-600x600.png"
        alt="image card"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of MANGA</h4>
        <p className="text-2xl font-bold mt-1">MANGA</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/a766c574c295f2103c63c2dfdf675557c664d016-600x600.png"
            alt="tech used"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/a766c574c295f2103c63c2dfdf675557c664d016-600x600.png"
            alt="tech used"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/a766c574c295f2103c63c2dfdf675557c664d016-600x600.png"
            alt="tech used"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work ... -Ended....
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
