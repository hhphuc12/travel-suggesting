import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';

import icMap from '../../images/ic_map.png';
import icSearch from '../../images/ic_search.png';

const { height } = Dimensions.get('window');

export default class Home extends Component
{
    render()
    {
        const { wrapper, icon, row } = styles;
        return (
            <View style={wrapper}>
                <View style={row}>
                    <Image source={icMap} style = {icon} />
                    <Image source={icSearch} style = {icon} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        wrapper:
        {
            height: height,
            backgroundColor: '#C213C2'
        },
        icon:
        {
            margin: height / 50,
            height: height / 25,
            width: height / 25
        },
        row:
        {
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
    }
);