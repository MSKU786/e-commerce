/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'fakestoreapi.com',
      'cdn4.iconfinder.com',
      'img.search.brave.com',
      'www.fedex.com',
    ],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    stripe_secret_key: process.env.STRIPE_SECRET_KEY,
    host: process.env.HOST,
    webhook_secret: process.env.WEBHOOK_SECRET,
  },
  ignoreBuildErrors: true,
}
