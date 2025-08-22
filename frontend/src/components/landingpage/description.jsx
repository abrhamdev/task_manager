import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const DescriptionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="relative py-24 overflow-hidden">
      {/* Original background layers removed to make the component transparent.
        
        The following lines were removed:
        - The main div's background class: "bg-gradient-to-br from-gray-900 to-blue-900"
        - The background decorative elements:
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      */}
      
      <div className="relative container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Section title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-16 text-center"
          >
            Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Task Manager</span>?
          </motion.h2>
          
          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-500">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Streamlined Organization</h3>
                <p className="text-gray-300">
                  Keep all your tasks in one place with our intuitive categorization system that adapts to your workflow.
                </p>
              </div>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors duration-500">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Enhanced Productivity</h3>
                <p className="text-gray-300">
                  Focus on what matters with smart prioritization and reminders that help you meet deadlines effortlessly.
                </p>
              </div>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors duration-500">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Seamless Collaboration</h3>
                <p className="text-gray-300">
                  Work together with your team in real-time, assign tasks, and track progress without leaving the app.
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Main description text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 max-w-4xl text-center"
          >
            <div className="relative">
              {/* Original blurred background div was removed from here
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-lg opacity-50"></div>
              */}
              <div className="relative backdrop-blur-md rounded-2xl p-10 border border-white/10">
                <p className="text-2xl md:text-3xl font-light text-white leading-relaxed">
                  Unleash your productivity with our cutting-edge Task Manager. Whether you're juggling personal goals or collaborating with your team, our tool simplifies task management so you can focus on what truly matters.
                </p>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="mt-8 flex justify-center"
                >
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;