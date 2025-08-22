
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-950 to-black shadow-lg transition duration-300 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Task Manager</h2>
          <p className="text-gray-400">
            Simplify your workflow and stay organized with our powerful task management tool.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#features" className="hover:text-blue-400">Features</a></li>
            <li><a href="#pricing" className="hover:text-blue-400">Pricing</a></li>
            <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          Email:<a href="mailto:abrhamabebe564@gmail.com"> abrhamabebe564@gmail.com</a>
          <p className="text-gray-400">Phone: +251 948910520</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              className="hover:text-blue-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5.01 3.657 9.129 8.438 9.879v-6.987H8.077V12h2.361v-1.575c0-2.324 1.394-3.6 3.53-3.6.983 0 1.829.073 2.073.106v2.406h-1.423c-1.112 0-1.33.528-1.33 1.296V12h2.681l-.349 2.892h-2.332v6.987C18.343 21.129 22 17.01 22 12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-blue-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.494 0-.175 0-.349-.012-.522A8.18 8.18 0 0 0 22 5.92a8.28 8.28 0 0 1-2.357.636 4.1 4.1 0 0 0 1.804-2.253 8.271 8.271 0 0 1-2.605.982 4.109 4.109 0 0 0-7.035 3.743 11.65 11.65 0 0 1-8.457-4.287 4.005 4.005 0 0 0 1.275 5.482A4.123 4.123 0 0 1 2.8 9.712v.045a4.114 4.114 0 0 0 3.292 4.025 4.092 4.092 0 0 1-1.085.142 3.92 3.92 0 0 1-.775-.075 4.107 4.107 0 0 0 3.835 2.852A8.233 8.233 0 0 1 2 18.406a11.616 11.616 0 0 0 6.29 1.818" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-pink-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm8.5 1.5c1.45 0 2.75.9 3.28 2.13h-1.37a.5.5 0 0 0-.5.5v1.35c0 .275.225.5.5.5h1.365a3.76 3.76 0 0 1-3.275 3.275V8.13A.5.5 0 0 0 13.5 7.5h-1.35a.5.5 0 0 0-.5.5v1.36a3.76 3.76 0 0 1-3.275-3.275h1.36a.5.5 0 0 0 .5-.5V5.63c0-.275-.225-.5-.5-.5H7.485A3.76 3.76 0 0 1 10.75 4.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-gray-500 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Task Manager. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
