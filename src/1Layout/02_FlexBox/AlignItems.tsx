import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';

export default class JustifyContent extends Component {
  render() {
    return (
      <View style={{height: '100%'}}>
        <Text style={[styles.h2]}>项目在交叉轴的对齐方式</Text>
        <ScrollView>
          <Text style={[styles.h3]}>algnItems:'flex-start'</Text>
          <View
            style={[
              styles.container,
              styles.flexRow,
              styles.alignItemsFlexStart,
            ]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>algnItems:'center'</Text>
          <View
            style={[styles.container, styles.flexRow, styles.alignItemsCenter]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>algnItems:'flex-end'</Text>
          <View
            style={[
              styles.container,
              styles.flexRow,
              styles.alignItemsFlexEnd,
            ]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>algnItems:'stretch'</Text>
          <View
            style={[
              styles.container,
              styles.flexRow,
              styles.alignItemsStretch,
            ]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>algnItems:'baseline'</Text>
          <View
            style={[
              styles.container,
              styles.flexRow,
              styles.alignItemsFBaseline,
            ]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase, {fontSize: 60}]}>关羽</Text>
            <Text style={[styles.itemBase, {fontSize: 40}]}>张飞</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
//该属性不定义元素高度才可以看到后两项的样式
const styles = StyleSheet.create({
  itemBase: {
    // height: 30,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#dfb',
    padding: 4,
    textAlign: 'center',
  },
  h2: {
    fontSize: 30,
    marginHorizontal: 10,
  },
  h3: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  container: {
    height: 100,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  flexRow: {
    flexDirection: 'row',
  },
  alignItemsFlexStart: {
    alignItems: 'flex-start',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsFlexEnd: {
    alignItems: 'flex-end',
  },
  alignItemsStretch: {
    alignItems: 'stretch',
  },
  alignItemsFBaseline: {
    alignItems: 'baseline',
  },
});
