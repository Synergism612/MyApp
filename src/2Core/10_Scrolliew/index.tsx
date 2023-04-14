import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import React, {Component} from 'react';

export default class index extends Component {
  render() {
    return (
      <View>
        <StatusBar
          //去设置应用全屏显示
          // translucent={true}
          hidden={true}
          // backgroundColor={'transparent'}
        />
        <ScrollView
          style={[styles.scrollView]} //外框样式
          horizontal
          showsHorizontalScrollIndicator={false} //隐藏水平滚动条
        >
          <Text style={[styles.nav]}>新闻</Text>
          <Text style={[styles.nav]}>新闻</Text>
          <Text style={[styles.nav]}>新闻</Text>
          <Text style={[styles.nav]}>新闻</Text>
          <Text style={[styles.nav]}>新闻</Text>
          <Text style={[styles.nav]}>新闻</Text>
          <Text style={[styles.nav]}>新闻</Text>
          <Text style={[styles.nav]}>新闻</Text>
          <Text style={[styles.nav]}>新闻</Text>
          <Text style={[styles.nav]}>新闻</Text>
          <Text style={[styles.nav]}>新闻</Text>
          <Text style={[styles.nav]}>新闻</Text>
        </ScrollView>
        <ScrollView
          style={[styles.scrollView]} //外框样式
          contentContainerStyle={[styles.scrollViewContent]} //内容样式
          showsVerticalScrollIndicator={false} //隐藏垂直滚动条
        >
          <Text style={[styles.text]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius labore
            odio assumenda commodi quasi cupiditate consectetur vel animi quae
            dolorum amet ullam quisquam iste beatae odit fugit facilis ex
            dolores nulla incidunt architecto facere, deleniti alias provident.
            Esse maxime ad minus dolore, corporis voluptates dolores vero rerum
            pariatur ipsum nesciunt enim vitae, dolor voluptas harum porro ut!
            Ut officia, voluptatibus deleniti veritatis itaque facere, explicabo
            autem assumenda exercitationem eaque voluptates quibusdam, dicta
            laudantium doloribus voluptate excepturi ab dolorum totam aut
            repellendus? Illo voluptates nulla atque id architecto. Labore
            officia dolor, soluta consequuntur ipsa, at qui, ea blanditiis
            reprehenderit delectus repudiandae?
          </Text>
          <View style={{height: Platform.OS === 'ios' ? 0 : 110}}></View>
        </ScrollView>
      </View>
    );
  }
}
// 最后的View用于解决Android底部显示不全的问题
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ddd',
    margin: 20,
  },
  scrollViewContent: {
    margin: 20,
  },
  text: {
    fontSize: 30,
  },
  nav: {
    margin: 10,
    height: 50,
    fontSize: 30,
  },
});
