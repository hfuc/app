import React, { Component , useContext, useState} from 'react'
import { Text, StyleSheet, View, TextInput, Button, TouchableOpacity, ActivityIndicator, Image } from 'react-native'
import { AuthContext } from '../context/AuthContext';
const RegiterScreen =({navigation})=>{
    const [fullName, setFullName] = useState(null);
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [show, setShow] = useState(null);
    const [showPassword, setShowPassword] = useState(true);
    const {isLoading,register} = useContext(AuthContext);
    if(isLoading){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size={'large'}/>
            </View>
        )
    }
    return(
        
        <View style={styles.container}>
            <View style={{left: -125, top: -70, flexDirection:'row', alignItems: 'center', marginTop:60}}>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('Intro')}
                >
                    <Image source={require('../img/backicon.png')} style={{width: 35, height: 35, top: 1}}/>
                </TouchableOpacity>
                <Text style={{fontSize: 20, color:'#2F99F7', fontWeight:'bold'}}>Đăng Ký</Text>
            </View>
                <View>
                    <Image source={require('../img/logo.png')} resizeMode="contain" style={{width:300, height: 200}}/>
                </View>
            <View style={styles.wrapper}>
                <View style={styles.input}>
                    <Image source={require('../img/nameicon.png')} style={{width: 20, height: 20, marginRight: 10, marginBottom: 5}}/>
                    <TextInput  
                        placeholder='Full Name'
                        onChangeText={text=> setFullName(text)}
                        style={{width: '80%'}}
                    />
                </View>
                <View style={styles.input}>
                    <Image source={require('../img/usericon.png')} style={{width: 20, height: 20, marginRight: 10, marginBottom: 5}}/>
                    <TextInput 
                        placeholder='User Name'
                        onChangeText={text=> setUserName(text)}
                        style={{width: '80%'}}
                    />
                </View>
                <View style={styles.input}>
                    <Image source={require('../img/passwordicon.png')} style={{width: 20, height: 20, marginRight: 10, marginBottom: 5}}/>
                    <TextInput
                        placeholder='Password' 
                        secureTextEntry={showPassword}
                        onChangeText={text=> setPassword(text)}
                        style={{width: '80%'}}
                    />
                    <TouchableOpacity
                        onPress={()=>{
                            setShowPassword(!showPassword)

                            setShow(!show)
                        }}
                    >
                        <Image source={show===true ? require('../img/eye.png') : require('../img/hide.png')} style={{width: 25, height: 25}} />
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity style={styles.btn}
                    onPress={()=>{
                        console.log(fullName+' '+userName+' '+password);
                        register(fullName, userName, password);
                    }}
                >
                    <Text style={{ color: '#fff', fontWeight:'bold'}}>Đăng Ký</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', margin: 20}}>
                    <Text>Bạn đã có Tài khoản?</Text>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Login')}
                    >
                        <Text style={{color: 'blue',  marginHorizontal: 10}}>Đăng Nhập</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    wrapper:{
        width: '80%'
    },
    input:{
        borderBottomWidth: 1,
        borderBottomColor: '#777E85',
        height: 50,
        flexDirection: 'row',
        width: '100%', 
        alignItems: 'center',
        marginVertical: 10,   
    },
    btn: {
        width: '100%',
        height: 50,
        backgroundColor: '#4BC5F4',
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
    }
})
export default RegiterScreen;