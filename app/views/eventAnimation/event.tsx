import React, {useRef} from 'react';
import {Animated, ImageBackground, PanResponder, View} from 'react-native';
import {HeaderComponent} from '../../common';
import {images, strings} from '../../constants';
import styles from './style';
const Event_animation = ({navigation}: any) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      {useNativeDriver: false},
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }, // Back to zero
      ).start();
    },
  });

  return (
    <ImageBackground
      source={images.background}
      style={styles.container}
      imageStyle={styles.backgroundImage}>
      <HeaderComponent navigation={navigation} head={strings.eventAnimation} />

      <View style={styles.innerContainer}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[pan.getLayout(), styles.box]}
        />
      </View>
    </ImageBackground>
  );
};

export default Event_animation;
