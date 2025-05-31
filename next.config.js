// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   images: {
// //     domains: ["localhost"],
// //     remotePatterns: [
// //       {
// //         protocol: "https",
// //         hostname: "cdn.sanity.io",
// //         port: "",
// //       },
// //     ],
// //   },
// // };

// // module.exports = nextConfig;
// //13oct
// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   experimental: {
// //     missingSuspenseWithCSRBailout: false, // Disable the missing suspense warning
// //   },
// //   images: {
// //     domains: [
// //       "localhost",
// //       "www.zohowebstatic.com", // Added the domain to the list
// //       "hcltech.imgix.net",
// //       "www.epicor.com",
// //       "assets.epicor.com",
// //       "https://assets.epicor.com",
// //       "storage.googleapis.com",
// //       "placehold.co",
// //       "upload.wikimedia.org"
// //     ],
// //   },
// // };

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     missingSuspenseWithCSRBailout: false,
//   },
//   images: {
//     domains: [
//       "localhost",
//       "www.zohowebstatic.com",
//       "hcltech.imgix.net",
//       "www.epicor.com",
//       "assets.epicor.com",
//       "storage.googleapis.com",
//       "placehold.co",
//       "upload.wikimedia.org",
//       "www.ostratto.com",
//       "zoho.codafish.net",
//       "5.imimg.com",
//       "www.zosuccess.com",
//       "source.unsplash.com",
//       "img.icons8.com" // ✅ Add this line
//     ],
//   },
//   output: "standalone",
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: [
      "localhost",
      "www.zohowebstatic.com",
      "hcltech.imgix.net",
      "www.epicor.com",
      "assets.epicor.com",
      "storage.googleapis.com",
      "placehold.co",
      "upload.wikimedia.org",
      "www.ostratto.com",
      "zoho.codafish.net",
      "5.imimg.com",
      "www.zosuccess.com",
      "source.unsplash.com",
      "img.icons8.com"
    ],
  },
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  },
  output: "standalone",
};

module.exports = nextConfig;

