'use client'
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Link from 'next/link';

export default function PaginationButtons() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get('searchTerm')
  const startIndex = +searchParams.get('start') || 1 ;
  return (
    <div className='text-blue-700 flex px-10 pb-4 justify-between sm:justify-start 
    sm:space-x-44 sm:px-0'>
      {
        startIndex >= 10 && (
          <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex -10 }`}>
          <div>
            <BsChevronLeft className='h-5'/>
            <p>Previous</p>
          </div>
          </Link>
        )
      }
      {
        startIndex <= 90 && (
          <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex +10 }`}>
          <div>
            <BsChevronRight className='h-5'/>
            <p>Next</p>
          </div>
          </Link>
        )
      }
    </div>
  )
}
