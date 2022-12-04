import { Text, View, ActivityIndicator, FlatList, TouchableOpacity, Image, StyleSheet,TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const goiy = () => {
    const [search, setsearch] = useState('');
    const [data, setdata] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        getList();
        return () => {

        }
    }, []);
    // Sửa dụng fetch để lấy yêu cầu call api thông qua phương thức post trả về chuỗi json .then((response) => response.json())
    const getList = () => {
        return fetch('https://637f918e5b1cc8d6f94999a0.mockapi.io/goi_y')
            .then((response) => response.json())
            .then((responseJson) => {
                setdata(responseJson);
            }
            ).catch((erro) => {
                console.log('Erro', erro);
            }).finally(() => { setisLoading(false) })
    }
    const renderItem = ({ item, index }) => (
        <>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Detail', { item })
                    console.log(item.id)
                }
                }
            >
                <View style={styles.bai_bao}>
                    <Image
                        source={{ uri: item.anh }}
                        resizeMode="contain"
                        style={styles.img} />
                    <View style={styles.contentContainer}>
                        <Text numberOfLines={1} style={styles.text_tieu_de}>{item.tieu_de}</Text>
                        <Text style={styles.text_gia}>{item.gia} đ</Text>

                    </View>
                    <View>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <TextInput style={styles.searchInput}
                    onChangeText={(text) => {
                        setsearch(text);
                    }}
                    placeholder='Nhập Thông Tin...' />
                <Image
                    style={{ height: 30, width: 30, margin: 5 }}
                    source={require('../img/timkiem.png')}
                />
            </View>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data.filter(eachBao => eachBao.tieu_de.toLocaleLowerCase().includes(search.toLocaleLowerCase()))}
                    renderItem={renderItem}
                    keyExtractor={item => `key-${item.id}`}
                />
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        width:'90%',
       
    },
    bai_bao: {
        borderRadius: 10,
        width: '100%',
        marginBottom:40,
        marginLeft:28
    },
    contentContainer: {
        fontWeight: 'bold',
        fontSize: 17,
        flex: 0.65,
        paddingHorizontal: 5,
    },
    text_tieu_de: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "#f2703c"
    },
    img: {
        flex: 0.35,
        width: '94%',
        height: 300,
        borderRadius: 8
    },
    text_gia: {
        fontSize: 16,
        textAlign: 'center',
        color: '#3d6aaf',
        fontWeight: 'bold'
    },
    search: {
        width: '100%',
        height: 38,
        backgroundColor: '#fff',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        marginLeft:17
    },
    searchInput: {
        paddingLeft: 8,
        fontSize: 14,
    }
})
export default goiy;