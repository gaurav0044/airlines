import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {Colors} from '../assets/constants';
import TitleLabel from './TitleLable';
import styles from '../assets/styles';
class Card extends React.PureComponent {
  render() {
    const {item,navigation} = this.props;
    console.log(this.props.item, 'checking item');
    return (
      <Pressable 
        style={styles.cardCon}
        onPress={() => navigation.navigate("AirlineDetails",{
          item
        })}
        >
        <Image
          ref={ref=this.ref=ref}
          source={{
            uri: item?.airline[0]?.logo,
          }}
          style={styles.airLineLogo}
        />
        <TitleLabel title={'Person Name :'} label={item?.name} />
        <TitleLabel title={'Trips :'} label={item?.trips} />
        <TitleLabel title={'Airlines :'} label={item?.airline[0]?.name} />
        <TitleLabel title={'Country :'} label={item?.airline[0]?.country} />
        <Text style={styles.sloganText}>{item?.airline[0]?.slogan}</Text>
      </Pressable>
    );
  }
}

export default Card;
