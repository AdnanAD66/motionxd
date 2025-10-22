import React from 'react'

function Sidebar() {
return (
    <aside className="w-64 h-screen p-4 fixed top-0 left-0 flex flex-col justify-between bg-white shadow-lg z-50">
        <h2 className="text-4xl font-bold mb-4 text-orange-600">MOTIONXD</h2>
        <nav>
            <a href="#" className="block font-semibold py-2 px-4 rounded hover:bg-gray-700">What We Do</a>
            <a href="#" className="block font-semibold py-2 px-4 rounded hover:bg-gray-700">Projects</a>
            <a href="#" className="block font-semibold py-2 px-4 rounded hover:bg-gray-700">How we work</a>
            <a href="#" className="block font-semibold py-2 px-4 rounded hover:bg-gray-700">Pricing</a>
            <a href="#" className="block font-semibold py-2 px-4 rounded hover:bg-gray-700">Faq</a>
        </nav>

        {/* Social links */}
        <div className="flex flex-col mt-8">
            <h2 className="text-2xl font-bold mb-4">Socials</h2>
            <a href="#" className="block py-0.5 px-4 rounded hover:bg-gray-700">Facebook</a>
            <a href="#" className="block py-0.5 px-4 rounded hover:bg-gray-700">Twitter</a>
            <a href="#" className="block py-0.5 px-4 rounded hover:bg-gray-700">LinkedIn</a>
            <a href="#" className="block py-0.5 px-4 rounded hover:bg-gray-700">Instagram</a>
        </div>

        <div>
            {/* Email with link */}
            <a href="mailto:hr@itcorp.com" className="block mt-8 font-semibold py-2 px-4 rounded hover:bg-gray-700">hr@itcorp.com</a>
            <button type="button" className="flex items-center justify-center mt-4 py-2 px-4 bg-orange-600 text-white font-semibold rounded-[2rem] hover:bg-orange-700">
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
