import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  ChartBarIcon, 
  ClockIcon, 
  UserGroupIcon
} from "@heroicons/react/24/solid";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const features = [
    {
      id: 1,
      title: "Time Tracking",
      description: "Monitor time spent on tasks, generate productivity reports, and optimize your workflow efficiency.",
      icon: <ClockIcon className="w-10 h-10" />,
      color: "amber",
      position: "left",
      delay: 0.1
    },
    {
      id: 2,
      title: "Smart Notifications",
      description: "Get intelligent reminders based on priorities, deadlines, and your working patterns to stay on track.",
      icon: <ChartBarIcon className="w-10 h-10" />,
      color: "fuchsia",
      position: "center",
      delay: 0.3
    },
    {
      id: 3,
      title: "Enterprise Security",
      description: "Bank-level encryption, role-based access controls, and compliance with industry security standards.",
      icon: <UserGroupIcon className="w-10 h-10" />,
      color: "teal",
      position: "right",
      delay: 0.5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Powerful Features for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-fuchsia-500">Maximum Productivity</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 px-4">
            Everything you need to organize, prioritize, and complete your work efficiently.
          </p>
        </motion.div>

        {/* Features arranged in a triangular layout on desktop, vertical on mobile */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative min-h-[500px] md:min-h-[700px]"
        >
          {/* Connecting lines - hidden on mobile */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M20,80 Q50,20 80,80"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </svg>

          {/* Mobile layout - vertical stack */}
          <div className="flex flex-col space-y-8 md:space-y-0 md:hidden">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: feature.delay }}
                className="group w-full"
              >
                <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-6 md:p-8 border border-white/10 hover:border-fuchsia-500/30 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                  {/* Hover effect background */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Icon container with unique color */}
                  <div className={`relative z-10 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl mb-4 md:mb-6 ${
                    feature.color === "amber" ? "bg-amber-500/10 text-amber-300 group-hover:bg-amber-500/20" :
                    feature.color === "fuchsia" ? "bg-fuchsia-500/10 text-fuchsia-300 group-hover:bg-fuchsia-500/20" :
                    "bg-teal-500/10 text-teal-300 group-hover:bg-teal-500/20"
                  } transition-colors duration-500 mx-auto`}>
                    {feature.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 relative z-10 text-center ${
                    feature.color === "amber" ? "text-amber-100" :
                    feature.color === "fuchsia" ? "text-fuchsia-100" :
                    "text-teal-100"
                  }`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 relative z-10 text-center text-sm md:text-base">
                    {feature.description}
                  </p>
                  
                  {/* Learn more link */}
                  <div className="mt-4 md:mt-6 relative z-10 text-center">
                    <a 
                      href="#" 
                      className={`inline-flex items-center ${
                        feature.color === "amber" ? "text-amber-400 hover:text-amber-300" :
                        feature.color === "fuchsia" ? "text-fuchsia-400 hover:text-fuchsia-300" :
                        "text-teal-400 hover:text-teal-300"
                      } transition-colors duration-300 group/link text-sm md:text-base`}
                    >
                      Learn more
                      <svg 
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop layout - triangular arrangement */}
          <div className="hidden md:block">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: feature.delay }}
                className={`absolute ${
                  feature.position === "left" 
                    ? "left-0 top-1/2 transform -translate-y-1/2" 
                    : feature.position === "center" 
                    ? "left-1/3 top-1/4 transform -translate-x-1/2" 
                    : "right-0 top-1/2 transform -translate-y-1/2"
                } group w-full max-w-md`}
              >
                <div className={`relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-8 border border-white/10 hover:border-${feature.color}-500/30 transition-all duration-500 backdrop-blur-sm overflow-hidden transform ${
                  feature.position === "left" ? "-rotate-3" : 
                  feature.position === "right" ? "rotate-3" : ""
                } group-hover:rotate-0`}>
                  
                  {/* Hover effect background */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Icon container with unique color */}
                  <div className={`relative z-10 flex items-center justify-center w-20 h-20 rounded-2xl mb-6 ${
                    feature.color === "amber" ? "bg-amber-500/10 text-amber-300 group-hover:bg-amber-500/20" :
                    feature.color === "fuchsia" ? "bg-fuchsia-500/10 text-fuchsia-300 group-hover:bg-fuchsia-500/20" :
                    "bg-teal-500/10 text-teal-300 group-hover:bg-teal-500/20"
                  } transition-colors duration-500 mx-auto`}>
                    {feature.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-2xl font-bold text-white mb-4 relative z-10 text-center ${
                    feature.color === "amber" ? "text-amber-100" :
                    feature.color === "fuchsia" ? "text-fuchsia-100" :
                    "text-teal-100"
                  }`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 relative z-10 text-center">
                    {feature.description}
                  </p>
                  
                  {/* Learn more link */}
                  <div className="mt-6 relative z-10 text-center">
                    <a 
                      href="#" 
                      className={`inline-flex items-center ${
                        feature.color === "amber" ? "text-amber-400 hover:text-amber-300" :
                        feature.color === "fuchsia" ? "text-fuchsia-400 hover:text-fuchsia-300" :
                        "text-teal-400 hover:text-teal-300"
                      } transition-colors duration-300 group/link`}
                    >
                      Learn more
                      <svg 
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Central CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 md:mt-32"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 md:px-8 md:py-4 rounded-xl bg-gradient-to-r from-amber-500 to-fuchsia-600 text-white font-medium text-base md:text-lg hover:from-amber-600 hover:to-fuchsia-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
            <button className="px-6 py-3 md:px-8 md:py-4 rounded-xl bg-white/10 text-white font-medium text-base md:text-lg backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;