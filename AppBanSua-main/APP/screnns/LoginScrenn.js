import React, { useContext, useState } from 'react'
import { Text, StyleSheet, View, TextInput, Button, TouchableOpacity, Alert, Image , ActivityIndicator,StatusBar} from 'react-native'
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(false);
    const [show, setShow] = useState(null);
    const [showPassword, setShowPassword] = useState(true);
    const { isLoading, login, token } = useContext(AuthContext);
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <StatusBar
            animated={true}
            backgroundColor="#ffff"
             />
            <View style={{ left: -106, top: -22, flexDirection: 'row', alignItems: 'center',marginTop:40 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Intro')}
                >
                    <Image source={require('../img/backicon.png')} style={{ width: 35, height: 35, top: 1 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: '#2F99F7', fontWeight: 'bold' }}>Đăng Nhập</Text>
            </View>
            <View style={styles.wrapper}>
                <View   style={{alignItems:'center'}}>
                    <Image source={require('../img/logo.png')}   resizeMode="contain"  style={{ width: '100%', height: 200 }} />
                </View>
                <View style={styles.input} >
                    <Image source={require('../img/usericon.png')} style={{ width: 20, height: 20, marginRight: 10, marginBottom: 5 }} />
                    <TextInput
                        placeholder='User Name'
                        onChangeText={text => setUserName(text)}
                        style={{ width: '80%' }}
                    />
                </View>
                <View style={styles.input}>
                    <Image source={require('../img/passwordicon.png')} style={{ width: 20, height: 20, marginRight: 10, marginBottom: 5 }} />
                    <TextInput
                        placeholder='Password'
                        secureTextEntry={showPassword}
                        onChangeText={text => setPassword(text)}
                        style={{ width: '80%' }}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            setShowPassword(!showPassword)

                            setShow(!show)
                        }}
                    >
                        <Image source={show === true ? require('../img/eye.png') : require('../img/hide.png')} style={{ width: 25, height: 25 }} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btn}
                    onPress={() => {
                        login(userName, password)
                        console.log(userName + ' ' + password);
                    }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Đăng Nhập</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text>Bạn chưa có Tài khoản?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Regiter')}
                    >
                        <Text style={{ color: 'blue', marginHorizontal: 10 }}>Đăng Ký</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', 
        marginTop:-200  
    },
    wrapper: {
        width: '80%',
        backgroundColor: '#ffffff', 
    },
    input: {
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
    }
})
export default LoginScreen;