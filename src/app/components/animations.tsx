"use client"

import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

export function Animations() {
  const { scrollYProgress: completionProgress } = useScroll()

  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const divVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

  const svgIconVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(252, 211, 77, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(252, 211, 77, 1)"
    }
  };

  const gradientAnimation = {
    backgroundImage: [
      "linear-gradient(to right, #60a5fa, #34d399, #facc15)",
      "linear-gradient(to right, #facc15, #34d399, #60a5fa)",
      "linear-gradient(to right, #60a5fa, #34d399, #facc15)",
    ],
  };

  const gradientTransition = {
    duration: 3,
    ease: "linear",
    repeat: Infinity,
  };
  return (
    <div>
      <motion.section className="flex flex-col gap-10 mb-10" ref={containerRef}>
        <motion.h1
          className="text-4xl tracking-wide text-slate-50 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Exploring Motion: Transform, Rotate, Scroll & More
        </motion.h1>

        <motion.p
          className="text-slate-50 font-thin text-3xl w-1/2 mx-auto"
          initial={{ opacity: 0, x: -300 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -300 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          This interactive showcase demonstrates the power of motion in UI.
          Using <span className="font-semibold">Framer Motion</span>, we bring elements to life with smooth transformations, rotations, scaling effects, and fluid interactions.
        </motion.p>

        <motion.p
          className="text-slate-50 font-thin text-3xl w-1/2 mx-auto"
          initial={{ opacity: 0, x: 300 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Experience dynamic animations such as hover effects, bouncing buttons, draggable components, SVG path animations,
          scroll-based progress tracking, and seamless shape morphing—all in a visually engaging, responsive layout.
        </motion.p>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >
        <motion.div
          variants={divVariants}
          className="bg-cyan-950 rounded-xl aspect-square shadow-lg flex items-center justify-center flex-col gap-20"
        >
          <motion.h2
            className="text-2xl font-semibold bg-clip-text text-transparent text-center"
            animate={gradientAnimation}
            transition={gradientTransition}
            style={{
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
            }}
          >
            Elevate, Transform, Unite
          </motion.h2>

          <div className="flex gap-10">
            <motion.div
              className="size-20 bg-amber-50 rounded-full shadow-md"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
            </motion.div>
            <motion.div
              className="size-20 bg-amber-50 rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeIn", delay: 0.25 }}
            >
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={divVariants}
          className="bg-cyan-950 flex items-center justify-center rounded-xl aspect-square shadow-lg flex-col gap-20"
        >
          <motion.h2
            className="text-2xl font-semibold bg-clip-text text-transparent text-center"
            animate={gradientAnimation}
            transition={gradientTransition}
            style={{
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
            }}
          >
            Shifting Shapes, Infinite Motion
          </motion.h2>
          <motion.div
            className="size-20 bg-blue-300 rounded-2xl"
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ["15%", "15%", "60%", "15%"],
            }}
            transition={{
              duration: 3.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.8,
            }}
          >
          </motion.div>
        </motion.div>

        <motion.div
          variants={divVariants}
          className="bg-cyan-950 rounded-xl aspect-square shadow-lg flex items-center justify-center flex-col gap-20"
        >
          <motion.h2
            className="text-2xl font-semibold bg-clip-text text-transparent text-center"
            animate={gradientAnimation}
            transition={gradientTransition}
          >
            A Click with a Bounce
          </motion.h2>
          <motion.button
            className="w-1/2 p-4 bg-green-600 text-amber-50 text-2xl rounded-md cursor-pointer"
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#d1d5db",
              color: "black",
            }}
            transition={{
              bounceDamping: 20,
              bounceStiffness: 500,
            }}
          >
            Click
          </motion.button>
        </motion.div>

        <motion.div
          variants={divVariants}
          className="bg-cyan-950 rounded-xl aspect-square shadow-lg flex items-center justify-center flex-col gap-20"
        >
          <motion.h2
            className="text-2xl font-semibold bg-clip-text text-transparent text-center z-10"
            animate={gradientAnimation}
            transition={gradientTransition}
          >
            Drag Me!
          </motion.h2>
          <motion.div
            className="size-1/3 bg-pink-500 rounded-3xl cursor-grab z-5"
            drag
            dragConstraints={{
              top: -120,
              right: 120,
              bottom: 120,
              left: -125,
            }}
          >
          </motion.div>
        </motion.div>

        <motion.div
          variants={divVariants}
          className="bg-cyan-950 rounded-xl aspect-square shadow-lg flex items-center justify-center flex-col gap-20"
        >
          <motion.h2
            className="text-2xl font-semibold bg-clip-text text-transparent text-center z-10"
            animate={gradientAnimation}
            transition={gradientTransition}
          >
            Dynamic Progress
          </motion.h2>
          <motion.div
            className="w-40 aspect-square bg-gray-50/20 rounded-xl"
          >
            <motion.div
              className="w-full bg-gray-400 rounded-xl h-full origin-bottom"
              style={{ scaleY: completionProgress }}
            >
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={divVariants}
          className="bg-cyan-950 rounded-xl aspect-square shadow-lg flex items-center justify-center flex-col gap-14"
        >
          <motion.h2
            className="text-2xl font-semibold bg-clip-text text-transparent text-center z-10"
            animate={gradientAnimation}
            transition={gradientTransition}
          >
            SVG in motion
          </motion.h2>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-1/2 stroke-amber-500 stroke-[0.5]"
          >
            <motion.path
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              variants={svgIconVariants}
              initial="hidden"
              animate="visible"
              transition={{
                default: {
                  duration: 2,
                  ease: "easeInOut",
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1
                },
                fill: {
                  duration: 2,
                  ease: "easeIn",
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1
                }
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.section>
    </div>
  )
}
