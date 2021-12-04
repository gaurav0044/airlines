import React from 'react';
import {View, Text} from 'react-native';
import styles from '../assets/styles';
const TitleLabel = ({title,label}) => (
  <View
    style={styles.titleLabelCon}>
    <Text
      style={styles.title}>
      {title}
    </Text>
    <Text
      style={{
        fontSize: 15,
        marginLeft: 5,
      }}>
      {label}
    </Text>
  </View>
);
export default TitleLabel;
