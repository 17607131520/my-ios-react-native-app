const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

const config = {
    resolver: {
        sourceExts: ['js', 'ts', 'tsx', 'svg'],
      },
};

module.exports = mergeConfig(defaultConfig, config);




// const extraNodeModules = {
//     stream: require.resolve('stream-browserify'),
//     'readable-stream': require.resolve('readable-stream'),
//   };

//   module.exports = {
//     transformer: {
//       getTransformOptions: async () => ({
//         transform: {
//           experimentalImportSupport: false,
//           inlineRequires: true,
//         },
//       }),
//     },
//     resolver: {
//       extraNodeModules: {
//         ...extraNodeModules,
//         'react-native-url-polyfill': require.resolve('react-native-url-polyfill'),
//       },
//     },
//   };
