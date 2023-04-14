import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Alert,
} from 'react-native';
import React, {Component} from 'react';

const DATA = [
  {
    title: '魏国',
    data: ['曹操', '司马懿', '张辽'],
  },
  {
    title: '蜀国',
    data: ['刘备', '关羽', '张飞'],
  },
  {
    title: '吴国',
    data: ['孙权', '周瑜', '黄盖'],
  },
];

const Item = (item: {title: string}): JSX.Element => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

const ItemSeparator = (): JSX.Element => {
  return <View style={[styles.border]} />;
};

const ListEmpty = (): JSX.Element => {
  return <Text>空空如也！</Text>;
};

const ListHeader = (): JSX.Element => {
  return <Text>三国英雄榜</Text>;
};

const ListFooter = (): JSX.Element => {
  return <Text>没有更多了</Text>;
};

type propsType = {};

type stateType = {
  isFresh: boolean;
};

export default class Index extends Component<propsType, stateType> {
  constructor(props: propsType) {
    super(props);
    this.state = {isFresh: false};
  }
  //开启加载动画
  loadData = (): void => {
    this.setState({
      isFresh: true,
    });

    //模拟请求数据
    setTimeout(() => {
      this.setState({
        isFresh: false,
      });
      Alert.alert('下拉刷新');
    }, 2000);
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA} // 数据源
          keyExtractor={(item, index) => item + index} // 主键
          renderItem={({item}) => <Item title={item} />} // 元素渲染
          renderSectionHeader={({section: {title}}): JSX.Element => {
            return <Text style={styles.header}>{title}</Text>; // 头部
          }}
          ItemSeparatorComponent={ItemSeparator} // 声明项目之间的分隔符
          ListEmptyComponent={ListEmpty} // 数据为空时输出
          //下拉刷新
          refreshing={this.state.isFresh} // 显示下拉刷新
          onRefresh={this.loadData} //下拉刷新时显示
          //上拉刷新
          onEndReachedThreshold={0.1} //距离底部多久刷新  0.1距离底部10%
          onEndReached={() => {
            Alert.alert('到底了');
          }} //触底时触发
          ListHeaderComponent={ListHeader} //列表头部
          ListFooterComponent={ListFooter} //列表底部
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
});
