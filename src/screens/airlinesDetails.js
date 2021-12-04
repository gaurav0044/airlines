import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../assets/constants';
import Card from '../components/Card';
import TitleLabel from '../components/TitleLable';

class AirlineDetails extends React.Component {
  render() {
    const {item}=this.props?.route?.params;
    return (
      <SafeAreaView style={styles.container}>
        <Card
          item={item}
        />
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
export default AirlineDetails;
