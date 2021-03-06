import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {Colors} from '../assets/constants';
import Card from '../components/Card';
import {ApiCaller} from '../service/apiCaller';

class Airlines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loading: true,
    };
    this.page = 0;
  }

  componentDidMount() {
    this.getList(this.page);
  }
  setLoader(isLoaded) {
    this.setState({
      loading: isLoaded,
    });
  }
  async getList(pageNo) {
    const {list} = this.state;
    this.setLoader(true);
    try {
      const {data} = await ApiCaller.getList(pageNo);
      console.log(data, 'check resopnse');
      const newList = list.concat(data);
      this.setState({
        list: newList,
      });
      this.setLoader(false);
    } catch (error) {
      alert('Something went wrong.');
    }
  }

  renderList = ({item, index}) => (
    <Card item={item} navigation={this.props.navigation} />
  );

  reachedToEnd = () => {
    this.page += 1;
    this.getList(this.page);
  };
  render() {
    const {loading, list} = this.state;
    console.log(list, 'checking list');
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={list}
          renderItem={this.renderList}
          onEndReached={this.reachedToEnd}
          onEndReachedThreshold={0.5}
        />
        {loading && (
          <ActivityIndicator
            style={{
              position: 'absolute',
              bottom: '10%',
              alignSelf: 'center',
            }}
            color={Colors.BLACK}
          />
        )}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 15,
  },
});
export default Airlines;
