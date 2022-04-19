import React from 'react';
import {Text, View, Animated, ImageBackground} from 'react-native';
import {HeaderComponent} from '../../common';
import {images, strings} from '../../constants';
import styles from './style';

const Decay_animation = ({navigation}: any) => {
  const positon = new Animated.ValueXY({x: 0, y: 0});
  Animated.decay(positon, {
    velocity: 0.5,
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
          head={strings.decayAnimation}
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

export default Decay_animation;
