/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  experimental: {
    images: {
      allowFutureImage: true
    }
  },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SERVER_DOMAIN: process.env.NEXT_PUBLIC_SERVER_DOMAIN,
    NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    NEXT_PUBLIC_CONTENTFUL_SPACE_ID: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
  },
  images: {
    formats: ['image/webp'],
    domains: [
      'images.unsplash.com',
      'unsplash.com',
      'media.licdn.com',
      'tailwindui.com',
      'plus.unsplash.com',
      'propmedia1.propertyshare.in',
      'propmedia2.propertyshare.in',
      'assetmonk.com',
      'aurumwisex.com',
      'media1.propertyshare.in',
      'media.licdn.com',
      'flowbite.com',
      'flowbite.s3.amazonaws.com',
      'storage.googleapis.com',
      'images.ctfassets.net',
      'i.postimg.cc',
      'images.yourstory.com',
      'server.propertyverse.co.in',
      'localhost',
      'lh3.googleusercontent.com'
    ],
  }
}
