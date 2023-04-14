import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';

export default class JustifyContent extends Component {
  render() {
    return (
      <View>
        <Text style={[styles.h2]}>项目在主轴的对齐方式</Text>
        <ScrollView>
          <Text style={[styles.h3]}>justifyContent:'flex-start'</Text>
          <View
            style={[
              styles.container,
              styles.flexRow,
              styles.justifyContentFlexStart,
            ]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>justifyContent:'center'</Text>
          <View
            style={[
              styles.container,
              styles.flexRow,
              styles.justifyContentCenter,
            ]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>justifyContent:'flex-end'</Text>
          <View
            style={[
              styles.container,
              styles.flexRow,
              styles.justifyContentFlexEnd,
            ]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>justifyContent:'space-around'</Text>
          <View
            style={[
              styles.container,
              styles.flexRow,
              styles.justifyContentSpaceAround,
            ]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>justifyContent:'space-evenly'</Text>
          <View
            style={[
              styles.container,
              styles.flexRow,
              styles.justifyContentSpaceEvenly,
            ]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>
          <Text style={[styles.h3]}>justifyContent:'space-between'</Text>
          <View
            style={[
              styles.container,
              styles.flexRow,
              styles.justifyContentSpaceBetween,
            ]}>
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
  flexRow: {
    flexDirection: 'row',
  },
  justifyContentFlexStart: {
    justifyContent: 'flex-start',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentFlexEnd: {
    justifyContent: 'flex-end',
  },
  justifyContentSpaceAround: {
    justifyContent: 'space-around',
  },
  justifyContentSpaceEvenly: {
    justifyContent: 'space-evenly',
  },
  justifyContentSpaceBetween: {
    justifyContent: 'space-between',
  },
});
