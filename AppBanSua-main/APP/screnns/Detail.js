import React, { Component } from 'react'
import { Text, StyleSheet, View , Image, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Tabs from '../tab/Tabs';
const Detail =(props) => {
    const navigation = useNavigation();
    const item = props.route.params.item;
    console.log(props.route.params.item.anh);
    return (
        <ScrollView style={styles.container}>
        <View style={{ left: -10, flexDirection: 'row', alignItems: 'center',height:50 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Tabs')}
                >
                    <Image source={require('../img/backicon2.png')} style={{ width: 30, height: 30, top: 1,marginLeft:12 }} />
                </TouchableOpacity>
                <Image source={require('../img/logo.png')} style={{ width: 80, height: 80, top: 10,marginLeft:110,}} />
        </View>
        <View style={{marginTop:20}}>
            <Text style={styles.text_tieu_de}>{props.route.params.item.tieu_de}</Text>
            <View style={styles.imgs}>
                <Image 
                    source={{uri:props.route.params.item.anh}} 
                    resizeMode="contain"
                    style={styles.img}
                />
                </View>
            <View >
                <Text style={styles.text_gia}>{props.route.params.item.gia} đ</Text>
                <TouchableOpacity
                    style={{backgroundColor: '#f2703c',
                        width: 200,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                       marginLeft:70,
                       marginBottom:10
                    }}
                    onPress={
                        ()=>{
                            navigation.navigate('Trend')
                        }
                    }
                ><Text style={{color: '#fff'}}>Thêm vào giỏ hàng</Text>
                   
                </TouchableOpacity>
            </View>
            
            <Text style={styles.text}>Giao hàng toàn quốc 24h</Text>
            <Text style={styles.text}>Giao hàng với đơn hàng tối thiểu</Text>
            <Text style={styles.text}>250.000 VNĐ</Text>
            
            <Text style={styles.text_mota}>Chi tiết: {props.route.params.item.mo_ta}</Text>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    
    container:{
        padding: 15,
        
        backgroundColor:'#ffff'
    },
    text_tieu_de:{
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'justify',
        color: "#f2703c"
    },
    text_gia:{
        fontSize: 25,
        color:'#3d6aaf',
        marginBottom:15
    },
    imgs:{
        marginVertical: 30
    },
    img:{
        width: '90%',
        height: 300,
        borderRadius: 3,
        marginLeft:20
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
    },
    text_mota:{
        fontSize:16,
        marginTop:10,
        textAlign:'justify'
    }
})
export default Detail;