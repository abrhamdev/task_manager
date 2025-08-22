import { DocumentTextIcon, ArrowUpTrayIcon, UsersIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const AboutUs = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-200 mb-8">
          About Task Manager
        </h2>
        <p className="text-gray-400 mb-12">
          Discover how Task Manager can revolutionize the way you organize, track, and complete your work.
          Designed with productivity and simplicity in mind.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Block 1 */}
          <div className="bg-gray-800/50 shadow-lg p-6 rounded-lg border border-gray-700/50 backdrop-blur-sm">
            <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 bg-blue-500/20 text-blue-300 rounded-full">
              {/* Icon */}
              <DocumentTextIcon />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Efficient Task Management
            </h3>
            <p className="text-gray-400 mb-4">
              Organize your tasks effortlessly with our intuitive tools to improve your productivity and focus.
            </p>
            <ul className="text-left space-y-2 text-gray-400">
              <li className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-blue-400 mr-2" />
                Simple and intuitive task organization.
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-blue-400 mr-2" />
                Create, edit, and manage tasks with ease.
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-blue-400 mr-2" />
                Prioritize tasks based on deadlines and importance.
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-blue-400 mr-2" />
                Stay on top of tasks with timely reminders.
              </li>
            </ul>
          </div>

          {/* Block 2 */}
          <div className="bg-gray-800/50 shadow-lg p-6 rounded-lg border border-gray-700/50 backdrop-blur-sm">
            <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 bg-green-500/20 text-green-300 rounded-full">
              {/* Icon */}
              <ArrowUpTrayIcon />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Seamless Collaboration
            </h3>
            <p className="text-gray-400 mb-4">
              Work with your team effortlessly by sharing tasks and tracking progress in real-time.
            </p>
            <ul className="text-left space-y-2 text-gray-400">
              <li className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2" />
                Share tasks and updates instantly with your team.
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2" />
                Collaborate on tasks, assign roles, and track changes.
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2" />
                Manage multiple projects simultaneously without confusion.
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2" />
                Stay connected through real-time updates and notifications.
              </li>
            </ul>
          </div>

          {/* Block 3 */}
          <div className="bg-gray-800/50 shadow-lg p-6 rounded-lg border border-gray-700/50 backdrop-blur-sm">
            <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 bg-purple-500/20 text-purple-300 rounded-full">
              {/* Icon */}
              <UsersIcon />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Smart Insights
            </h3>
            <p className="text-gray-400 mb-4">
              Get detailed analytics and insights to measure your performance and improve over time.
            </p>
            <ul className="text-left space-y-2 text-gray-400">
              <li className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-purple-400 mr-2" />
                Track your task completion rates and progress.
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-purple-400 mr-2" />
                Gain insights on areas of improvement for better productivity.
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-purple-400 mr-2" />
                Visualize your performance through easy-to-read charts.
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-purple-400 mr-2" />
                Use historical data to plan and forecast future tasks.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;