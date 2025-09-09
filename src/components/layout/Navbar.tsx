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
        <div className="flex justify-end md:justify-center items-center h-16">
          {/* Logo */}
          {/* <div className="flex-shrink-0">
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
          </div> */}

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-12 flex items-center space-x-8">
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#eb7700] px-3 py-2 text-md font-medium transition-colors duration-200"
              >
                Who we are
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-[#eb7700] px-3 py-2 text-md font-medium transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                href="/bags"
                className="text-gray-700 hover:text-[#eb7700] px-3 py-2 text-md font-medium transition-colors duration-200"
              >
                Bags
              </Link>
              <Link
                href="/textiles"
                className="text-gray-700 hover:text-[#eb7700] px-3 py-2 text-md font-medium transition-colors duration-200"
              >
                Textiles
              </Link>

              {/* Learn Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-[#eb7700] px-3 py-2 text-md font-medium transition-colors duration-200">
                  Learn
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem>
                    <Link href="/features" className="w-full text-gray-700 hover:text-[#eb7700]">
                      FAST Features
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/perspectives" className="w-full text-gray-700 hover:text-[#eb7700]">
                      PRO Perspectives
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/faqs" className="w-full text-gray-700 hover:text-[#eb7700]">
                      FAQs
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#eb7700] px-3 py-2 text-md font-medium transition-colors duration-200"
              >
                Contact
              </Link>

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
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
              >
                Who we are
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-[#eb7700] px-3 py-2 text-md font-medium transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                href="/bags"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
              >
                Bags
              </Link>
              <Link
                href="/textiles"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
              >
                Textiles
              </Link>

              {/* Mobile Learn Section */}
              <div className="px-3 py-2">
                <div className="text-base font-medium text-gray-700 mb-2">Learn</div>
                <div className="pl-4 space-y-1">
                  <Link
                    href="/features"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
                  >
                    FAST Features
                  </Link>
                  <Link
                    href="/perspectives"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
                  >
                    PRO Perspectives
                  </Link>
                  <Link
                    href="/faqs"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
                  >
                    FAQs
                  </Link>
                </div>
              </div>

              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
              >
                Contact
              </Link>

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
