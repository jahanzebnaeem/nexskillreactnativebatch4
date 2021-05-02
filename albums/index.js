/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
//
// AppRegistry.registerComponent(appName, () => App);
// // End of original code

// Import libraries to help creating a component.
import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/Header';

// Create a Component
const App = () => {
  return <Header />;
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
