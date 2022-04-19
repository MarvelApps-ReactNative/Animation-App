import React, {useEffect} from 'react';
import {View, Animated, ImageBackground} from 'react-native';
import {HeaderComponent} from '../../common';
import {images, strings} from '../../constants';
import styles from './style';

const Interpolation_demo = ({navigation}: any) => {
  const animationDemo = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animationDemo, {
      duration: 2000,
      toValue: 270,
      useNativeDriver: false,
    }).start();
  }, []);

  let backgroundColorD = () => {
    return animationDemo.interpolate({
      inputRange: [0, 100, 180, 285],
      outputRange: ['red', 'green', 'yellow', 'red'],
    });
  };
  return (
    <ImageBackground
      source={images.background}
      style={styles.container}
      imageStyle={styles.backgroundImage}>
      <View style={styles.innerContainer}>
        <HeaderComponent
          navigation={navigation}
          head={strings.interpolationAnimation}
        />
        <Animated.View
          style={[
            {
              backgroundColor: backgroundColorD(),
              transform: [
                {translateX: animationDemo},
                {
                  translateY: animationDemo.interpolate({
                    inputRange: [0, 80, 100, 180, 285],
                    outputRange: [0, 200, 300, 200, 0],
                  }),
                },
                {
                  scaleX: animationDemo.interpolate({
                    inputRange: [0, 80, 100, 180, 285],
                    outputRange: [1, 1.2, 1.5, 1.2, 1],
                  }),
                },
                {
                  scaleY: animationDemo.interpolate({
                    inputRange: [0, 80, 100, 180, 285],
                    outputRange: [1, 1.2, 1.5, 1.2, 1],
                  }),
                },
                {
                  rotate: animationDemo.interpolate({
                    inputRange: [0, 295],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
              opacity: animationDemo.interpolate({
                inputRange: [0, 150, 295],
                outputRange: [0, 0.5, 1],
              }),
            },
            styles.animatableView,
          ]}></Animated.View>
      </View>
    </ImageBackground>
  );
};

export default Interpolation_demo;
