import React from 'react'
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

export const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
                <FaApple className="h-8 w-8 mr-2" />
                <ul className="flex space-x-4">
                    <li>Store</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Watch</li>
                    <li>AirPods</li>
                </ul>
            </div>
            <div className="flex items-center space-x-4">
                <button className="focus:outline-none">
                <CiSearch />
                </button>
                <button className="focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M3 12h18M3 21h18" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}
