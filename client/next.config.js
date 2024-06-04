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
    NEXT_PUBLIC_SERVER_DOMAIN: process.env.NEXT_PUBLIC_SERVER_DOMAIN
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
      'localhost'
    ],
  }
}