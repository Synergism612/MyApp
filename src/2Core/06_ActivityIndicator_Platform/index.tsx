import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  Platform,
  Alert,
} from 'react-native';
import React, {Component} from 'react';

export default class index extends Component {
  constructor() {
    super({});
    //判断系统
    if (Platform.OS === 'ios') {
      Alert.alert('当前应用是 IOS');
    } else {
      Alert.alert('当前应用是 Android');
    }
  }
  render() {
    return (
      <View style={[styles.container]}>
        <Text>加载测试</Text>
        <ActivityIndicator
          color={'blue'} //颜色
          size={'large'} //大小
        />
        <ActivityIndicator
          color={'#00d0ff'} //颜色
          size={70} //数字大小只在Android应用有效
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
