/**
 * Created by wangcaicat on 17/3/1.
 */
'use strict';

import React, { Component , PropTypes } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions
}from 'react-native'
import SecondPage from './secondPage'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class HomePage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle} onPress={()=>this._gotoNext()}>
                    点击跳转
                    </Text>
            </View>
        )
    }

    _gotoNext() {
        this.props.navigator.push({
            component: SecondPage,
            name:'详情'
        })
        console.log('123')
    }

}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },

    textStyle: {
        // 背景色
        backgroundColor:'yellow',
        // 字体大小
        fontSize:30,
        // 下划横线
        textDecorationLine:'underline'
    }

});
