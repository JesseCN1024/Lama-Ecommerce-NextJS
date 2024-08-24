import React from 'react'

function Filter() {
  return (
    <div className='my-3 flex'>
        <div className='flex gap-8 flex-wrap'>
        <select
          name="type" 
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        {/* TODO: Filter Categories */}
        <select
          name="cat"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Category</option>
          <option value="">New Arrival</option>
          <option value="">Popular</option>
        </select>
        <select
          name=""
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>All Filters</option>
        </select>
            
        </div>
        {/* Sort by */}
        <select name="sort" id="" className='rounded-lg bg-gray-200 px-2 py-1 ml-auto '>
            <option value="physical">Physical</option>
            <option value="physical">Physical</option>
            <option value="physical">Physical</option>
        </select>
    </div>
  )
}

export default Filter