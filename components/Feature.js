import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Efficient Inventory Management",
  "Quick and Easy Setup",
  "Customization at Your Fingertips",
  // "No specific time limits."
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            {/* <Image
              src="/assets/about_img.png"
              alt=" Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={630}
            /> */}
            <div className="relative w-[19rem] h-[19rem] lg:w-[30rem] lg:h-[22rem]">
            <Image
              src="/assets/about_img.png"
              alt=" Illustrasi"
              layout="fill"
              className="object-cover"
              quality={100}
              
            />
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col  justify-center ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              We Provide Many Services You Can Use
            </h3>
            <p className="my-2 text-black-500">
              You can explore the services that we provide with fun and have
              their own functions each service.
            </p>
            <ul className="text-black-500 self-start list-inside ml-8">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>

            <div className="rounded-2xl bg-orange-500 px-4 sm:px-8 py-6 flex gap-7 justify-center sm:gap-12  mt-5">

              <div className="text-white-500">
                <h4 className="font-bold text-xl text-white-500">99%</h4>
                <p className=" text-base text-white-500">Customer  satisfaction</p>
              </div>

              <div className="text-white-500">
                <h4 className="font-bold text-xl text-white-500">50</h4>
                <p className=" text-base text-white-500">Active  users</p>
              </div>

              <div className="text-white-500">
                <h4 className="font-bold text-xl text-white-500">120%</h4>
                <p className=" text-base text-white-500">Company  growth</p>
              </div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
