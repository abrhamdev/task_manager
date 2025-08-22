import { useEffect, useState, useRef } from "react";
import heroimage from "../../assets/images/task.png";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [iszoomedin, setZoomIn] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    const interval = setInterval(() => {
      setZoomIn((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center">
      {/* Original background layers removed to make the component transparent.
        
        The following lines were removed:
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-black opacity-95 z-0"></div>
        <div className="absolute inset-0 bg-[url('...')] opacity-20 z-0"></div>
      */}

      {/* Animated background elements (now transparent) */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-pulse-slower"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Productivity</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="text-xl text-blue-100 font-light max-w-lg"
              >
                Stay Organized, Be Productive: Manage Your Tasks Efficiently with Our Intuitive Platform
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                className="text-lg text-gray-300 font-light max-w-xl"
              >
                Task Manager helps you stay on top of your to-do list, collaborate with your team, and track progress effortlessly.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 mt-6"
            >
              <Link
                to="/signup"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Get Started Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </Link>

              <button className="px-8 py-4 rounded-xl bg-white/10 text-white font-medium text-lg backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300">
                Learn More
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
              className="flex items-center space-x-6 mt-8 text-gray-300"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span>Intuitive Interface</span>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <span>Secure & Private</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              {/* Glass-morphism card effect (now transparent) */}
              <div className="absolute -inset-4 bg-blue-500/10 rounded-2xl backdrop-blur-xl border border-white/10 rotate-3"></div>
              <div className="absolute -inset-2 bg-purple-500/10 rounded-xl backdrop-blur-lg border border-white/5 -rotate-3"></div>

              <motion.div
                className="relative rounded-2xl p-6 backdrop-blur-md border border-white/10 shadow-2xl"
                animate={{
                  scale: iszoomedin ? 1.03 : 1,
                  rotate: iszoomedin ? 0.5 : -0.5,
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={heroimage}
                  className="w-full max-w-md rounded-xl shadow-lg"
                  alt="Task Management Illustration"
                />
              </motion.div>

              {/* Floating elements (now transparent) */}
              <motion.div
                className="absolute -top-4 -right-4 bg-blue-500/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-2 rounded-lg shadow-lg"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                Organize Tasks
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-purple-500/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-2 rounded-lg shadow-lg"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                Track Progress
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;