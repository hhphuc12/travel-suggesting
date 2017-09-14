/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/components/app';

export default class TravelSuggesting extends Component {
  render() {
    return <App />;
  }
}
AppRegistry.registerComponent('TravelSuggesting', () => TravelSuggesting);
