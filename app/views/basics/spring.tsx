import React from 'react';
import {HeaderComponent} from '../../common';
import {Text, View, Animated, ImageBackground} from 'react-native';
import {images, strings} from '../../constants';
import styles from './style';

const Spring_animation = ({navigation}: any) => {
  const positon = new Animated.ValueXY({x: 0, y: 0});

  //friction: Controls "bounciness"/overshoot. Default 7.
  // tension: Controls speed. Default 40.
  // speed: Controls speed of the animation. Default 12.
  // bounciness: Controls bounciness. Default 8.
  Animated.spring(positon, {
    toValue: {x: 290, y: 400},
    // friction:9,
    // tension:3,
    speed: 1,
    bounciness: 20,
    useNativeDriver: true,
  }).start();
  return (
    <ImageBackground
      source={images.background}
      style={styles.container}
      imageStyle={styles.backgroundImage}>
      <View style={styles.innerContainer}>
        <HeaderComponent
          navigation={navigation}
          head={strings.springAnimation}
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
export default Spring_animation;
