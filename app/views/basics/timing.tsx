import React, {useEffect} from 'react';
import {Text, View, Animated, ImageBackground} from 'react-native';
import {HeaderComponent} from '../../common';
import {images, strings} from '../../constants';
import styles from './style';
const Timing_animation = ({navigation}: any) => {
  const positon = new Animated.ValueXY({x: 0, y: 0});
  Animated.timing(positon, {
    toValue: {x: 300, y: 400},
    duration: 5000,
    useNativeDriver: true,
    //To use nativeDriver elements
  }).start();

  return (
    <ImageBackground
      source={images.background}
      style={styles.container}
      imageStyle={styles.backgroundImage}>
      <View style={styles.innerContainer}>
        <HeaderComponent
          navigation={navigation}
          head={strings.timingAnimation}
        />
        <Animated.View
          style={[
            {
              transform: [{translateX: positon.x}, {translateY: positon.y}],
            },
            styles.animatableView,
          ]}>
          <Text style={styles.labelText}>{strings.successiveTechnologies}</Text>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

export default Timing_animation;
