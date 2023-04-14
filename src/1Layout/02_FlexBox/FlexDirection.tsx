import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';

export default class FlexDirection extends Component {
  render() {
    return (
      // View只会显示固定长度
      // ScrollView支持滚动，多长都滚动

      <View>
        <Text style={[styles.h2]}>主轴方向</Text>
        <ScrollView>
          <Text style={[styles.h3]}>FlexDirection:'column'(默认)</Text>
          <View style={[styles.container]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>FlexDirection:'column-reverse'</Text>
          <View style={[styles.container, styles.flexColumnReverse]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>FlexDirection:'row'</Text>
          <View style={[styles.container, styles.flexRow]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>FlexDirection:'row-reverse'</Text>
          <View style={[styles.container, styles.flexRowReverse]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  itemBase: {
    height: 30,
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
    height: 150,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumnReverse: {
    flexDirection: 'column-reverse',
  },
  flexRowReverse: {
    flexDirection: 'row-reverse',
  },
});
