'use client'

import { useState } from 'react'

const formSections = [
  { id: 'basic', label: 'Basic Details' },
  { id: 'guardian', label: 'Guardian Details' },
  { id: 'investor', label: 'Investor Address' },
  { id: 'pan', label: 'PAN & Bank Details' },
]

export default function DetailForm() {
  const [activeSection, setActiveSection] = useState('basic')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    // Add fields for other sections
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  const renderFormSection = () => {
    switch (activeSection) {
      case 'basic':
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                className="border p-2 rounded"
              />
            </div>
            <div className="mt-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>
            {/* Add more basic details fields */}
          </>
        )
      case 'guardian':
        return (
          <>
            <input
              type="text"
              name="guardianName"
              placeholder="Guardian Name"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            {/* Add more guardian details fields */}
          </>
        )
      // Add cases for 'investor' and 'pan' sections
      default:
        return null
    }
  }

  return (
    <div className=" max-w-screen-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex mb-6">
        {formSections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`mr-4 pb-2 ${
              activeSection === section.id
                ? 'border-b-2 border-blueTheme text-blueTheme'
                : 'text-gray-500'
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        {renderFormSection()}
        <button
          type="submit"
          className="mt-6 bg-blueTheme text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save & Continue
        </button>
      </form>
    </div>
  )
}