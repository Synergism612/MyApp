import {Text, StyleSheet, View, Button} from 'react-native';
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationProp} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

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
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = '';
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            }
            if (route.name === 'Details') {
              iconName = focused ? 'apps' : 'apps-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator>
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
