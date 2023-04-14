import {Text, StyleSheet, View, Alert, Button} from 'react-native';
import React, {Component} from 'react';

const createTwoButtonAlert = (): void => {
  Alert.alert('警告标题', '警告内容', [
    {
      text: '取消',
      onPress: () => console.log('Cancel'),
      style: 'cancel',
    },
    {
      text: '确认',
      onPress: () => console.log('OK'),
      style: 'default',
    },
  ]);
};

const createThreeButtonAlert = (): void => {
  Alert.alert('更新提示', '发现新版本，是否现在更新', [
    {
      text: '稍后更新',
      onPress: () => console.log('Again'),
      style: 'default',
    },
    {
      text: '取消',
      onPress: () => console.log('Cancel'),
      style: 'cancel',
    },
    {
      text: '确认',
      onPress: () => console.log('OK'),
      style: 'default',
    },
  ]);
};

export default class index extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text>按钮测试</Text>

        <Button
          title="alert"
          onPress={() => {
            //报错是eslint禁用了
            // alert('我是一个按钮');
          }}
        />

        <Button
          title="Alert.alert"
          onPress={() => {
            Alert.alert('我是一个按钮');
          }}
          color={'red'}
        />

        <Button
          title="两个按钮"
          onPress={createTwoButtonAlert}
          color={'green'}
        />

        <Button
          title="三个按钮"
          onPress={createThreeButtonAlert}
          color={'tomato'}
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
