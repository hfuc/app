import React, { Component, useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Button,
  StatusBar
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
const Setting = () => {
  const { logout } = useContext(AuthContext);
  return <SafeAreaView style={{
    flex: 1,
    backgroundColor: 'white',
  }}>
    <StatusBar
      animated={true}
      backgroundColor="#015f71"
    />
    <View style={{ width: '100%', height: 60, backgroundColor: '#015f71', justifyContent: 'center' }}>
      <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Cài đặt</Text>
    </View>
    <ScrollView>
      <View style={{
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
      }}>
        <Text style={{
          color: 'black',
          fontSize: 14,
          color: 'red',
          paddingStart: 10,
        }}>CHUNG</Text>
      </View>
      <View style={{
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center'
      }}>
        <Icon
          name='globe'
          style={{ marginStart: 10 }}
          size={20} color={'black'}
        />
        <Text style={{
          color: 'black',
          fontSize: 14,
          color: 'black',
          paddingStart: 10,
        }}>Ngôn ngữ</Text>
        <View style={{ flex: 1 }} />
        <Text style={{
          color: 'black',
          fontSize: 14,
          color: 'black',
          paddingEnd: 10,
          opacity: 0.5,
        }}>Tiếng Việt</Text>
        <Icon
          name='chevron-right'
          style={{
            paddingEnd: 10,
            opacity: 0.5,
          }}
          size={20} color={'black'}
        />
      </View>
      <View style={{
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center'
      }}>
        <Icon
          name='cloud'
          style={{ marginStart: 10 }}
          size={16} color={'black'}
        />
        <Text style={{
          color: 'black',
          fontSize: 14,
          color: 'black',
          paddingStart: 10,
        }}>Môi trường</Text>
        <View style={{ flex: 1 }} />
        <Text style={{
          color: 'black',
          fontSize: 14,
          color: 'black',
          paddingEnd: 10,
          opacity: 0.5,
        }}>Production</Text>
        <Icon
          name='chevron-right'
          style={{
            paddingEnd: 10,
            opacity: 0.5,
          }}
          size={20} color={'black'}
        />
      </View>
      <View style={{
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
      }}>
        <Text style={{
          color: 'black',
          fontSize: 14,
          color: 'red',
          paddingStart: 10,
        }}>TÀI KHOẢN</Text>
      </View>
      <View style={{
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center'
      }}>
        <Icon
          name='phone'
          style={{ marginStart: 10 }}
          size={16} color={'black'}
        />
        <Text style={{
          color: 'black',
          fontSize: 14,
          color: 'black',
          paddingStart: 10,
        }}>Số điện thoại</Text>
        <View style={{ flex: 1 }} />
        <Icon
          name='chevron-right'
          style={{
            paddingEnd: 10,
            opacity: 0.5,
          }}
          size={20} color={'black'}
        />
      </View>
      <View style={{
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center'
      }}>
        <Icon
          name='envelope'
          style={{ marginStart: 10 }}
          size={16} color={'black'}
        />
        <Text style={{
          color: 'black',
          fontSize: 14,
          color: 'black',
          paddingStart: 10,
        }}>Email</Text>
        <View style={{ flex: 1 }} />
        <Icon
          name='chevron-right'
          style={{
            paddingEnd: 10,
            opacity: 0.5,
          }}
          size={20} color={'black'}
        />
      </View>
      <View style={{
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
      }}>
        <Text style={{
          color: 'black',
          fontSize: 14,
          color: 'red',
          paddingStart: 10,
        }}>BẢO MẬT</Text>
      </View>
      <View style={{
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center'
      }}>
        <Icon
          name='door-closed'
          style={{ marginStart: 10 }}
          size={16} color={'black'}
        />
        <Text style={{
          color: 'black',
          fontSize: 14,
          color: 'black',
          paddingStart: 10,
        }}>Khóa ứng dụng nền</Text>
        <View style={{ flex: 1 }} />

      </View>
      <View style={{
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center'
      }}>
        <Icon
          name='fingerprint'
          style={{ marginStart: 10 }}
          size={16} color={'black'}
        />
        <Text style={{
          color: 'black',
          fontSize: 14,
          color: 'black',
          paddingStart: 10,
        }}>Sử dụng dấu vân tay</Text>
        <View style={{ flex: 1 }} />

      </View>
      <View style={{
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center'
      }}>
        <Icon
          name='lock'
          style={{ marginStart: 10 }}
          size={16} color={'black'}
        />
        <Text style={{
          color: 'black',
          fontSize: 14,
          color: 'black',
          paddingStart: 10,
        }}>Thay đổi mật khẩu</Text>
        <View style={{ flex: 1 }} />

      </View>
      <View style={{
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
      }}>
        <Text style={{
          color: 'black',
          fontSize: 14,
          color: 'red',
          paddingStart: 10,
        }}>KHÁC</Text>
      </View>
      <View style={{
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center'
      }}>
        <Icon
          name='file-alt'
          style={{ marginStart: 10 }}
          size={20} color={'black'}
        />
        <Text style={{
          color: 'black',
          fontSize: 14,
          color: 'black',
          paddingStart: 10,
        }}>Hạn của dịch vụ</Text>
        <View style={{ flex: 1 }} />
        <Icon
          name='chevron-right'
          style={{
            paddingEnd: 10,
            opacity: 0.5,
          }}
          size={20} color={'black'}
        />
      </View>
      <View style={{
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center'
      }}>
        <Icon
          name='passport'
          style={{ marginStart: 10 }}
          size={20} color={'black'}
        />
        <Text style={{
          color: 'black',
          fontSize: 14,
          color: 'black',
          paddingStart: 10,
        }}>Giấy phép nguồn mở</Text>
        <View style={{ flex: 1 }} />
        <Icon
          name='chevron-right'
          style={{
            paddingEnd: 10,
            opacity: 0.5,
          }}
          size={20} color={'black'}
        />
      </View>
      <View style={{ width: '100%', marginTop: 40 }}>
        <Button title='ĐĂNG XUẤT'
          onPress={() => { logout() }}
        />
      </View>
    </ScrollView>
  </SafeAreaView>
}
const styles = StyleSheet.create({})
export default Setting;
