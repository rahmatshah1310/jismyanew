"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import InputField from '@/components/ui/InputField'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header>
            <nav className="fixed top-0 w-full bg-white shadow-md z-50">
                <div className="container mx-auto px-5 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <Image src="/logo.svg" alt="Jismya.com Logo" width={120} height={40} className="object-contain" priority />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="text-pink-500 hover:text-pink-700 transition-colors">Home</Link>
                        <Link href="#categories" className="text-pink-500 hover:text-pink-700 transition-colors">Categories</Link>
                        <Link href="#new-arrivals" className="text-pink-500 hover:text-pink-700 transition-colors">New Arrivals</Link>
                        <Link href="#sale" className="text-pink-500 hover:text-pink-700 transition-colors">Sale</Link>
                        <Link href="#about" className="text-pink-500 hover:text-pink-700 transition-colors">About Us</Link>
                        <Link href="#return-policy" className="text-pink-500 hover:text-pink-700 transition-colors">Return Policy</Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link href="#search" className="text-pink-500 hover:text-pink-700 transition-colors">
                            <InputField
                                // value={search}
                                // onChange={e => setSearch(e.target.value)}
                                placeholder="Search products"
                                className="flex-1 px-2 py-1 border border-[var(--color-gray-300)] rounded-md focus:outline-none focus:ring-2 focus:ring-pink-700"
                            />

                            {/* <i className="fas fa-search"></i> */}
                        </Link>
                        <Link href="#account" className="text-pink-500 hover:text-pink-700 transition-colors">
                            <i className="fas fa-user"></i>
                        </Link>
                        <Link href="#cart" className="text-pink-500 hover:text-pink-700 transition-colors">
                            <i className="fas fa-shopping-cart"></i>
                        </Link>
                        {/* Hamburger Icon */}
                        <button
                            className="md:hidden text-2xl w-2 text-pink-500 focus:outline-none relative"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                        </button>
                    </div>
                </div>
            </nav>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-12 right-0 md:hidden bg-amber-50 shadow-lg px-5 py-4 space-y-4 w-36 z-50">
                    <Link href="#home" className="block text-pink-500 hover:text-pink-700 transition-colors">Home</Link>
                    <Link href="#categories" className="block text-pink-500 hover:text-pink-700 transition-colors">Categories</Link>
                    <Link href="#new-arrivals" className="block text-pink-500 hover:text-pink-700 transition-colors">New Arrivals</Link>
                    <Link href="#sale" className="block text-pink-500 hover:text-pink-700 transition-colors">Sale</Link>
                    <Link href="#about" className="block text-pink-500 hover:text-pink-700 transition-colors">About Us</Link>
                    <Link href="#return-policy" className="block text-pink-500 hover:text-pink-700 transition-colors">Return Policy</Link>
                </div>
            )}

        </header>
    )
}
export default Header;