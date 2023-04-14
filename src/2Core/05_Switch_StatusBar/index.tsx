import {Text, StyleSheet, View, StatusBar, Switch} from 'react-native';
import React, {Component} from 'react';

type propsType = {};

type stateType = {
  hideStatusBar: boolean;
};

export default class index extends Component<propsType, stateType> {
  constructor(props: propsType) {
    super(props);
    this.state = {
      hideStatusBar: false,
    };
  }

  toggleStatusBar = (): void => {
    this.setState({
      hideStatusBar: !this.state.hideStatusBar,
    });
    console.log(this.state.hideStatusBar);
  };

  render() {
    return (
      <View style={[styles.container]}>
        <Text>测试开关</Text>
        <StatusBar
          hidden={this.state.hideStatusBar}
          backgroundColor={'red'} //这个只在Android应用下有效
          barStyle={'default'} //图标颜色 黑/白/默认
        />

        <Switch
          trackColor={{false: '#999', true: '#666'}} //背景色，可以设置真假不同色
          thumbColor={this.state.hideStatusBar ? 'blue' : 'white'} //按钮色
          value={this.state.hideStatusBar}
          onChange={this.toggleStatusBar}
        />
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
});
