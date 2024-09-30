'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React from 'react'


const Pagination = ({hasNext, hasPrevious, currentPage}: {
    hasNext: boolean,
    hasPrevious: boolean,
    currentPage: number
}) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const {replace} = useRouter();


    const changePageURL = (isNext: boolean) => {
        if (isNext && !hasNext) return;
        else if (!isNext && !hasPrevious) return;  
        const params = new URLSearchParams(searchParams);
        const updatedPage = isNext ? currentPage+1 : currentPage-1;
        if (updatedPage === 0) params.delete("page");
        else params.set("page", (updatedPage).toString());

        replace(`${pathname}?${params.toString()}`)
        // console.log(pathname+"?"+params.toString());
    };

  return (
    <div className='text-center my-4 flex justify-center space-x-3'> 
        <button onClick={() => changePageURL(false)} disabled={!hasPrevious} className='w-24 rounded-md border-lama bg-pink-600 text-white font-bold p-2 cursor-pointer disabled:bg-pink-200 disabled:cursor-not-allowed'>Previous</button>
        <button onClick={() => changePageURL(true)} disabled={!hasNext} className='w-24 rounded-md border-lama bg-pink-600 text-white font-bold p-2 cursor-pointer disabled:bg-pink-200 disabled:cursor-not-allowed'>Next</button>
    </div>
  )
}

export default Pagination