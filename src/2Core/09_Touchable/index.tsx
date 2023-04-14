import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {Component} from 'react';

export default class index extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text>测试触发</Text>
        <TouchableHighlight onPress={() => console.log('触碰高亮显示')}>
          <View style={[styles.item]}>
            <Text>触碰高亮</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={() => console.log('触碰透明变化')}>
          <View style={[styles.item]}>
            <Text>触碰透明变化</Text>
          </View>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={() => console.log('触碰无效果')}>
          <View style={[styles.item]}>
            <Text>触碰无效果</Text>
          </View>
        </TouchableWithoutFeedback>
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
  item: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
});
