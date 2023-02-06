import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon, book} from 'react-native-elements';
import {TouchableOpacity} from 'react-native';
import {colors, parameters} from '../global/styles';

export default function HomeHeader({navigation, OnPressIcon}) {
  //   const BookIcon = book(Icon);
  return (
    <View style={styles.header}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 15,
        }}>
        <Icon
          type="material-community"
          name="menu"
          color={colors.cardbackground}
          size={32}
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            color: colors.cardbackground,
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Pet Groom
        </Text>
      </View>
      <TouchableOpacity onPress={OnPressIcon}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 15,
          }}>
          <Icon
            type="ant-design"
            name="book"
            size={35}
            color={colors.cardbackground}
            OnPress={() => {
              navigation.navigate('ReservationScreen');
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    justifyContent: 'space-between',
  },
});
