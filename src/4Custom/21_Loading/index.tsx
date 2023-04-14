import {Text, StyleSheet, View, ActivityIndicator} from 'react-native';
import React, {Component} from 'react';

export default class index extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text>自写加载效果</Text>
        <View style={[styles.loading]}>
          <ActivityIndicator color="white" />
          <Text style={[styles.loadingTitle]}>加载中......</Text>
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
  loading: {
    backgroundColor: '#999',
    width: 150,
    height: 100,
    borderRadius: 20,
    padding: 20,
  },
  loadingTitle: {
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
  },
});
