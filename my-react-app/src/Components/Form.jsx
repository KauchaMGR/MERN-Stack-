import React, { useState } from 'react'

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        hobbies: []
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        alert(
            `Name: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.password}\nHobbies: ${formData.hobbies.join(', ') || 'None'}`
        )
        console.log('Form submitted:', formData)
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        if (type === 'checkbox') {
            setFormData((prev) => {
                const hobbies = checked
                    ? [...prev.hobbies, value]
                    : prev.hobbies.filter((item) => item !== value)

                return { ...prev, [name]: hobbies }
            })
            return
        }

        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <div className="mt-10">
            <form onSubmit={handleSubmit} className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block font-semibold text-gray-700">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block font-semibold text-gray-700">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="mb-2 block font-semibold text-gray-700">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="mb-2 block font-semibold text-gray-700">Hobbies:</label>

                    <div className="space-y-2">
                        {['Reading', 'Traveling', 'Coding'].map((hobby) => (
                            <label key={hobby} className="flex items-center gap-2 text-gray-700">
                                <input
                                    type="checkbox"
                                    name="hobbies"
                                    value={hobby}
                                    checked={formData.hobbies.includes(hobby)}
                                    onChange={handleChange}
                                />
                                {hobby}
                            </label>
                        ))}
                    </div>
                </div>

                <button
                    type="submit"
                    className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form
