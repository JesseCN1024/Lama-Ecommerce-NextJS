/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.pexels.com",
        },
        {
          protocol: "https",
          hostname: "static.wixstatic.com",
        },
        {
          protocol: "https",
          hostname: "people.pic1.co",
        },
        {
          protocol: "https",
          hostname: "app-uploads-cdn.fera.ai",
        },
        {
          protocol: "https",
          hostname: "encrypted-tbn0.gstatic.com",
        },
        {
          protocol: "https",
          hostname: "cdn2.cellphones.com.vn",
        },
        // {
        //   protocol: "https",
        //   hostname: "images.pexels.com",
        // },
      ],
    },
  };
  
export default nextConfig;
