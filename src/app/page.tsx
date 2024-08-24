// 'use client'
import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
import { Suspense, useContext, useEffect } from "react"
import { WixClientContext } from "../context/wixContext"
import { useWixClient } from "@/hooks/useWixClient"
import { wixClientServer } from "@/lib/wixClientServer"

const HomePage = async () => { // server component can use async
  // const wixClient = useWixClient();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await wixClient.products.queryProducts().find();
  //     console.log(res)
  //   }
  //   fetchData();
  // },[])
  const wixClient = await wixClientServer();
  const res = await wixClient.products.queryProducts().find();
  console.log(res);

  return (
    <div className=''>
      <Slider />
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 my-8">
        <h1 className='font-medium text-xl my-8'>Featured Products</h1>
        <Suspense fallback={<div>Loading</div>}>
          <ProductList 
            categoryID={process.env.NEXT_PUBLIC_FEATURE_PRODUCT_CATEGORY_ID || ""} 
            limit={4} 
          /> 
        </Suspense>
      </div>
      <div className="my-8">
        <h1 className='font-medium text-xl py-6 px-4 md:px-8 lg:px-16 xl:px-32'>Categories</h1>
        <Suspense fallback={<div>Loading</div>}>
          <CategoryList />
        </Suspense>
      </div>
    </div>
  )
}

export default HomePage