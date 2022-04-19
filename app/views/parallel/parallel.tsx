import React, {useRef} from 'react';
import {
  Animated,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {HeaderComponent} from '../../common';
import {images, strings} from '../../constants';
import styles from './style';
let {height, width} = Dimensions.get('window');

const Parellel_demo = ({navigation}: any) => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current; // 0 to 1 and 1 to 0
  const fadeAnim1 = useRef(new Animated.Value(1)).current;

  const perform = () => {
    fadeAnim.setValue(0);
    fadeAnim1.setValue(1);
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim1, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <ImageBackground
      source={images.background}
      style={styles.container}
      imageStyle={styles.backgroundImage}>
      <HeaderComponent
        navigation={navigation}
        head={strings.ParallelAnimation}
      />
      <View style={styles.innerContainer}>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim,
            },
          ]}>
          <Text style={styles.fadingText}>{strings.fadingView}</Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim1,
            },
          ]}>
          <Text style={styles.fadingText}>{strings.fadingView}</Text>
        </Animated.View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.clickMeButton}
            onPress={() => perform()}>
            <Text style={styles.clickeMeText}>{strings.clickMe}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Parellel_demo;
