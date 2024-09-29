'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import React from 'react'

function Filter({searchParams} : {searchParams: any}) {
  const pathname = usePathname();
  const {replace} = useRouter();
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    const params = new URLSearchParams(searchParams);
    if (!value) params.delete(name);
    else params.set(name, value);
    replace(`${pathname}?${params.toString()}`)
    // console.log(pathname+"?"+params.toString());
  };

  return (
    <div className='my-3 flex'>
        <div className='flex gap-8 flex-wrap'>
        <select
          name="type" 
          id=""
          defaultValue={searchParams?.type}
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option value={""}>All Types</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          defaultValue={searchParams?.min}
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          defaultValue={searchParams?.max}
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        {/* TODO: Filter Categories */}
        <select
          name="feat"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
          defaultValue={searchParams?.feat}
        >
          <option value="">All Features</option>
          <option value="newarrival">New Arrival</option>
          <option value="popular">Popular</option>
        </select>
        {/* <select
          name=""
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>All Filters</option>
        </select> */}
            
        </div>
        {/* Sort by */}
        <select name="sort" id="" defaultValue={searchParams?.sort} className='rounded-lg bg-gray-200 px-2 py-1 ml-auto  ' onChange={handleFilterChange}>
          <option value="">Sort By</option>
          <option value="asc+price">Price (low to high)</option>
          <option value="desc+price">Price (high to low)</option>
          <option value="asc+lastUpdated">Newest</option>
          <option value="desc+lastUpdated">Oldest</option>
        </select>
    </div>
  )
}

export default Filter