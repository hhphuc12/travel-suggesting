import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './home/home';
import KhamPha from './kham-pha/kham-pha';
import CoGiMoi from './co-gi-moi/co-gi-moi';
import TaiKhoan from './tai-khoan/tai-khoan';

import icHome from '../images/ic_home.png';
import icHomeS from '../images/ic_home_s.png';
import icDiscover from '../images/ic_discover.png';
import icDiscoverS from '../images/ic_discover_s.png';
import icWhatNew from '../images/ic_what_new.png';
import icWhatNewS from '../images/ic_what_new_s.png';
import icAccount from '../images/ic_account.png';
import icAccountS from '../images/ic_account_s.png';

const { height } = Dimensions.get('window');

export default class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            selectedTab: 'kham_pha'
        };
    }

    render()
    {
        const { iconTab } = styles;
        return (
            <View style={{ flex: 1 }}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        renderIcon={() => <Image source={icHome} style={iconTab} />}
                        renderSelectedIcon={() => <Image source={icHomeS} style={iconTab} />}
                        selectedTitleStyle={{ color: '#00c9ff' }}
                    >
                        <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'kham_pha'}
                        title="Khám phá"
                        onPress={() => this.setState({ selectedTab: 'kham_pha' })}
                        renderIcon={() => <Image source={icDiscover} style={iconTab} />}
                        renderSelectedIcon={() => <Image source={icDiscoverS} style={iconTab} />}
                        selectedTitleStyle={{ color: '#00c9ff' }}
                    >
                        <KhamPha />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'co_gi_moi'}
                        title="Có gì mới"
                        onPress={() => this.setState({ selectedTab: 'co_gi_moi' })}
                        renderIcon={() => <Image source={icWhatNew} style={iconTab} />}
                        renderSelectedIcon={() => <Image source={icWhatNewS} style={iconTab} />}
                        selectedTitleStyle={{ color: '#00c9ff' }}
                    >
                        <CoGiMoi />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tai_khoan'}
                        title="Tài khoản"
                        onPress={() => this.setState({ selectedTab: 'tai_khoan' })}
                        renderIcon={() => <Image source={icAccount} style={iconTab} />}
                        renderSelectedIcon={() => <Image source={icAccount} style={iconTab} />}
                        selectedTitleStyle={{ color: '#00c9ff' }}
                    >
                        <TaiKhoan />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconTab:
    {
        height: height / 25,
        width: height / 25
    }
});