import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {colors, images} from '../../constants';
import styles from './style';

interface InputProps {
  navigation: any;
  head: string;
}

const HeaderComponent = (props: InputProps) => {
  const {navigation, head} = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftRightContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.backIcon} style={styles.backIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.headText}>{head}</Text>

      <View style={styles.leftRightContainer}></View>
    </View>
  );
};

export default HeaderComponent;
