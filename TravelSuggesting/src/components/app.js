import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Home from './home/home';

export default class App extends Component
{
    render()
    {
        return (
            <View>
                <Home />
            </View>
        );
    }
}