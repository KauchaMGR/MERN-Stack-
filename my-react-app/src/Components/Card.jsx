import React from 'react'

const Card = () => {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition duration-300 hover:shadow-lg">
            <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
                alt="my photo"
                className="h-52 w-full object-cover"
            />

            <div className="space-y-3 p-5">
                <h2 className="text-xl font-semibold text-slate-800">
                    Name: <span className="text-indigo-600">John Doe</span>
                </h2>
                <p className="text-sm leading-6 text-slate-600">
                    This is a simple card component designed for a clean, modern layout.
                </p>
                <button className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700">
                    View Profile
                </button>
            </div>
        </div>
    )
}

export default Card
