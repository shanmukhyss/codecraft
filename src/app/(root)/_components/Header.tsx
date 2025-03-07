import { currentUser } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";
import Link from "next/link";
import { Blocks, Code2, Sparkles, LogIn } from "lucide-react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import RunButton from "./RunButton";
import HeaderProfileBtn from "./HeaderProfileBtn";

async function Header() {
  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  const user = await currentUser();

  const convexUser = await convex.query(api.users.getUser, {
    userId: user?.id || "",
  });

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gradient-to-b from-[#0a0a0f]/90 to-[#0a0a0f]/80 backdrop-blur-xl shadow-lg border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        
        {/* Left Section (Logo & Navigation) */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group relative">
            {/* Logo Hover Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />

            {/* Logo Container */}
            <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-3 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
              <Blocks className="size-7 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
            </div>

            {/* Title & Subtitle */}
            <div className="flex flex-col">
              <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">
                CodeCraft
              </span>
              <span className="text-xs text-blue-400/60 font-medium">
                Interactive Code Editor
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-2">
            <Link
              href="/snippets"
              className="relative group flex items-center gap-2 px-5 py-2 rounded-lg text-gray-300 bg-gray-800/50 
              hover:bg-blue-500/20 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Code2 className="w-5 h-5 relative z-10 group-hover:rotate-3 transition-transform" />
              <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
                Snippets
              </span>
            </Link>
          </nav>
        </div>

        {/* Right Section (Controls & Profile) */}
        <div className="flex items-center gap-6">
          <ThemeSelector />
          <LanguageSelector hasAccess={Boolean(convexUser?.isPro)} />

          {!convexUser?.isPro && (
            <Link
              href="/pricing"
              className="flex items-center gap-2 px-5 py-2 rounded-lg border border-amber-500/30 hover:border-amber-500/50 
              bg-gradient-to-r from-amber-500/10 to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 
              transition-all duration-300 shadow-md"
            >
              <Sparkles className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-all duration-300" />
              <span className="text-sm font-medium text-amber-400/90 hover:text-amber-300">
                Pro
              </span>
            </Link>
          )}

          <SignedIn>
            <RunButton />
          </SignedIn>

          {/* Sign In Button for Non-Authenticated Users */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="flex items-center gap-2 px-5 py-2 rounded-lg border border-blue-500/40 hover:border-blue-500/70 
                bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 
                transition-all duration-300 shadow-md hover:shadow-lg">
                <LogIn className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-all duration-300" />
                <span className="text-sm font-medium text-blue-400/90 hover:text-blue-300">
                  Sign In
                </span>
              </button>
            </SignInButton>
          </SignedOut>

          {/* Profile Section */}
          <SignedIn>
            <div className="pl-4 border-l border-gray-700">
              <HeaderProfileBtn />
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
}

export default Header;
