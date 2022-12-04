import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, StatusBar } from 'react-native'

const Intro = ({ navigation }) => {

    return (
        <View style={styles.container}>
            {/* <StatusBar
                animated={true}
                backgroundColor="#61dafb"
            /> */}
            <Image source={require('../img/logo.png')} style={{ width: 200, height: 200, top: -50 }} />

            <TouchableOpacity style={{
                width: '70%',
                height: 50,
                backgroundColor: '#2F99F7',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 40,
                marginVertical: 10,
                flexDirection: 'row',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.00,

                elevation: 24,
            }}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Đăng Nhập</Text>
            </TouchableOpacity>
            <Text>hoặc</Text>
            <TouchableOpacity style={{
                width: '70%',
                height: 50,
                backgroundColor: '#4BC5F4',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 40,
                marginVertical: 10,
                flexDirection: 'row',
                flexDirection: 'row',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.00,

                elevation: 24,
            }}
                onPress={() => navigation.navigate('Regiter')}
            >
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Đăng Ký</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },


})
export default Intro;