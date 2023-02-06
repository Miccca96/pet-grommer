import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {colors} from '../global/styles';
import {salonData} from '../global/Data';
import {Icon} from 'react-native-elements';

export default function SalonHeader({navigation, id}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={{uri: salonData[id].images}}></ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {height: 150},
  image: {borderTopLeftRadius: 5, borderTopRightRadius: 5},
  view1: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  view2: {
    margin: 10,
    width: 40,
    height: 40,
    backgroundColor: colors.cardbackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  view3: {
    margin: 0,
    width: 40,
    height: 40,
    backgroundColor: colors.cardbackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  view4: {
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
