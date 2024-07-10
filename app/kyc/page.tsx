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
  const [formData, setFormData] = useState(
    {
      // basic details
      name: '',
      fathers_name: '',
      profession: '',
      organization: '',
      residential_status: '',
      dob: '',
      gender: '',

      // Guardian details
      gaurdian_pan_name: '',
      gaurdian_pan_number: '',
      gaurdian_panfile: '',
      gaurdian_country: '',
      gaurdian_address_proof_type: '',
      gaurdian_document_number: '',
      gaurdian_address_proof_file: '',

      // Investor address
      country: '',
      pincode: '',
      fulladdress_string: '',
      landmark: '',
      state: '',
      city: '',
      address_proof_type: '',
      document_number: '',
      address_proof_file: '',

      // User's PAN and bank details
      pan_number: '',
      pan_name: '',
      pan_file: '',
      bank: '',
      bank_account_type: '',
      bank_account_number: '',
      ifsc_code: '',
      bankstatement: ''
    }

  )

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
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="fathers_name"
              placeholder="Father's Name"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="profession"
              placeholder="Profession"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="organization"
              placeholder="Organization"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="residential_status"
              placeholder="Residential Status"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="dob"
              placeholder="Date of Birth (DD/MM/YYYY)"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
          </>
        );

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
            <input
              type="text"
              name="guardianPanNumber"
              placeholder="Guardian PAN Number"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="file"
              name="guardianPanFile"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="guardianCountry"
              placeholder="Guardian Country"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="guardianAddressProofType"
              placeholder="Guardian Address Proof Type"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="guardianDocumentNumber"
              placeholder="Guardian Document Number"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="file"
              name="guardianAddressProofFile"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
          </>
        );
      case 'investor':
        return (
          <>
            <input
              type="text"
              name="country"
              placeholder="Country"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="fulladdress_string"
              placeholder="Full Address"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="landmark"
              placeholder="Landmark"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="address_proof_type"
              placeholder="Address Proof Type"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="document_number"
              placeholder="Document Number"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="file"
              name="address_proof_file"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
          </>
        );

      case 'pan':
        return (
          <>
            <input
              type="text"
              name="pan_number"
              placeholder="PAN Number"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="pan_name"
              placeholder="PAN Holder Name"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="file"
              name="pan_file"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="bank"
              placeholder="Bank Name"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="bank_account_type"
              placeholder="Account Type"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="bank_account_number"
              placeholder="Account Number"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="ifsc_code"
              placeholder="IFSC Code"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="file"
              name="bankstatement"
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
          </>
        );


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
            className={`mr-4 pb-2 ${activeSection === section.id
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