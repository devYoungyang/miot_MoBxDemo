
// 'use strict';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import HomeStore from './HomeStore'
class HomePage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={() => { HomeStore.plus() }}>
                    <Text>{' Add '}</Text>
                </TouchableHighlight>
                <Text style={styles.resultTxtStyle}>
                    {HomeStore.clickedCounts}
                </Text>
                <TouchableHighlight
                    onPress={() => { HomeStore.minus() }}>
                    <Text>{' Minus '}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
const Home = observer(HomePage);

export default Home;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 100,
    },
    resultTxtStyle: {
        fontSize: 22,
        color: 'red'
    }
});