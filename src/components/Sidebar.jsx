// src/components/Sidebar.jsx
import React from 'react'

function Sidebar() {
  return (
    <aside className="w-64 h-screen p-4 fixed top-0 left-0 flex flex-col justify-between bg-white shadow-lg z-20">
      <h2 className="text-3xl font-bold mb-4 text-primary">IT CORP INC</h2>
      <nav>
        <a href="#" className="block font-semibold py-2 px-4 rounded hover:bg-gray-100">What We Do</a>
        <a href="#" className="block font-semibold py-2 px-4 rounded hover:bg-gray-100">Projects</a>
        <a href="#" className="block font-semibold py-2 px-4 rounded hover:bg-gray-100">How we work</a>
        <a href="#" className="block font-semibold py-2 px-4 rounded hover:bg-gray-100">Pricing</a>
        <a href="#" className="block font-semibold py-2 px-4 rounded hover:bg-gray-100">Faq</a>
      </nav>

      {/* Social links */}
      <div className="flex flex-col mt-8">
        <h2 className="text-2xl font-bold mb-4">Socials</h2>
        <a href="#" className="block py-0.5 px-4 rounded hover:bg-gray-100">Facebook</a>
        <a href="#" className="block py-0.5 px-4 rounded hover:bg-gray-100">Twitter</a>
        <a href="#" className="block py-0.5 px-4 rounded hover:bg-gray-100">LinkedIn</a>
        <a href="#" className="block py-0.5 px-4 rounded hover:bg-gray-100">Instagram</a>
      </div>

      <div>
        <a href="mailto:hr@itcorp.com" className="block mt-8 font-semibold py-2 px-4 rounded hover:bg-gray-100">hr@itcorp.com</a>
        <button type="button" className="flex items-center justify-center mt-4 py-2 px-4 bg-primary text-white font-semibold rounded-[2rem] hover:bg-orange-700">
          Get Your Video
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
