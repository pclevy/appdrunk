/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';

import App from './src';
import {name as appName} from './app.json';

// testando alteração
AppRegistry.registerComponent(appName, () => App);
