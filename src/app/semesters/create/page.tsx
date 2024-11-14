'use client'
import createSemester from '@/libs/semesters/createSemester'
import Image from 'next/image'
import React, { useState } from 'react'

export default function CreateSemester() {
  // Primary variables for form fields
  const [year, setYear] = useState<string>('')
  const [semester, setSemester] = useState<string>('')
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [icon, setIcon] = useState<string>('/logo/Logo_Calendar.png')

  // Styling variables
  const [headerStyle, setHeaderStyle] = useState(
    'text-2xl font-semibold text-mgray-1'
  )
  const [imgStyle, setImgStyle] = useState('')
  const [typeStyle, setTypeStyle] = useState(
    'block text-sm font-medium text-mgray-2'
  )
  const [inputStyle, setInputStyle] = useState(
    'w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-mred'
  )
  const [submitStyle, setSubmitStyle] = useState(
    'w-full py-2 text-white font-semibold rounded-lg'
  )

  // Status variables
  const [isSaving, setIsSaving] = useState<boolean>(false)

  // handleSave function to handle form submission
  const handleSave = async () => {
    setIsSaving(true)
    let data = {
      year: parseInt(year),
      semester: parseInt(semester),
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
    }
    // await createSemester(data.year, data.semester, data.startDate, data.endDate)
    setIsSaving(false)
  }

  return (
    <main className='container'>
      <div className='flex h-[70vh] flex-col items-center justify-center'>
        <div className='shadow-md w-full max-w-4xl rounded-lg bg-[#FAFAFA] p-8'>
          <div className='mb-6 mt-6 flex flex-wrap items-center justify-center space-x-4 space-y-4'>
            <Image
              src={icon}
              alt='icon'
              width={40}
              height={40}
              className={`${imgStyle}`}
            />
            <h2 className={`${headerStyle}`}>Create Semester</h2>
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
              type='date'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder='Please Enter'
              className={`${inputStyle}`}
            />

            <label className={`${typeStyle}`}>End Date</label>
            <input
              type='date'
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
