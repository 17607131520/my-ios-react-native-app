
/**
 * @format
 */

import {
    AppRegistry,
  } from 'react-native';
  import App from './src/App';
  import { name as appName } from './app.json';
  import { polyfill as polyfillFetch } from 'react-native-polyfill-globals/src/fetch';
  import { polyfill as polyfillEncoding } from 'react-native-polyfill-globals/src/encoding';
  import { polyfill as polyfillReadableStream } from 'react-native-polyfill-globals/src/readable-stream';

  // 支持流式接口
  polyfillFetch();
  polyfillEncoding();
  polyfillReadableStream();

  AppRegistry.registerComponent(appName, () => App);
