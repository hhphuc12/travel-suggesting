import React, { Component } from 'react';
import {
    View, Image, Dimensions, StyleSheet,
    ListView, Text, TouchableOpacity, FlatList
} from 'react-native';

import ItemListview from './item-listview';

const { height, width } = Dimensions.get('window');

const data = [
    { id: 1, title: 'Lorem Ipsum', imgSource: require('../../images/thumbnail.png') },
    { id: 2, title: 'Lorem Ipsum', imgSource: require('../../images/thumbnail.png') },
    { id: 3, title: 'Lorem Ipsum', imgSource: require('../../images/thumbnail.png') },
    { id: 4, title: 'Lorem Ipsum', imgSource: require('../../images/thumbnail.png') },
    { id: 5, title: 'Lorem Ipsum', imgSource: require('../../images/thumbnail.png') },
    { id: 6, title: 'Lorem Ipsum', imgSource: require('../../images/thumbnail.png') }
]

export default class MyListView extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(data)
        };
    }

    render() {
        const { listTitle } = this.props;
        const { wrapper, row, title, viewMore } = styles;
        return (
            <View style={wrapper}>
                <View style={row}>
                    <Text style={title}>{listTitle}</Text>
                    <TouchableOpacity>
                        <Text style={viewMore}>Xem thêm</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal
                    data={data}
                    renderItem={({ item }) => {
                        return <ItemListview
                            title={item.title}
                            imgSource={item.imgSource}
                            numRate={4}
                            numStar={3}
                            distance={'69,96'}
                            tag={'an uong, chich choac'} />
                    }}
                    keyExtractor={(item, index) => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    wrapper:
    {
        backgroundColor: 'white',
        paddingTop: height / 40,
        paddingBottom: height / 60
    },
    row:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: width / 50
    },
    title:
    {
        fontWeight: 'bold',
        color: 'black',
        fontSize: height / 38
    },
    viewMore:
    {
        fontSize: height / 45
    }
});