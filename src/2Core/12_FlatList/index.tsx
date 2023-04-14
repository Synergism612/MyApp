import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

const DATA = [
  {
    id: '1',
    title: '头条',
  },
  {
    id: '2',
    title: '科技',
  },
  {
    id: '3',
    title: '体育',
  },
  {
    id: '4',
    title: '娱乐',
  },
  {
    id: '5',
    title: '军事',
  },
  {
    id: '6',
    title: '头条',
  },
  {
    id: '7',
    title: '科技',
  },
  {
    id: '8',
    title: '体育',
  },
  {
    id: '9',
    title: '娱乐',
  },
  {
    id: '10',
    title: '军事',
  },
];

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
  selectedID: string | null;
};

export default class Index extends Component<propsType, stateType> {
  constructor(props: propsType) {
    super(props);
    this.state = {isFresh: false, selectedID: null};
  }
  renderItem = (item: {id: string; title: string}): JSX.Element => {
    const backfroundColor =
      item.id === this.state.selectedID ? '#dfb' : '#f9c2ff';
    return (
      <TouchableOpacity
        style={[styles.item, {backgroundColor: backfroundColor}]}
        onPress={() => this.setState({selectedID: item.id})}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
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
        <FlatList
          data={DATA}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={item => item.id}
          // horizontal //是否开启水平
          initialScrollIndex={0} //跳转到第几条
          initialNumToRender={8} //指定初始渲染数量
          numColumns={1} //分咧展示，每行高度只能相同
          // inverted //反转展示
          extraData={this.state.selectedID} //需要更新的数据
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
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
});
