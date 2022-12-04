import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
const SearchBar = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TextInput style={styles.searchInput} placeholder='Nhập Thông Tin...'
            />
             <Image
                    style={{height:30,width:30,margin:5}}
                    source={require('../img/timkiem.png')}
                />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 38,
        backgroundColor: '#fff',
        borderRadius: 8,
        flexDirection:'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom:20
    },
    searchInput:{
        paddingLeft: 8,
        fontSize: 14,
    }
})
export default SearchBar;
