import React, {Component} from 'react';
// import Index from './src/1Layout/01_StyleSheet';
// import Index from './src/1Layout/02_FlexBox/FlexDirection';
// import Index from './src/1Layout/02_FlexBox/JustifyContent';
// import Index from './src/1Layout/02_FlexBox/AlignItems';
// import Index from './src/1Layout/03_Dimensions';

// import Index from './src/2Core/04_Alert_Button';
// import Index from './src/2Core/05_Switch_StatusBar';
// import Index from './src/2Core/06_ActivityIndicator_Platform';
// import Index from './src/2Core/07_Image';
// import Index from './src/2Core/08_TextInput';
// import Index from './src/2Core/09_Touchable';
// import Index from './src/2Core/10_Scrolliew';
// import Index from './src/2Core/11_SectionList';
import Index from './src/2Core/12_FlatList';
// import Index from './src/2Core/13_Animated';
// import Index from './src/4Custom/21_Loading';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Index} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
