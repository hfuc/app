import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screnns/HomeScreen';
import Follow from '../screnns/Follow';
import Setting from '../screnns/Setting';
import Trend from '../screnns/Trend';
import { NavigationContainer } from '@react-navigation/native';
import { Text, StyleSheet, View , Image} from 'react-native'
const Tab = createBottomTabNavigator();

const Tabs=() => {
  return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    //position: 'absolute',
                    //bottom: 25,
                    //left: 20,
                    //right: 20,
                    //elevation: 0,
                    //backgroundColor: '#fff',
                    //borderRadius: 15,
                    height: 65,
                    ...styles.shadow,
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} 
                options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image source={require('../img/homesua.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#0d9148': 'gray'
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? '#0d9148': 'gray',
                                    fontSize: 12
                                }}
                            >Home</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Follow" component={Follow} 
                options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image source={require('../img/theodoiicon.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#0d9148': 'gray'
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? '#0d9148': 'gray',
                                    fontSize: 12
                                }}
                            >Gợi Ý</Text>
                        </View>
                    ),
                }}
            />
            
            <Tab.Screen name="Trend" component={Trend} 
                options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image source={require('../img/cart.png')}
                                resizeMode='contain'
                                style={{
                                    width: 26,
                                    height: 26,
                                    tintColor: focused ? '#0d9148': 'gray'
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? '#0d9148': 'gray',
                                    fontSize: 12
                                }}
                            >Giỏ hàng</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Setting" component={Setting} 
                options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image source={require('../img/Settingicon.png')}
                                resizeMode='contain'
                                style={{
                                    width: 26,
                                    height: 26,
                                    tintColor: focused ? '#0d9148': 'gray'
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? '#0d9148': 'gray',
                                    fontSize: 12
                                }}
                            >Cài Đặt</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#7f5df0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})
export default Tabs;