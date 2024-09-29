import Filter from '@/components/Filter'
import Loading from '@/components/Loading'
import ProductList from '@/components/ProductList'
import { wixClientServer } from '@/lib/wixClientServer'
import Image from 'next/image'
import React, { Suspense } from 'react'

const page = async ({searchParams} : {searchParams: any}) => {
  const wixClient = await wixClientServer();
  const cat = await wixClient.collections.getCollectionBySlug(searchParams?.cat || "");
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32'>
      <div className='flex justify-between bg-pink-200'>
        <div className="w-full md:w-2/3 flex justify-center items-center item py-6">
          <div className='flex-col gap-8'>
            <h1 className='text-4xl font-bold'>Grap up to 50% off on <br/> Selected Products</h1>
            <button className="btn btn-neutral rounded-lg text-white w-max mt-4 cursor-pointer">Buy Now</button>
          </div>
        
        </div>
        <div className="hidden md:block relative w-1/3">
          <Image src="/woman.png" fill alt='Woman Image ' className=' object-contain'/>
        </div>
      </div>
      {/* Fileter */}
      <Filter searchParams={searchParams} /> 
      {/* Product List  */}
      <div className='mt-8'>
        <h1 className='font-medium text-2xl my-4'>{cat?.collection?.name} For You</h1>
        <Suspense fallback={<Loading />} key={JSON.stringify(searchParams)}>
          <ProductList 
            categoryID={cat?.collection?._id || process.env.NEXT_PUBLIC_FEATURE_ALLPRODUCT_CATEGORY_ID!}  
            searchParams={searchParams}
            limit={8}
          /> 
        </Suspense>
      </div>

    </div>
  )
}

export default page