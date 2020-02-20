import {AppRegistry, YellowBox} from 'react-native';
import 'react-native-gesture-handler';
import App from './src';
import {name as appName} from './app.json';

YellowBox.ignoreWarnings([
  'Warning: componentWillReceiveProps has been renamed, and is not recommended for use. See https://fb.me/react-async-component-lifecycle-hooks for details.',
]);
AppRegistry.registerComponent(appName, () => App);
