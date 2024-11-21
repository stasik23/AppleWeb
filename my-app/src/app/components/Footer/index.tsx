import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 p-6">
      <div className="flex flex-wrap justify-between">
        <div className="flex-1 m-2">
          <h2 className="text-lg font-semibold mb-2">Shop and Learn</h2>
          <ul className="list-none p-0">
            <li className="mb-1">Store</li>
            <li className="mb-1">Mac</li>
            <li className="mb-1">iPad</li>
            <li className="mb-1">iPhone</li>
            <li className="mb-1">Watch</li>
            <li className="mb-1">AirPods</li>
            <li className="mb-1">TV & Home</li>
            <li className="mb-1">AirTag</li>
            <li className="mb-1">Accessories</li>
            <li className="mb-1">Gift Cards</li>
          </ul>
        </div>
        <div className="flex-1 m-2">
          <h2 className="text-lg font-semibold mb-2">Services</h2>
          <ul className="list-none p-0">
            <li className="mb-1">Apple Music</li>
            <li className="mb-1">Apple TV+</li>
            <li className="mb-1">Apple Fitness+</li>
            <li className="mb-1">Apple News+</li>
            <li className="mb-1">Apple Arcade</li>
            <li className="mb-1">iCloud</li>
            <li className="mb-1">Apple One</li>
            <li className="mb-1">Apple Card</li>
            <li className="mb-1">Apple Books</li>
            <li className="mb-1">Apple Podcasts</li>
            <li className="mb-1">App Store</li>
          </ul>
        </div>
        <div className="flex-1 m-2">
          <h2 className="text-lg font-semibold mb-2">Account</h2>
          <ul className="list-none p-0">
            <li className="mb-1">Manage Your Apple ID</li>
            <li className="mb-1">Apple Store Account</li>
            <li className="mb-1">iCloud.com</li>
          </ul>
        </div>
      </div>
      <div className="w-full text-center mt-4">
        <p className="text-gray-600 text-sm mb-2">
          More ways to shop: <a href="#" className="text-blue-600">Find an Apple Store</a> or <a href="#" className="text-blue-600">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </p>
        <p className="text-gray-600 text-sm">Copyright © 2022 Apple Inc. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-gray-600 text-sm">Privacy Policy</a>
          <span className="text-gray-600 text-sm">|</span>
          <a href="#" className="text-gray-600 text-sm">Terms of Use</a>
          <span className="text-gray-600 text-sm">|</span>
          <a href="#" className="text-gray-600 text-sm">Sales and Refunds</a>
          <span className="text-gray-600 text-sm">|</span>
          <a href="#" className="text-gray-600 text-sm">Legal</a>
          <span className="text-gray-600 text-sm">|</span>
          <a href="#" className="text-gray-600 text-sm">Site Map</a>
        </div>
        <p className="text-gray-600 text-sm mt-2">United States</p>
      </div>
    </footer>
  )
}