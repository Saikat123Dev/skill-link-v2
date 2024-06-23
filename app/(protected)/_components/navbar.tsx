"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";
import SearchBar from "@/components/ui/search-bar";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    // Add logic here to handle search functionality
  };

  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-full shadow-sm">
     
      <div className="flex items-center justify-between w-full space-x-4">
        {/* Use your SearchBar component here */}
        <SearchBar/>
        
        {/* Use your UserButton component here */}
        <UserButton />
      </div>
    </nav>
  );
};
