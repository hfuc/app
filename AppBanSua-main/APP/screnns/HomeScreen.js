import React, { Component } from 'react'
import { View, StatusBar, Image } from 'react-native'
import SearchBar from '../component/SearchBar';
import { ScrollView } from 'react-native-virtualized-view';
import Aothun from '../component/Aothun';
import Aopolo from '../component/Aopolo';
import Aosomi from '../component/Aosomi';
import Quandai from '../component/quandai';
import Quanshort from '../component/Quanshort';


const HomeScreen = () => {
    return (
        <ScrollView style={{ backgroundColor: '#fff', paddingHorizontal: 15, flex: 1 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                <Image
                    style={{ height: 140, width: 200, marginTop: 40 }}
                    source={require('../img/logo.png')}
                />
            </View>
            <SearchBar />
            <Image
                style={{ height: 200, width:'100%',borderRadius:5 }}
                resizeMode="contain"
                source={require('../img/banner.png')}
            />
            <Aothun />
            <Aopolo />
            <Aosomi />
            <Quandai />
            <Quanshort/>
        </ScrollView>
    )
}

export default HomeScreen;