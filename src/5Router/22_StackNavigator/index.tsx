import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationProp} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const HomeScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}): JSX.Element => {
  return (
    <View style={styles.Screen}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate('Details');
        }}
        title="跳转详情页"
      />
    </View>
  );
};

const DetailsScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}): JSX.Element => {
  return (
    <View style={styles.Screen}>
      <Text>Details Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate('Home');
        }}
        title="回到首页"
      />
    </View>
  );
};

export default class index extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Home" //设置默认页面
        screenOptions={
          {headerShown: true} //显示头部
        }>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '首页',
            headerStyle: {backgroundColor: 'tomato'},
            headerRight: () => (
              <TouchableOpacity>
                <Text>Hello</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
