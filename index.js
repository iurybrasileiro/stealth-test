/**
 * @format
 */

import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import overwrite from './overwrite';
import Main from './src';

overwrite();

AppRegistry.registerComponent(appName, () => Main);
