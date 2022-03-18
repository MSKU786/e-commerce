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
    api_key: process.env.API_KEY,
    auth_domain: process.env.AUTH_DOMAIN,
    app_id: process.env.APP_ID,
    measurement_id: process.env.MEASUREMENT_ID,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY,
    google_client_id: process.env.GOOGLE_CLIENT_ID,
    google_client_secret: process.env.GOOGLE_CLIENT_SECRET,
  },
  ignoreBuildErrors: true,
}
