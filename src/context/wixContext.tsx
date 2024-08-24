'use client'
import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import Cookies from "js-cookie";
// import { createContext } from "vm";
import { createContext } from "react";


const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

const wixClient = createClient({
    modules: {
      products,
      collections   
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: {
        refreshToken,
        accessToken: {value:"", expiresAt: 0}
      }
    })
  })

export type WixClient = typeof wixClient; // type of wixClient

export const WixClientContext = createContext<WixClient>(wixClient); // holding instance of client , call data by useContext(WixClientContext)

export const WixClientContextProvider  = ({children} : {children:React.ReactNode}) => { // cdreate a provide to wrap children for context access 
    return (
        <WixClientContext.Provider value={wixClient}>
            {children}
        </WixClientContext.Provider>
    )
}

