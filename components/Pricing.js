import React, { useMemo, useState } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
// import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import SessionModal from "./misc/Modal";
import { IoIosCall } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa6";
const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 * index,
      },
    }),
  };
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <SessionModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />

      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Choose Your Plan
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <div className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center shadow-lg rounded-xl py-4 px-6 lg:px-12 xl:px-20 bg-white-500"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/basic.png"
                    width={250}
                    height={165}
                    alt="Free Plan"
                  />
                </div>
                <p className="text-xl text-orange-500 font-bold  capitalize my-2 sm:my-7">
                  Free Plan
                </p>
                <p className="text-4xl text-orange-500 text-center mb-4 font-extrabold">
                  Free
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Unlimited Bandwitch
                  </li>
                  <li className="relative check custom-list my-2">
                    Encrypted Connection
                  </li>
                  <li className="relative check custom-list my-2">
                    No Traffic Logs
                  </li>
                  <li className="relative check custom-list my-2">
                    Works on All Devices
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <ButtonOutline>Select</ButtonOutline>
                </div>
              </motion.div>
            </div>
            <div className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center shadow-lg rounded-xl py-4 px-6 lg:px-12 xl:px-20 bg-white-500"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/standard.png"
                    width={250}
                    height={165}
                    alt="Standard Plan"
                  />
                </div>
                <p className="text-xl text-orange-500 font-bold  capitalize my-2 sm:my-7">
                  Standard Plan{" "}
                </p>
                <p className="text-4xl text-orange-500 text-center mb-4 font-extrabold">
                  $9<span className="text-black-500 text-2xl">/mo</span>
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Unlimited Bandwitch
                  </li>
                  <li className="relative check custom-list my-2">
                    Encrypted Connection
                  </li>
                  <li className="relative check custom-list my-2">
                    No Traffic Logs
                  </li>
                  <li className="relative check custom-list my-2">
                    Works on All Devices
                  </li>
                  <li className="relative check custom-list my-2">
                    Connect Anyware{" "}
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <ButtonOutline>Select</ButtonOutline>
                </div>
              </motion.div>
            </div>
            <div className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center shadow-lg rounded-xl py-4 px-6 lg:px-12 xl:px-20 bg-white-500"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/premium.png"
                    height={165}
                    width={250}
                    alt="Premium Plan"
                  />
                </div>
                <p className="text-xl text-orange-500 font-bold  capitalize my-2 sm:my-7">
                  Premium Plan{" "}
                </p>
                <p className="text-4xl text-orange-500 text-center mb-4 font-extrabold">
                  $12<span className="text-black-500 text-2xl">/mo</span>
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Unlimited Bandwitch
                  </li>
                  <li className="relative check custom-list my-2">
                    Encrypted Connection
                  </li>
                  <li className="relative check custom-list my-2">
                    No Traffic Logs
                  </li>
                  <li className="relative check custom-list my-2">
                    Works on All Devices
                  </li>
                  <li className="relative check custom-list my-2">
                    Connect Anyware{" "}
                  </li>
                  <li className="relative check custom-list my-2">
                    Get New Features{" "}
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <ButtonOutline>Select</ButtonOutline>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mt-6">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Product Development Strategy
            </motion.h3>
            <div className="flex gap-10 justify-center mt-7 mb-16 flex-col sm:flex-row">
              {" "}
              <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView={"animate"}
                custom={0}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="relative product_image ">
                  <Image
                    src="/assets/planning.png"
                    alt=" Illustrasi"
                    layout="fill"
                    className="object-cover"
                    quality={100}
                  />
                </div>
                <div className="rounded-2xl text_height sm:h-60  bg-orange-500 px-4 py-6 flex  mt-5">
                  <div className="text-white-500">
                    <h4 className="font-bold text-xl text-white-500">
                      Analysis & Strategic Planing
                    </h4>
                    <p className=" text-base text-white-500">
                      Develop a customized roadmap closely aligned with business
                      objectives, ensuring a clear path for software product
                      development.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView={"animate"}
                custom={1}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="relative product_image">
                  <Image
                    src="/assets/development.png"
                    alt=" Illustrasi"
                    layout="fill"
                    className="object-cover"
                    quality={100}
                  />
                </div>
                <div className="rounded-2xl text_height sm:h-60 bg-orange-500 px-4 py-6 flex  mt-5">
                  <div className="text-white-500">
                    <h4 className="font-bold text-xl text-white-500">
                      Implementation & Development
                    </h4>
                    <p className=" text-base text-white-500">
                      Driving progress through robust implementation and agile
                      development practices to bring your vision to life
                      efficiently and effectively.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView={"animate"}
                custom={3}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="relative product_image ">
                  <Image
                    src="/assets/conti.png"
                    alt=" Illustrasi"
                    layout="fill"
                    className="object-cover"
                    quality={100}
                  />
                </div>
                <div className="rounded-2xl text_height sm:h-60  bg-orange-500 px-4 py-6 flex  mt-5">
                  <div className="text-white-500">
                    <h4 className="font-bold text-xl text-white-500">
                      Continuous Development & Improvements
                    </h4>
                    <p className=" text-base text-white-500">
                      we continuously refine and optimize our processes,
                      ensuring sustained improvement and superior results.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed px-3 sm:w-9/12  mx-auto"
            >
              Customized Ecommerce Platform Your Brand, Your Store, Your Way
            </motion.h3>
            <motion.p
              className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
              variants={scrollAnimation}
            >
              Showluv is here to revolutionize how you manage, market, and move
              your products. Say goodbye to the hassle of setting up an
              ecommerce site and say hello to your very own, personalized online
              store
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className="py-12 w-full px-8 mt-16"
              variants={scrollAnimation}
            >
              {/* <Maps className="w-full h-auto" /> */}
            </motion.div>
          </ScrollAnimationWrapper>
          {/* <ScrollAnimationWrapper>
            <motion.div
              className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
              variants={scrollAnimation}
            >
              <img
                src="/assets/Icon/amazon.png"
                className="h-14 w-auto mt-4 lg:mt-2"
                alt=""
              />
              <img
                src="/assets/Icon/netflix.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/reddit.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/discord.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/spotify.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
            </motion.div>
          </ScrollAnimationWrapper> */}
        </div>
        <div className="flex flex-col w-full " id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal sm:w-9/12  lg:w-4/12 mx-auto"
            >
              Trusted by Many Happy Customers{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have worked with us.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <div className="flex flex-col-reverse sm:grid grid-flow-dense sm:grid-cols-2 items-center bg-white-300 px-2 rounded-lg sm:px-8">
            <ScrollAnimationWrapper className="w-full sm:w-[75%] flex flex-col py-12">
              <motion.div variants={scrollAnimation}>
                <motion.h3
                  variants={scrollAnimation}
                  className="text-2xl sm:text-3xl lg:text-4xl text-left font-medium text-black-600 leading-normal  mx-auto"
                >
                  Get in Touch{" "}
                </motion.h3>

                <div className="rounded-2xl h-[12rem] bg-orange-500 px-7 lg:px-14 py-2 flex flex-col justify-center mt-5 items-start">
                  <div className="flex items-center gap-4">
                    <span className="border-2 p-1 border-white-500 rounded-full">
                      {" "}
                      <IoIosCall color="white" />
                    </span>
                    <div className="text-white-500 text-left">
                      <h4 className="font-bold text-xl text-white-500 flex gap-3 items-center">
                        Phone Number
                      </h4>
                      <a
                        href="tel:07064354605"
                        className=" text-base text-white-500"
                      >
                        07064354605
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="border-2 p-1 border-white-500 rounded-full">
                      {" "}
                      <FaRegEnvelope color="white" />{" "}
                    </span>
                    <div className="text-white-500 text-left">
                      <h4 className="font-bold text-xl text-white-500 flex gap-3 items-center">
                        Email
                      </h4>
                      <a
                        href="mailto:info@showluv.com"
                        className=" text-base text-white-500"
                      >
                        info@showluv.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="w-full flex flex-col py-12">
              <motion.div variants={scrollAnimation}>
                <div className="relative contact_image">
                  <Image
                    src="/assets/contacts.png"
                    alt=" Illustrasi"
                    layout="fill"
                    className="object-cover"
                    quality={100}
                  />
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Start Your Journey Today
                    <br />
                  </h5>
                  <p>
                    {" "}
                    Explore how Showluv Market can transform your business.
                  </p>
                </div>
                <ButtonPrimary onClick={showModal}>Get started</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
