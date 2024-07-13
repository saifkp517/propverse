'use client'

import { useState } from 'react'
import axios from 'axios'
import { useSession } from 'next-auth/react'

const formSections = [
  { id: 'basic', label: 'Basic Details' },
  { id: 'guardian', label: 'Guardian Details' },
  { id: 'investor', label: 'Investor Address' },
  { id: 'pan', label: 'PAN & Bank Details' },
]

export default function DetailForm() {

  const [error, setError] = useState("");
  const [uploadImages, setUploadImages] = useState<File[]>([]);
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    window.location.href = "/login"
  }

  const [activeSection, setActiveSection] = useState('basic')

  const [previewData, setPreviewData] = useState({
    guardian_panfile: '',
    guardian_address_proof_file: '',
    address_proof_file: '',
    pan_file: '',
    bankstatement: '',
  })

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

      // guardian details
      guardian_pan_name: '',
      guardian_pan_number: '',
      guardian_panfile: '',
      guardian_country: '',
      guardian_address_proof_type: '',
      guardian_document_number: '',
      guardian_address_proof_file: '',

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

  const handleImamgesUpload = async () => {
    const imageFormData = new FormData();

    for (let i = 0; i < uploadImages.length; i++) {
      imageFormData.append('files', uploadImages[i]);
    }

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/photos/upload`, imageFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })
    } catch (err) {
      console.log(err)
    }

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    for(let key in formData) {
      if(formData[key].trim() === '') {
        setError(`${key} is required`)
        throw new Error(`${key} is required`);
      }
    }

    
    // Handle form submission
    console.log(formData)

    try {

      await handleImamgesUpload();

      const updateKYC = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/add-investor-kyc`, {
        investorid: session.userId,
        ...formData
      })
      if (updateKYC) {
        console.log(updateKYC)
        alert("Success")
      }

    } catch (err) {
      console.log(err)
    }
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
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="fathers_name"
              placeholder="Father's Name"
              value={formData.fathers_name}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="profession"
              placeholder="Profession"
              value={formData.profession}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="organization"
              placeholder="Organization"
              value={formData.organization}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="residential_status"
              placeholder="Residential Status"
              value={formData.residential_status}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="dob"
              placeholder="Date of Birth (DD/MM/YYYY)"
              value={formData.dob}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              value={formData.gender}
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
              name="guardian_pan_name"
              placeholder="guardian PAN Name"
              value={formData.guardian_pan_name}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="guardian_pan_number"
              placeholder="guardian PAN Number"
              value={formData.guardian_pan_number}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <label className='text-xs my-2'>Guardian Pan File</label>
            <input
              type="file"
              onChange={(e) => {
                handleChange(e);
                // Preview logic for guardian_panfile
                const file = e.target.files[0];
                if (file) {
                  setUploadImages([...uploadImages, file])
                  const previewUrl = URL.createObjectURL(file);
                  setPreviewData((prevData) => ({
                    ...prevData,
                    guardian_panfile: previewUrl
                  }))
                }
              }}
              name="guardian_panfile"
              className="border p-2 rounded w-full mb-4"
            />
            {previewData.guardian_panfile && (
              <img
                src={previewData.guardian_panfile}
                alt="Guardian PAN Preview"
                className="border p-2 rounded w-1/3 mb-4"
              />
            )}
            <input
              type="text"
              name="guardian_country"
              placeholder="guardian Country"
              value={formData.guardian_country}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="guardian_address_proof_type"
              placeholder="guardian Address Proof Type"
              value={formData.guardian_address_proof_type}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="guardian_document_number"
              placeholder="guardian Document Number"
              value={formData.guardian_document_number}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <label className='text-xs my-2'>Guardian Address Proof File</label>
            <input
              type="file"
              onChange={(e) => {
                handleChange(e);
                // Preview logic for guardian_panfile
                const file = e.target.files[0];
                if (file) {
                  setUploadImages([...uploadImages, file])
                  const previewUrl = URL.createObjectURL(file);
                  setPreviewData((prevData) => ({
                    ...prevData,
                    guardian_address_proof_file: previewUrl
                  }))
                }
              }}
              name="guardian_address_proof_file"
              className="border p-2 rounded w-full mb-4"
            />
            {previewData.guardian_address_proof_file && (
              <img
                src={previewData.guardian_address_proof_file}
                alt="Guardian PAN Preview"
                className="border p-2 rounded w-1/3 mb-4"
              />
            )}
          </>
        );
      case 'investor':
        return (
          <>
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="fulladdress_string"
              placeholder="Full Address"
              value={formData.fulladdress_string}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="landmark"
              placeholder="Landmark"
              value={formData.landmark}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="address_proof_type"
              placeholder="Address Proof Type"
              value={formData.address_proof_type}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="document_number"
              placeholder="Document Number"
              value={formData.document_number}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <label className='text-xs my-2'>Address Proof File</label>
            <input
              type="file"
              onChange={(e) => {
                handleChange(e);
                // Preview logic for guardian_panfile
                const file = e.target.files[0];
                if (file) {
                  setUploadImages([...uploadImages, file])
                  const previewUrl = URL.createObjectURL(file);
                  setPreviewData((prevData) => ({
                    ...prevData,
                    address_proof_file: previewUrl
                  }))
                }
              }}
              name="address_proof_file"
              className="border p-2 rounded w-full mb-4"
            />
            {previewData.address_proof_file && (
              <img
                src={previewData.address_proof_file}
                alt="Guardian PAN Preview"
                className="border p-2 rounded w-1/3 mb-4"
              />
            )}
          </>
        );


      case 'pan':
        return (
          <>
            <input
              type="text"
              name="pan_number"
              placeholder="PAN Number"
              value={formData.pan_number}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="pan_name"
              placeholder="PAN Holder Name"
              value={formData.pan_name}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <label className='text-xs my-2'>Investor's Pan File</label>
            <input
              type="file"
              onChange={(e) => {
                handleChange(e);
                // Preview logic for guardian_panfile
                const file = e.target.files[0];
                if (file) {
                  setUploadImages([...uploadImages, file])
                  const previewUrl = URL.createObjectURL(file);
                  setPreviewData((prevData) => ({
                    ...prevData,
                    pan_file: previewUrl
                  }))
                }
              }}
              name="pan_file"
              className="border p-2 rounded w-full mb-4"
            />
            {previewData.pan_file && (
              <img
                src={previewData.pan_file}
                alt="Guardian PAN Preview"
                className="border p-2 rounded w-1/3 mb-4"
              />
            )}
            <input
              type="text"
              name="bank"
              placeholder="Bank Name"
              value={formData.bank}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="bank_account_type"
              placeholder="Account Type"
              value={formData.bank_account_type}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="bank_account_number"
              placeholder="Account Number"
              value={formData.bank_account_number}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="text"
              name="ifsc_code"
              placeholder="IFSC Code"
              value={formData.ifsc_code}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
            />
            <label className='text-xs my-2'>Cancelled Cheque/Bank Statement</label>
            <input
              type="file"
              onChange={(e) => {
                handleChange(e);
                // Preview logic for guardian_panfile
                const file = e.target.files[0];
                if (file) {
                  setUploadImages([...uploadImages, file])
                  const previewUrl = URL.createObjectURL(file);
                  setPreviewData((prevData) => ({
                    ...prevData,
                    bankstatement: previewUrl
                  }))
                }
              }}
              name="bankstatement"
              className="border p-2 rounded w-full mb-4"
            />
            {previewData.bankstatement && (
              <img
                src={previewData.bankstatement}
                alt="Guardian PAN Preview"
                className="border p-2 rounded w-1/3 mb-4"
              />
            )}
          </>
        );


      // Add cases for 'investor' and 'pan' sections
      default:
        return null
    }
  }

  return (
    <div className=" max-w-screen-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className='font-bold text-red-500'>{error}</h1>
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