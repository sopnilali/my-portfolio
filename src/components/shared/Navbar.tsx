"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import brandLogo from "@/assets/logo2.png";
import { signOut } from "next-auth/react";

type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Navbar = ({ session }: { session: UserProps | null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <nav className="bg-teal-500 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black">
          <div className="flex justify-center items-center">
            <Image src={brandLogo} width={50} height={50} alt="brand logo" />
            <p className="text-3xl font-bold ml-3">Abdul Adud</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((item, index) => (

            <Link key={index} href={`${item.href}`} className={`${pathname === `${item.href}`
                ? "text-black font-bold "
                : "text-white hover:text-gray-200 "
              }`}>
              {item.label}
            </Link>

          ))}
        </div>

        {/* Desktop Menu Right */}
        <div className="hidden md:flex space-x-6 ">
          {session?.user ? (<button onClick={()=> signOut()} className="text-white duration-200 transition-all hover:bg-orange-600 border hover:border-orange-600 rounded-full py-2 px-4 block hover:text-gray-200">
            Logout
          </button>) :<Link href="/login" className="text-white border hover:bg-teal-700 hover:border-teal-700 rounded-full py-2 px-4 hover:text-gray-200">
              Login</Link>


          }

        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-teal-500 text-white p-4">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={`${item.href}`}
              className={`block py-2 text-lg hover:text-gray-200 ${pathname === `${item.href}`
                  ? "text-black font-bold"
                  : "text-white hover:text-gray-200"
                }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>

          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;