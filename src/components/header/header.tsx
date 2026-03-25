"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import logo from "@/../public/assets/images/logo/logo.png";
import Image from "next/image";
import LanguageSwitcher from "@/components/language-switcher/LanguageSwitcher";
import DesktopNav from "@/components/header/DesktopNav";
import MobileNav from "@/components/header/MobileNav";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="overflow-hidden bg-white px-10 py-1">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 py-10">
        <Link href="/" className="pt-4">
          <Image src={logo} width={300} alt="logo" />
        </Link>
        <DesktopNav />
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
        </div>
        <button
          className="lg:hidden p-2 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-8 w-8 text-gray-600" />
          ) : (
            <Menu className="h-8 w-8 text-gray-600" />
          )}
        </button>
      </div>
      <MobileNav mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    </header>
  );
};

export default Header;
