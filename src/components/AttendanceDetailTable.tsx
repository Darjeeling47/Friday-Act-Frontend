import React from 'react';

interface AttendanceDetailTableProps {
  company: string;
  date: string;
  timestamp: string;
  status: string;
  applydate: string;
}

export default function AttendanceDetailTable({
  company,
  date,
  timestamp,
  status,
  applydate
}: AttendanceDetailTableProps) {
  return (
    <div className='w-full h-auto text-xl max-md:text-base'>
        <div className='grid grid-cols-4 max-md:grid-cols-6 h-16 max-md:h-14 items-center border-b border-mgray-3'>
            <div className='col-span-1 max-md:col-span-2 font-medium'>Company</div>
            <div className='col-span-3 max-md:col-span-4 font-normal'>{company}</div>
        </div>
        <div className='grid grid-cols-4 max-md:grid-cols-6 h-16 max-md:h-14 items-center border-b border-mgray-3'>
            <div className='col-span-1 max-md:col-span-2 font-medium'>Date</div>
            <div className='col-span-3 max-md:col-span-4 font-normal'>{date}</div>
        </div>
        <div className='grid grid-cols-4 max-md:grid-cols-6 h-16 max-md:h-14 items-center border-b border-mgray-3'>
            <div className='col-span-1 max-md:col-span-2 font-medium'>Timestamp</div>
            <div className='col-span-3 max-md:col-span-4 font-normal'>{timestamp}</div>
        </div>
        <div className='grid grid-cols-4 max-md:grid-cols-6 h-16 max-md:h-14 items-center border-b border-mgray-3'>
            <div className='col-span-1 max-md:col-span-2 font-medium'>Status</div>
            <div className='col-span-3 max-md:col-span-4 font-normal'>{status}</div>
        </div>
        <div className='grid grid-cols-4 max-md:grid-cols-6 h-16 max-md:h-14 items-center'>
            <div className='col-span-1 max-md:col-span-2 font-medium'>Apply Date</div>
            <div className='col-span-3 max-md:col-span-4 font-normal'>{applydate}</div>
        </div>
    </div>
  );
}