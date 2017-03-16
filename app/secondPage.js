/**
 * Created by wangcaicat on 17/3/8.
 */
import React, { Component  } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Dimensions
}from 'react-native'

import List from './listPage'
import Alert from './alert'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class SecondPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            // 初始化当前页码
            currentPage:0,
        }
    }
    render() {
        return (
            <View style={styles.container}>
               <ScrollView style={styles.scrollviewStyle}
                           horizontal={true} //水平方向
                           showsHorizontalScrollIndicator={false}
                           showsVerticalScrollIndicator={false}
                           pagingEnabled={true}
                           onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
               >
                   {SecondPage.renderItem()}
               </ScrollView>

                <Text style={styles.textStyle} onPress={()=>this._gotoNext()}>
                    点击跳转
                </Text>

                <View style={styles.pagingIndicatorStyle}>
                    {this.renderPagingIndicator()}
                </View>


            </View>
        );
    }

    _gotoNext() {
        this.props.navigator.push({
            component: Alert,
            name:'列表'
        })
    }

    onAnimationEnd(e){
        // 获取滑动的偏移量
        var offSetX = e.nativeEvent.contentOffset.x;
        // 通过偏移量和屏幕宽度计算第几页
        var currentPage = Math.floor(offSetX/width);
        //  更新值已获取屏幕更新
        this.setState({
            currentPage:currentPage
        });
    }

    _onTouchStart(){
        // 当手指按到scrollview时停止定时任务
        clearInterval(this._timer);
    }


    renderPagingIndicator(){
        var itemAry = [];
        var autoColor;
        var colorAry = ['gray', 'green', 'blue',  'black', 'yellow'];
        for (var i = 0;i < colorAry.length;i++){
            var item = colorAry[i];
            autoColor = (i == this.state.currentPage)? {color:'orange'}:{color:'white'}
            itemAry.push(
                <Text key={i} style={[{fontSize:30},autoColor]}>•</Text>
            );
        }
        return itemAry;
    }

    static renderItem(){
        var itemAry = [];
        var colorAry = ['gray', 'green', 'blue',  'black', 'yellow'];
        for (var i = 0;i < colorAry.length;i++){
            var item = colorAry[i];
            itemAry.push(
                <View key={i} style={[styles.itemStyle, {backgroundColor: colorAry[i]}]} refreshing="refreshing">
                    <Text  style={styles.title}>123</Text>
                    <Text  style={styles.title1}>456</Text>
                </View>
            )
        }
        return itemAry;
    }
}

const styles = StyleSheet.create({
    // 页面框架
    container: {
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center',
    },
    scrollviewStyle: {
        backgroundColor:'yellow',
        marginTop:64,
    },
    itemStyle:{
        width:width,
        height:200,
    },
    textStyle: {
        // 背景色
        backgroundColor:'yellow',
        // 字体大小
        fontSize:30,
        // 下划横线
        textDecorationLine:'underline',
        // marginTop:10
    },
    pagingIndicatorStyle:{
        backgroundColor:'rgba(255,255,255,0.0)',
        width:width,
        flexDirection:'row',
        justifyContent:'center',
        position:'absolute',
        bottom:30
    },
        // 标题
    title:{
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
        // backgroundColor:'white',
        justifyContent:'flex-start'//Step 3
    },

    title1:{
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
        // backgroundColor:'white',
        marginLeft:10,
    }
});