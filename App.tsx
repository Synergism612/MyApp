import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
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
// import Index from './src/2Core/12_FlatList';
// import Index from './src/2Core/13_Animated';
// import Index from './src/4Custom/21_Loading';

// import Index from './src/5Router/22_StackNavigator';
import Index from './src/5Router/23_BottomTab';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    );
  }
}
