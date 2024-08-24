import { wixClientServer } from '@/lib/wixClientServer';
import { products } from '@wix/stores';
import DOMPurify from 'isomorphic-dompurify';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PRODUCT_PER_PAGE = 20

async function ProductList({categoryID, limit} :{categoryID:string, limit?:number}) {
  const wixClient = await wixClientServer();
  const res = await wixClient.products.queryProducts().eq("collectionIds", categoryID).limit(limit || PRODUCT_PER_PAGE).find();
  console.log(res);

  return (
    <div className='w-full'>
        {/* <h1 className='font-medium text-xl py-6'>Featured Products</h1> */}
        {/* Product List  */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8'>
            {
                res.items.map((product: products.Product, idx) => (
                    <Link key={idx} href={"/"+product.slug} className='w-full flex flex-col gap-4 shadow p-2'>
                        {/* Image */}
                        <div className='relative w-full h-80'>
                            <Image src={product.media?.mainMedia?.image?.url || "/product.png"}
                                alt='/product.png' fill sizes='25vw' className='object-cover absolute z-10 hover:opacity-0 transition-opacity easy duration-500'
                            />
                            {
                                product.media?.items &&
                                <Image src={product.media?.items[1]?.image?.url || "/product.png"}
                                    alt='/product.png' fill sizes='25vw' className='object-cover absolute'
                                />
                            }
                        </div>
                        {/* TItle */}
                        <div className='flex justify-between'>
                            <h3 className='font-bold'>{product.name}</h3>
                            <p className='font-bold'>${product.price?.price}</p>
                        </div>
                        {/* Description */}
                        {product.additionalInfoSections &&
                            <div className='text-sm text-gray-500' dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                  product.additionalInfoSections.find(
                                    (section: any) => section.title === "shortDesc"
                                  )?.description || ""
                                ),
                              }}></div>
                        }
                        <button className='btn w-max text-red-500 bg-transparent ring-1 ring-red-500 hover:bg-transparent hover:opacity-50'>
                            Add to cart
                        </button>
                    </Link>
                ))
            }

        </div>

    </div>
  )
}

export default ProductList