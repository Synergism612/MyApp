# 路由与导航

## 简介

* RN中的路由通过React-Navigation完成
  * React中通过React-Router实现路由
  * RN0.44之前，React-Navigation在核心维护，0.44之后独立维护
* 本节使用React-Navigation最新版本
* 官网 <https://reactnavigation.org/>
* 中文网 <https://www.reactnavigation.org.cn/>

## 安装

* 安装路由核心

  ``` shell
  npm install @react-navigation/native
  ```

* 安装路由依赖

  * Expo托管项目安装最新兼容版本

    ```shell
    npx expo install react-native-screens react-native-safe-area-context
    ```

  * 裸项目安装

    ```shell
    npm install react-native-screens react-native-safe-area-context
    ```

* 将应用包在`NavigationContainer`中

  ```ts
  import * as React from 'react';

  import { NavigationContainer } from '@react-navigation/native';

  export default function App() {
    return (
      <NavigationContainer>{/*Rest of your app code*/}</NavigationContainer>
    );
  }
  ```
