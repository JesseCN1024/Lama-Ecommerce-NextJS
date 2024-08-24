'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const SearchBar = () => {
    const router = useRouter();
    const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        const name = formdata.get("name") as string;
        if (name){
            router.push(`/list?name=${name}`)
        }
    }
  return (
    <form className='flex items-center justify-between bg-gray-100 px-2 flex-1'>
        <input type="text" placeholder="Type here" className="input flex-1 bg-gray-100 outline-none" />
        <button className="cursor-pointer">
        <Image src="/search.png" alt="" width={16} height={16} />
      </button>
    </form>
  )
}

export default SearchBar    