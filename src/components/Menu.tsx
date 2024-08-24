'use client';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Menu = () => {
    const [isOpen, setIsoOpen] = React.useState(false)
  return (
    <div>
        <Image 
            src="/menu.png"
            alt='None'
            width={28}
            height={28}
            className='cursor-pointer'
            onClick={() => {
                setIsoOpen(prev => !prev);
            }}
        />
        {isOpen && (
            <ul className='md:hidden absolute left-0 top-20 h-[calc(100vh-80px)] bg-dark flex flex-col items-center justify-center gap-8 bg-neutral text-white w-full pt-3'>
                <Link href="/">HomePage</Link>
                <Link href="/">Shop</Link>
                <Link href="/">Deals</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
            </ul>
        )}
    </div>
  )
}

export default Menu