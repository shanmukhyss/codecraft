import NavigationHeader from "@/components/NavigationHeader";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
        <NavigationHeader/>
      <div className="w-full max-w-3xl bg-gray-900/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-800 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4">Contact Me</h1>
        <p className="text-gray-400 text-lg mb-6">Feel free to reach out through any of the platforms below:</p>

        {/* Social Links */}
        <div className="flex flex-col space-y-4">
          <a href="mailto:your.email@gmail.com" className="flex items-center justify-center space-x-3 text-gray-300 hover:text-blue-500 transition">
            <FaEnvelope className="text-xl" />
            <span>yssreenivas2006@gmail.com</span>
          </a>

          <a href="https://www.linkedin.com/in/shanmukh-sreenivas-yadavalli" target="_blank" className="flex items-center justify-center space-x-3 text-gray-300 hover:text-blue-500 transition">
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>

          <a href="https://github.com/yourgithub" target="_blank" className="flex items-center justify-center space-x-3 text-gray-300 hover:text-blue-500 transition">
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
