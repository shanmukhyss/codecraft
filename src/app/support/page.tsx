"use client";
import { useState } from "react";
import NavigationHeader from "@/components/NavigationHeader";

export default function CompilerSupport() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    setSubmitted(true);

    // Reset message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center">
      {/* Navigation Header */}
      <NavigationHeader />

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-6 w-full">
        <div className="w-full max-w-3xl bg-gray-900/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-800">
          
          {/* Header */}
          <h1 className="text-4xl font-extrabold text-white text-center mb-4">Any Issues?</h1>
          <p className="text-gray-400 text-center text-lg">Report errors or request features here.</p>

         

          {/* Support Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium">Issue Type</label>
              <select
                required
                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="compilation">Compilation Error</option>
                <option value="performance">Performance Issue</option>
                <option value="feature">Feature Request</option>
                <option value="feature">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium">Description</label>
              <textarea
                required
                className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows={4}
                placeholder="Describe the issue or feature request"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-lg text-white font-semibold text-lg shadow-md"
            >
              Submit Request
            </button>
          </form>
           {/* Success Message */}
           {submitted && (
            <div className="mt-4 p-3 text-center text-green-400 bg-green-900/30 rounded-lg border border-green-700 animate-fade-in">
              Your request has been submitted successfully! We will try to fix it shortly
            </div>
          )}

          {/* FAQ Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-white">Frequently Asked Questions</h2>
            <div className="mt-4 space-y-4">
              <details className="bg-gray-800 p-4 rounded-lg transition-all duration-300">
                <summary className="cursor-pointer font-medium text-white text-lg">
                  Why does my code fail when using input functions?
                </summary>
                <p className="mt-2 text-gray-400 text-sm">
                  Currently, our compiler does not support runtime user input. Try replacing `input()` (Python), `scanf()` (C), or `cin` (C++) with hardcoded values for testing.
                </p>
              </details>

              <details className="bg-gray-800 p-4 rounded-lg transition-all duration-300">
                <summary className="cursor-pointer font-medium text-white text-lg">
                  Why is my code taking too long to compile?
                </summary>
                <p className="mt-2 text-gray-400 text-sm">
                  Large inputs or infinite loops may cause delays. Try optimizing your code.
                </p>
              </details>

              <details className="bg-gray-800 p-4 rounded-lg transition-all duration-300">
                <summary className="cursor-pointer font-medium text-white text-lg">
                  Does the compiler support real-time collaboration?
                </summary>
                <p className="mt-2 text-gray-400 text-sm">
                  No, but we are planning to introduce this feature in future updates.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
