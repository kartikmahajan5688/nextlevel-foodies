// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "kartikmahajan-nextjs-foodie-users-image.s3.amazonaws.com",
//         port: "",
//         pathname: "/kartikmahajan/**",
//       },
//     ],
//   },
// };


// next.config.js

module.exports = {
  images: {
    domains: ['kartikmahajan-nextjs-foodie-users-image.s3.amazonaws.com'],
  },
};
