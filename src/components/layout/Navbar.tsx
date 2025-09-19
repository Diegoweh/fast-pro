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
  
  const [isBagsOpen, setIsBagsOpen] = useState(false)

  const [isTextilesOpen, setIsTextilesOpen] = useState(false)


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
                href="/"
                className="text-gray-700 hover:text-[#eb7700] px-3 py-2 text-md font-medium transition-colors duration-200"
              >
                Home
              </Link>
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


              <div className="flex items-center">
                <Link
                  href="/bags"
                  className="text-gray-700 hover:text-[#eb7700] px-3 py-2 text-md font-medium transition-colors duration-200"
                >
                  Bags
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center px-1 py-2 text-gray-700 hover:text-[#eb7700]">
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuItem>
                      <Link href="/bags/two-strap" className="w-full text-gray-700 hover:text-[#eb7700]">
                        Two Strap Bag
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/bags/trash-ton" className="w-full text-gray-700 hover:text-[#eb7700]">
                        Trash-Ton Container
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/bags/liquid-solid" className="w-full text-gray-700 hover:text-[#eb7700]">
                        Liquid-Solid Separator
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/bags/four-panel" className="w-full text-gray-700 hover:text-[#eb7700]">
                        Standard Four Panel Bag
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/bags/construction" className="w-full text-gray-700 hover:text-[#eb7700]">
                        Construction Bag
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/bags/commodity-fibc" className="w-full text-gray-700 hover:text-[#eb7700]">
                        Commodity FIBC
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="flex items-center">
              <Link
                href="/textiles"
                className="text-gray-700 hover:text-[#eb7700] px-3 py-2 text-md font-medium transition-colors duration-200"
              >
                Textiles
              </Link>

              <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center px-1 py-2 text-gray-700 hover:text-[#eb7700]">
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuItem>
                      <Link href="/textiles/fibc-fabrics" className="w-full text-gray-700 hover:text-[#eb7700]">
                        FIBC Fabrics
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/textiles/carpet-backing" className="w-full text-gray-700 hover:text-[#eb7700]">
                        Carpet Backing
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/textiles/geotextiles" className="w-full text-gray-700 hover:text-[#eb7700]">
                        GeoTextiles
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/textiles/cotton-bale" className="w-full text-gray-700 hover:text-[#eb7700]">
                        Cotton Bale
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/textiles/leno-fabric" className="w-full text-gray-700 hover:text-[#eb7700]">
                        Leno Fabric
                      </Link>
                    </DropdownMenuItem>                    
                  </DropdownMenuContent>
                </DropdownMenu>

              </div>              

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
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
              >
                Who we are
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
              >
                Services
              </Link>

              {/* Mobile Bags Section */}
              <div className="px-3 py-2">
                <div className="flex justify-between items-center">
                  <Link
                    href="/bags"
                    className="text-base font-medium text-gray-700 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
                  >
                    Bags
                  </Link>
                  {/* Botón para expandir/cerrar */}
                  <button
                    onClick={() => setIsBagsOpen(!isBagsOpen)}
                    className="text-gray-700 hover:text-[#eb7700] focus:outline-none"
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform ${isBagsOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>

                {isBagsOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    <Link
                      href="/bags/two-strap"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
                    >
                      Two Strap Bag
                    </Link>
                    <Link
                      href="/bags/trash-ton"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
                    >
                      Trash-Ton Container
                    </Link>
                    <Link
                      href="/bags/liquid-solid"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
                    >
                      Liquid-Solid Separator
                    </Link>
                    <Link
                      href="/bags/four-panel"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
                    >
                      Standard Four Panel Bag
                    </Link>
                    <Link
                      href="/bags/construction"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
                    >
                      Construction Bag
                    </Link>
                    <Link
                      href="/bags/commodity-fibc"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
                    >
                      Commodity FIBC
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Textiles Section */}
              <div className="py-2">
                <div className="flex px-3 py-2 justify-between items-center">
                  <Link
                    href="/textiles"
                    className="block  text-base font-medium text-gray-700 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
                  >
                    Textiles
                  </Link>
                  {/* Botón para expandir/cerrar */}
                  <button
                      onClick={() => setIsTextilesOpen(!isTextilesOpen)}
                      className="text-gray-700 hover:text-[#eb7700] focus:outline-none"
                    >
                      <ChevronDown className={`h-4 w-4 transition-transform ${isTextilesOpen ? "rotate-180" : ""}`} />
                    </button>

                </div>

                {isTextilesOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    <Link
                      href="/textiles/fibc-fabrics"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
                    >
                      FIBC Fabrics
                    </Link>
                    <Link
                      href="/textiles/carpet-backing"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
                    >
                      Carpet Backing
                    </Link>
                    <Link
                      href="/textiles/geotextiles"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
                    >
                      GeoTextiles
                    </Link>
                    <Link
                      href="/textiles/cotton-bale"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
                    >
                      Cotton Bale
                    </Link>
                    <Link
                      href="/textiles/leno-fabric"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-[#eb7700] hover:bg-gray-50 rounded-md"
                    >
                      Leno Fabric
                    </Link>                    
                  </div>
                )}

              </div>

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
