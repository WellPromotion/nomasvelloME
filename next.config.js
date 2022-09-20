// next.config.js
const withImages = require('next-images')
module.exports = withImages()




// for pdf file loading correctly
// module.exports = {
//     webpack: (config, options) =>
//     {
//         config.module.rules.push({
//             test: /\.pdf$/i,
//             type: 'asset/source'
//         })

//         return config
//     },
// }


// module.exports = {
//     reactStrictMode: true,
//     webpack: (config) => {
//       config.module.rules.push({
//         test: /\.pdf$/,
//         use: {
//           loader: 'file-loader',
//           options: {
//             name: '[path][name].[ext]',
//           },
//         },
//       });
//       return config;
//     }
//   }
  