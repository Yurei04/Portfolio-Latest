'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Homepage = () => {
  return (
    <section className="relative lg:py-22 py-20 homepage-container bg-cover bg-center bg-no-repeat">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center bg-opacity-80 bg-black">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-8 text-center sm:text-left homepage-content"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              Hello, I am{' '}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'James',
                1500,
                'Developer',
                1000,
                'Programmer',
                1000,
                'Artist',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Greetings! I am James Avila, currently a student aspiring to be a full-stack developer. I am pursuing a BSIT major in Network Security at the University of Cordilleras.
          </p>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            <Link href="#contact" passHref legacyBehavior>
              <a className="relative group px-6 py-3 w-full sm:w-auto rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-black transition duration-300 ease-in-out">
                Contact Me!
              </a>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-4 flex justify-center mt-4 lg:mt-0"
        >
          <div className="relative rounded-full bg-[#181818] w-60 h-60 lg:w-96 lg:h-96">
            <Image
              src="/Images/1eeea7628770e286735630e6d772e125.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              objectFit="cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Homepage;
