import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

export default class index extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 50, color: 'red'}}>内置样式</Text>
        <Text style={[styles.h1]}>对象样式A</Text>
        <Text style={[styles.h2]}>对象样式B</Text>

        <Text>Hello World</Text>
      </View>
    );
  }
}

// 使用rnc可以快读的创建有样式的模板
// 样式过大会导致应用闪退，但是其它都正常

const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
