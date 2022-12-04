import React, { Component, useContext } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screnns/LoginScrenn';
import RegiterScreen from '../screnns/RegiterSceen';
import Intro from '../screnns/Intro';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import Detail from '../screnns/Detail';

import { AuthContext } from '../context/AuthContext';
const Stack = createNativeStackNavigator();
const Navigater = () => {
    const { token } = useContext(AuthContext);
    return (

        <NavigationContainer>
            <Stack.Navigator>

                {token != null ?
                    (
                        <>
                            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
                            <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
                            
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
                            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                            <Stack.Screen name="Regiter" component={RegiterScreen} options={{ headerShown: false }} />
                        </>
                    )
                }

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigater;