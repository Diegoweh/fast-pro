"use client"

import { useState } from "react"
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-orange-100 shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex-shrink-0 inline-flex items-center">
            <Image
              src="/img/home/fpLogo2.svg"
              alt="Company Logo"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-12 flex items-center space-x-8">
              <a
                href="/about"
                className="text-gray-700 hover:text-[#eb7700] px-3 py-2 text-md font-medium transition-colors duration-200"
              >
                Who we are
              </a>
              <a
                href="/bags"
                className="text-gray-700 hover:text-[#eb7700] px-3 py-2 text-md font-medium transition-colors duration-200"
              >
                Bags
              </a>
              <a
                href="/textiles"
                className="text-gray-700 hover:text-[#eb7700] px-3 py-2 text-md font-medium transition-colors duration-200"
              >
                Textiles
              </a>

              {/* Learn Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-[#eb7700] px-3 py-2 text-md font-medium transition-colors duration-200">
                  Learn
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem>
                    <a href="/features" className="w-full text-gray-700 hover:text-[#eb7700]">
                      FAST Features
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/perspectives" className="w-full text-gray-700 hover:text-[#eb7700]">
                      PRO perspectives
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/faqs" className="w-full text-gray-700 hover:text-[#eb7700]">
                      FAQs
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <a
                href="#"
                className="text-gray-700 hover:text-[#eb7700] px-3 py-2 text-md font-medium transition-colors duration-200"
              >
                Contact
              </a>

              {/* Search Button */}
              <Button
                variant="outline"
                size="sm"
                className="border-[#1f5bd3] text-[#1f5bd3] hover:bg-[#1f5bd3] hover:text-white bg-transparent"
              >
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="text-gray-700 hover:text-[#eb7700]">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-orange-100 border-t border-gray-200">
              <a
                href="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
              >
                Who we are
              </a>
              <a
                href="/bags"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
              >
                Bags
              </a>
              <a
                href="/textiles"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
              >
                Textiles
              </a>

              {/* Mobile Learn Section */}
              <div className="px-3 py-2">
                <div className="text-base font-medium text-gray-700 mb-2">Learn</div>
                <div className="pl-4 space-y-1">
                  <a
                    href="/features"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
                  >
                    FAST Features
                  </a>
                  <a
                    href="/perspectives"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
                  >
                    PRO perspectives
                  </a>
                  <a
                    href="/faqs"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
                  >
                    FAQs
                  </a>
                </div>
              </div>

              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
              >
                Contact
              </a>

              {/* Mobile Search */}
              <div className="px-3 py-2">
                <Button
                  className="w-full border-[#1f5bd3] text-[#1f5bd3] hover:bg-[#1f5bd3] hover:text-white bg-transparent"
                  variant="outline"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
