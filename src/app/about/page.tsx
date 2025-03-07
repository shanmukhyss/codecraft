"use client";
import NavigationHeader from "@/components/NavigationHeader";
import { useState } from "react";
import Image from "next/image";

export default function About() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
      <NavigationHeader />

      <div className="w-full max-w-3xl bg-gray-900/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-800 text-center">
        
        {/* Larger Profile Picture Upload */}
        <div className="relative w-40 h-40 mx-auto mb-6">
          <label htmlFor="photo-upload" className="cursor-pointer">
            <input type="file" id="photo-upload" accept="image/*" className="hidden" onChange={handleImageUpload} />
            {image ? (
              <Image 
                src={image} 
                alt="Profile" 
                width={160} 
                height={160} 
                className="rounded-full border-4 border-gray-700 object-cover shadow-lg"
              />
            ) : (
              <div className="w-40 h-40 rounded-full bg-gray-800 flex items-center justify-center text-gray-500 text-lg">
                Click to Upload
              </div>
            )}
          </label>
        </div>

        {/* About Me Section */}
        <h1 className="text-4xl font-extrabold text-white mb-4 animate-fade-in">About Me</h1>
        <p className="text-gray-400 text-lg leading-relaxed animate-fade-in delay-200">
          Hey there! I am <span className="text-blue-400 font-semibold">Shanmukh</span>,  
          a passionate **BTech 3rd-year student** at <span className="text-blue-400 font-semibold">IIT BHU</span> and a **full-stack developer**  
          with a keen interest in **AI-assisted tools, web development, and competitive programming**.
        </p>

        {/* Skills Section */}
        <div className="mt-6 text-left space-y-4">
          <p className="text-gray-300 text-lg font-semibold">🚀 Skills & Interests:</p>
          <ul className="text-gray-400 text-md space-y-2 list-disc pl-6">
            <li><span className="text-blue-400 font-medium">MERN Stack</span> – Building modern web applications.</li>
            <li><span className="text-blue-400 font-medium">AI & Machine Learning</span> – Exploring AI-powered solutions.</li>
            <li><span className="text-blue-400 font-medium">Competitive Programming</span> – Problem-solving & algorithmic thinking.</li>
          </ul>
        </div>

        {/* Contact & Social Links */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">Want to connect?</p>
          <a href="/contact" className="text-blue-500 hover:underline text-lg">Contact Me</a>
        </div>
      </div>
    </div>
  );
}
