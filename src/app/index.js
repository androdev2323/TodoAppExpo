import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ScreenHeight, ScreenWidth } from '../utils/constants';
import { resetAndNavigate } from '../utils/Helpers';
const Logo = require('../assets/icon.png');

const Main = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf')
  });

  const [hasNavigated, setHasNavigated] = useState(false);
  
  useEffect(() => {
    if (loaded && !hasNavigated) {
      const timeout = setTimeout(() => {
        resetAndNavigate("/home");
        setHasNavigated(true);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [loaded, hasNavigated]);

  return (
    <View style={style.container}>
      <Image source={Logo} style={style.img} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: ScreenWidth * 0.3,  // Fixed capitalization of 'width'
    height: ScreenHeight * 0.12,
  }
});

export default Main;  // Component names should start with capital letter