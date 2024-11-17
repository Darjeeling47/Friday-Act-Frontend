'use client'

import Image from 'next/image';
// Import react
import React, { useState } from 'react';

// Import components (if any)

// Import util (if any)

// Import icon
// import { FaCalendarAlt } from 'react-icons/fa';

// API (if any)

// require (if any)

export default function CreateSemester() {
  // Primary variables for form fields
  const [year, setYear] = useState<string>('');
  const [semester, setSemester] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [icon, setIcon] = useState<string>('/logo/Logo_Calendar.png')

  // Styling variables
  const [headerStyle, setHeaderStyle] = useState('text-2xl font-semibold text-mgray-1')
  const [imgStyle, setImgStyle] = useState('ml-4 mr-4')
	const [typeStyle, setTypeStyle] = useState('block text-sm font-medium text-mgray-2')
  const [inputStyle, setInputStyle] = useState('w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-mred')
  const [submitStyle, setSubmitStyle] = useState('w-full py-2 text-white font-semibold rounded-lg')
  

  // Status variables
  const [isSaving, setIsSaving] = useState<boolean>(false);

  // handleSave function to handle form submission
  const handleSave = () => {
    setIsSaving(true);
    console.log('Saving semester:', { year, semester, startDate, endDate });
    setIsSaving(false);
  };

  return (
    <main className='container'>
      <div className='flex h-[50vh] min-h-screen flex-col items-center justify-center'>
        <div className='shadow-md w-full max-w-4xl rounded-lg bg-[#FAFAFA] p-8'>
          <div className='mb-6 flex items-center justify-center'>
            <Image
              src={icon}
              alt='icon'
              width={40}
              height={40}
              className={`${imgStyle}`}
            />
            <h2 className={`${headerStyle}`}>Edit Semester</h2>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSave()
            }}>
            <label className={`${typeStyle}`}>Year</label>
            <input
              type='text'
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder='Please Enter'
              className={`${inputStyle}`}
            />

            <label className={`${typeStyle}`}>Semester</label>
            <input
              type='text'
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              placeholder='Please Enter'
              className={`${inputStyle}`}
            />

            <label className={`${typeStyle}`}>Start Date</label>
            <input
              type='text'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder='Please Enter'
              className={`${inputStyle}`}
            />

            <label className={`${typeStyle}`}>End Date</label>
            <input
              type='text'
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder='Please Enter'
              className={`${inputStyle}`}
            />

            <button
              type='submit'
              className={`${isSaving ? 'bg-red-300' : 'bg-vidva'} ${submitStyle}`}
              disabled={isSaving}>
              {isSaving ? 'Saving...' : 'Save'}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
