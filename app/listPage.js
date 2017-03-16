/**
 * Created by wangcaicat on 17/3/9.
 */
import React, { Component  } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ListView,
    Dimensions,
    TouchableOpacity
}from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

var newData = require('./tsconfig.json');

export default class ListPage extends Component {

    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2});
        this.state = {
            dataSource:ds.cloneWithRows(newData),
        };
        console.log(newData)
    }

    _renderRow(rowData) {

        return (
            <TouchableOpacity>
              <View style={styles.itemStyle}>
                  <Image source={{uri:rowData.img}} style={styles.imageStyle}/>
                  <View style={styles.subItemStyle}>
                      <Text style={{marginTop:5, fontSize:17}}>{rowData.title}</Text>
                      <Text style={{marginBottom:5, fontSize:13, color:'green'}}>简介</Text>
                  </View>

               </View>
            </TouchableOpacity>
        );
    }
    _renderSeparator(sectionID,rowID,adjacentRowHighlighted) {
        return (
            <View key={`{sectionID}-${rowID}`}
                  style={{height: 1, backgroundColor: 'white'}}>
            </View>
        );
    }
    render(){
        return(
            <View style={styles.container}>
              <ListView
                  dataSource={this.state.dataSource}
                  renderRow={this._renderRow}
                  renderSeparator={this._renderSeparator}

                      />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // 页面框架
    container: {
        backgroundColor: 'white',
        width,
        height:height-64,
        marginTop:64,
        marginBottom:10
    },
    itemStyle: { // 主轴方向
        flexDirection:'row', // 下边框
        borderBottomWidth:1,
        borderBottomColor:'gray'
    },
    imageStyle: { // 尺寸
        width:60,
        height:60, // 边距
        marginLeft:10,
        margin:10
    },
    subItemStyle: { // 对齐方式
        justifyContent:'space-around'
    } ,

    title1:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginLeft:10,
    }
})