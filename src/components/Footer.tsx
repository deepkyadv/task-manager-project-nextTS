import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-10 px-6 mt-0 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-3">🚀 Work Manager</h1>
          <p className="text-sm text-gray-300">
            Manage your tasks efficiently. Organize. Plan. Succeed.
          </p>
        </div>

        {/* Center Section */}
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
          <div className="flex space-x-5">
            <a href="#!" className="hover:text-blue-500 transition">
              <FaFacebookF size={24} />
            </a>
            <a href="#!" className="hover:text-red-500 transition">
              <FaYoutube size={24} />
            </a>
            <a href="#!" className="hover:text-pink-400 transition">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-3">Important Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#!" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#!" className="hover:text-white transition">Terms of Service</a></li>
            <li><a href="#!" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

      </div>
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-slate-700 pt-4">
        &copy; {new Date().getFullYear()} Work Manager. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
