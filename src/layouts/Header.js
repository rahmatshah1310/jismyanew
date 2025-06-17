"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header>
            <nav className="fixed top-0 w-full bg-white shadow-md z-50">
                <div className="container mx-auto px-5 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <Image src="/logo.svg" alt="Jismya.com Logo" width={120} height={40} className="object-contain" priority />
                    </div>

                    {/* Hamburger Icon */}
                    <button
                        className="md:hidden text-2xl text-gray-700 focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="#home" className="text-gray-700 hover:text-pink-500 transition-colors">Home</Link>
                        <Link href="#categories" className="text-gray-700 hover:text-pink-500 transition-colors">Categories</Link>
                        <Link href="#new-arrivals" className="text-gray-700 hover:text-pink-500 transition-colors">New Arrivals</Link>
                        <Link href="#sale" className="text-gray-700 hover:text-pink-500 transition-colors">Sale</Link>
                        <Link href="#about" className="text-gray-700 hover:text-pink-500 transition-colors">About Us</Link>
                        <Link href="#return-policy" className="text-gray-700 hover:text-pink-500 transition-colors">Return Policy</Link>
                    </div>

                    <div className="flex space-x-4">
                        <Link href="#search" className="text-gray-700 hover:text-pink-500 transition-colors">
                            <i className="fas fa-search"></i>
                        </Link>
                        <Link href="#account" className="text-gray-700 hover:text-pink-500 transition-colors">
                            <i className="fas fa-user"></i>
                        </Link>
                        <Link href="#cart" className="text-gray-700 hover:text-pink-500 transition-colors">
                            <i className="fas fa-shopping-cart"></i>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden bg-white shadow-lg px-5 py-4 space-y-4">
                        <Link href="#home" className="block text-gray-700 hover:text-pink-500 transition-colors">Home</Link>
                        <Link href="#categories" className="block text-gray-700 hover:text-pink-500 transition-colors">Categories</Link>
                        <Link href="#new-arrivals" className="block text-gray-700 hover:text-pink-500 transition-colors">New Arrivals</Link>
                        <Link href="#sale" className="block text-gray-700 hover:text-pink-500 transition-colors">Sale</Link>
                        <Link href="#about" className="block text-gray-700 hover:text-pink-500 transition-colors">About Us</Link>
                        <Link href="#return-policy" className="block text-gray-700 hover:text-pink-500 transition-colors">Return Policy</Link>
                    </div>
                )}
            </nav>
        </header>
    )
}
export default Header;