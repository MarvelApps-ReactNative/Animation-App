import React, {useRef} from 'react';
import {
  Animated,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './style';
import {HeaderComponent} from '../../common';
import {images, strings} from '../../constants';

const FadeInOutOnPress = ({navigation}: any) => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ImageBackground
      source={images.background}
      style={styles.container}
      imageStyle={styles.backgroundImage}>
      <HeaderComponent
        navigation={navigation}
        head={strings.fadeInFadeOutAnimation}
      />
      <View style={styles.innerContainer}>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              // Bind opacity to animated value
              opacity: fadeAnim,
            },
          ]}>
          <Text style={styles.fadingText}>{strings.fadingView}</Text>
        </Animated.View>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={() => fadeIn()} style={styles.fadeButton}>
            <Text style={styles.buttonText}>{strings.fadeInButton}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => fadeOut()} style={styles.fadeButton}>
            <Text style={styles.buttonText}>{strings.fadeOutButton}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default FadeInOutOnPress;
