"use client";
import React, { useState, useRef, useEffect } from "react";
import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FcGoogle } from "react-icons/fc";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  const handleSearch = () => {
    if (searchText.trim()) {
      window.open(
        `https://www.google.com/search?q=${encodeURIComponent(searchText)}`,
        "_blank"
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex-1 flex items-center gap-2">
      <FcGoogle size={40} />
      <Input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleSearch}>
        <SearchIcon />
        Search
      </Button>
    </div>
  );
}
