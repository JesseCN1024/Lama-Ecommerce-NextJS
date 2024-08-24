import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
import NavIcons from './NavIcons'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32'>
        {/* Mobile */}
        <div className='h-full md:hidden flex items-center justify-between'>
            <Link href="/">
                <p className='text-2xl tracking-wide'>LAMA</p>
            </Link>
            <Menu /> 
        </div>
        {/* Medium */}
        <div className='h-full hidden md:flex  items-center'>

          <div className='w-1/3 xl:w-1/2 flex items-center gap-16'>
            <Link href="/" className='flex items-center gap-4'>
              <Image alt="none" src="/logo.png" width={28} height={28} />
              <p className='text-2xl tracking-wide'>LAMA</p>
            </Link>
            <nav className='hidden xl:flex items-center gap-4 '>
              <Link href="/">HomePage</Link>
              <Link href="/">Shop</Link>
              <Link href="/">Deals</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
            </nav>
          </div>

          <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
            <SearchBar />
            <NavIcons />
          </div>
        </div>
    </div>
  )
}

export default Header