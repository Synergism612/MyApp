import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  Button,
} from 'react-native';
import React, {Component} from 'react';

type propsType = {};

type stateType = {
  username: string;
  password: string;
};

const login = (input: stateType): void => {
  console.log(input);
};

export default class index extends Component<propsType, stateType> {
  constructor(props: propsType) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  render() {
    return (
      <View style={[styles.container]}>
        <Text>测试输入框</Text>
        <TextInput
          style={[styles.input]}
          placeholder="请输入用户名"
          value={this.state.username}
          onChangeText={val => {
            this.setState({
              username: val,
            });
          }}
        />
        <TextInput
          style={[styles.input]}
          placeholder="请输入密码"
          secureTextEntry //密码隐藏
          value={this.state.password}
          onChangeText={val => {
            this.setState({
              password: val,
            });
          }}
        />

        <TextInput
          style={[styles.input]}
          placeholder="请输入手机号"
          keyboardType="number-pad" //呼出的键盘类型
        />

        <TextInput
          style={[styles.input]}
          placeholder="请输入个人介绍"
          multiline //文本域
          numberOfLines={5}
          textAlignVertical="top" //文本排列，统一双端
        />
        <View>
          <Button title="登录" onPress={() => login(this.state)} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: Dimensions.get('window').width - 20,
    margin: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
});
