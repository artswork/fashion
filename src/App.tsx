import React, { useState } from 'react'
import { Menu, X, Instagram, Twitter, Facebook } from 'lucide-react'
import Navbar from './components/Navbar'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Fashion Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Elevate Your Style</h1>
            <p className="text-xl md:text-2xl text-white mb-8">Where Fashion Meets Innovation</p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
              Explore Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Rest of the content remains the same */}
      {/* ... */}

    </div>
  )
}

export default App