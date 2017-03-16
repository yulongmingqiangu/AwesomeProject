/**
 * Created by wangcaicat on 17/3/14.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated
} from 'react-native';
import Dimensions from 'Dimensions';
const {width} = Dimensions.get('window');
const alertWidth = 0.8;

export default class extends Component{
    render(){
        return(
            <View style={styles.modalContainer}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                    marginBottom: 20,
                    marginLeft: 10,
                    marginRight: 10,
                    minHeight: 50,
                }}>
                    <Text style={styles.showTitle}>{this._setPropsValues('alertTitle')}</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                    marginBottom: 20,
                    marginLeft: 10,
                    marginRight: 10,
                    minHeight: 50,
                }}>
                    <Text style={styles.showTitle}>{this._setPropsValues('alertText')}</Text>
                </View>
                <View style={{
                    width: width * alertWidth,
                    backgroundColor: '#cfcfcf',
                    height: 1
                }}></View>

                <View style={styles.modalContainerBottom}>
                    <TouchableOpacity onPress={() => {
                        if (typeof(this.props.rightClick) == 'function'){
                            let vthis = this;
                            this.props.rightClick({
                                closeAlert: function () {
                                    vthis._hideModal();
                                }
                            });
                        } else {
                            this._hideModal();
                        }
                    }}>
                        <View style={styles.modalContainerBottomTextBox}>
                            <Text style={styles.modalContainerBottomText}>{this._setPropsValues('rightText')}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    modalContainer: {
        width: width * alertWidth,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'column',
    },
                showTitle: {
                justifyContent: 'center',
                alignItems: 'center',
                color: blackColor,
                fontSize: 18
            },
    title:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10
    },
    modalContainerBottom: {
        width: width * alertWidth ,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainerBottomTextBox: {
        width: width * alertWidth,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

    },
    modalContainerBottomText: {
        color: blueColor,
        fontSize: 18
    }
})