/**
 * Created by wangcaicat on 17/3/1.
 */

'use strict';

import React, { Component } from 'react'
import { platform , Navigator ,StyleSheet ,View,TouchableOpacity,Text} from "react-native"
import { createMemoryHistory,Router,IndexRoute,Route } from 'react-router'
import { createNavigatorRouter } from 'react-native-navigator-router';

import Homepage  from  './homePage'

export default class extends Component {

    renderScene(route, navigator) {
        return <route.component navigator={navigator}  {...route.passProps} />;
    }

    configureScene(route, routeStack) {
        // if (route.type == 'Modal') {
        //     return Navigator.SceneConfigs.FloatFromBottom;
        // }
        return Navigator.SceneConfigs.PushFromRight;
    }

    render(){
        return (
            <Navigator
                initialRoute={{name:'首页', component: Homepage}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}
                navigationBar={
                    <Navigator.NavigationBar
                        style={styles.navContainer}
                        routeMapper={NavigationBarRouteMapper}/>}
            />

        )
    }
}


// 导航栏的Mapper
var NavigationBarRouteMapper = {
    // 左键
    LeftButton(route, navigator, index, navState) {
        if (index > 0) {
            return (
                <View style={styles.navContainer}>
                    <TouchableOpacity
                        underlayColor='transparent'
                        onPress={() => {if (index > 0) {navigator.pop()}}}>
                        <Text style={styles.leftNavButtonText}>
                            后退
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return null;
        }
    },
    // 右键
    RightButton(route, navigator, index, navState) {
        if (route.onPress)
            return (
                <View style={styles.navContainer}>
                    <TouchableOpacity
                        onPress={() => route.onPress()}>
                        <Text style={styles.rightNavButtonText}>
                            {route.rightText || '右键'}
                        </Text>
                    </TouchableOpacity>
                </View>
            );
    },
    // 标题
    Title(route, navigator, index, navState) {

        return (
            <View style={styles.navContainer}>
                <Text style={styles.title}>
                    {route.name}
                </Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    // 页面框架
    container: {
        flex: 4,
        marginTop: 100,
        flexDirection: 'column'
    },
    // 导航栏
    navContainer: {
        backgroundColor: '#81c04d',
        paddingTop: 12,
        paddingBottom: 10,
    },
    // 导航栏文字
    headText: {
        color: '#ffffff',
        fontSize: 22
    },
    // 按钮
    button: {
        height: 60,
        marginTop: 10,
        justifyContent: 'center', // 内容居中显示
        backgroundColor: '#ff1049',
        alignItems: 'center'
    },
    // 按钮文字
    buttonText: {
        fontSize: 18,
        color: '#ffffff'
    },
    // 左面导航按钮
    leftNavButtonText: {
        color: '#ffffff',
        fontSize: 18,
        marginLeft: 13
    },
    // 右面导航按钮
    rightNavButtonText: {
        color: '#ffffff',
        fontSize: 18,
        marginRight: 13
    },
    // 标题
    title: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        flex: 1                //Step 3
    }
});