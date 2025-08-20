import centeralized from "../../assets/images/centeralized.png";
import collaborate from "../../assets/images/collaborat.png";
import automate from "../../assets/images/automate.png";
import { useInView,motion } from "framer-motion";
import { useRef } from "react";


const Features = () => {
  
   const ref=useRef(null);
   const isInview=useInView(ref,{thresholde:0.05})

  return (
    <div className="flex min-h-screen items-center justify-center p-10 bg-white">
      <div ref={ref} className="container grid max-w-screen-lg gap-8 lg:grid-cols-2 lg:grid-rows-2">
        <motion.div initial={{scale:0.5}} animate={isInview?{scale:1}:{}} transition={{ type: "spring", stiffness:80,}} className="row-span-2 flex flex-col rounded-md border border-slate-200">
          <div className="h-1/2 flex-1">
            <img
              src={centeralized}
              className="w-full object-cover object-right-top"
              alt="project-dashboard"
            />
          </div>
          <div className="p-10">
            <h3 className="text-xl font-medium text-gray-700">
              Centralized Project Dashboard
            </h3>
            <p className="mt-2 text-slate-500">
              Manage all your tasks and projects in one place. Visualize progress,
              set deadlines, and ensure your team stays on track with our
              intuitive project dashboard.
            </p>
            <a href="" className="mt-2 inline-flex text-sky-500">
              Learn More →
            </a>
          </div>
        </motion.div>
        <motion.div initial={{scale:0}} animate={isInview?{scale:1}:{}} transition={{ type: "spring", stiffness: 100,}} className="flex rounded-md border border-slate-200">
          <div className="flex-1 p-10">
            <h3 className="text-xl font-medium text-gray-700">
              Collaborative Task Management
            </h3>
            <p className="mt-2 text-slate-500">
              Assign tasks, set priorities, and collaborate seamlessly with your
              team. Track progress in real-time to ensure nothing falls through
              the cracks.
            </p>
            <a href="" className="mt-2 inline-flex text-sky-500">
              Learn More →
            </a>
          </div>

          <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
            <div className="absolute inset-0">
              <img
                src={collaborate}
                className="h-full w-full object-cover object-left-top"
                alt="team collaboration"
              />
            </div>
          </div>
        </motion.div>
        <motion.div initial={{scale:0}} animate={isInview?{scale:1}:{}} transition={{ type: "spring", stiffness:80,}} className="flex rounded-md border border-slate-200">
          <div className="flex-1 p-10">
            <h3 className="text-xl font-medium text-gray-700">
              Automate Repetitive Workflows
            </h3>
            <p className="mt-2 text-slate-500">
              Streamline your processes by automating repetitive tasks. Use
              integrations to set up triggers and actions, saving you time and
              reducing errors.
            </p>
            <a href="" className="mt-2 inline-flex text-sky-500">
              Learn More →
            </a>
          </div>

          <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
            <div className="absolute inset-0">
              <img
                src={automate}
                className=" object-cover object-left-top"
                alt="automation"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
