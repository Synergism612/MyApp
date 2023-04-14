import {Text, StyleSheet, View, Button, Animated, Alert} from 'react-native';
import React, {Component} from 'react';

export default class index extends Component {
  state = {
    fadeAnim: new Animated.Value(0), //透明度为0
    moveAnim: new Animated.Value(0), //高度为0
  };

  fadeIn = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1, //目标值
      duration: 2000, //更新时间
      useNativeDriver: true, //启用原生动画，减少开销
    }).start(() => {
      Alert.alert('出现了！');
    });
  };

  fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0, //目标值
      duration: 2000, //更新时间
      useNativeDriver: true, //启用原生动画，减少开销
    }).start(() => {
      Alert.alert('消失了！');
    });
  };

  scanMove = () => {
    Animated.timing(this.state.moveAnim, {
      toValue: 200,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      this.state.moveAnim.setValue(0);
      this.scanMove();
    });
  };

  //生命周期函数：组件加载后执行
  componentDidMount() {
    this.scanMove();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>渐入渐出</Text>
        <View>
          <Animated.View
            style={[
              styles.fadingContainer,
              {
                opacity: this.state.fadeAnim, // 透明度绑定动画
              },
            ]}>
            <Text style={styles.fadingText}>Fading View!</Text>
          </Animated.View>
          <View style={styles.buttonRow}>
            <Button title="Fade In" onPress={this.fadeIn} />
            <Button title="Fade Out" onPress={this.fadeOut} />
          </View>
        </View>
        <Text>扫描效果</Text>
        <View style={[styles.scanContainer]}>
          <Animated.View
            style={[
              styles.border,
              {
                transform: [
                  {
                    translateY: this.state.moveAnim,
                  },
                ],
              },
            ]}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  scanContainer: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: 'green',
  },
  border: {
    borderWidth: 1,
    borderColor: 'red',
  },
});
