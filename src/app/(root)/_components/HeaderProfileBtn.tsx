"use client";

import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { LogIn, User } from "lucide-react";

function HeaderProfileBtn() {
  return (
    <>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="Profile"
            labelIcon={<User className="size-4" />}
            href="/profile"
          />
        </UserButton.MenuItems>
      </UserButton>
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
    </>
  );
}
export default HeaderProfileBtn;