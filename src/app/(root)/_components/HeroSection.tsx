import { useUser, SignInButton } from "@clerk/clerk-react";

export default function HeroSection() {
  const { isSignedIn } = useUser(); // Check authentication status

  if (isSignedIn) return null; // Hide if user is signed in

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('C:\Users\yssre\Downloads\A_modern_and_minimalistic_AI-powered_web_developme.jpg')",
      }}
    >
      <div className="text-center text-white bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">AI-Powered Code Editor</h1>
        <p className="text-lg mb-6">Experience the future of web development.</p>
        <SignInButton mode="modal">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg">
            Get Started
          </button>
        </SignInButton>
      </div>
    </div>
  );
}
