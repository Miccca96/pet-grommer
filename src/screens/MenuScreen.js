import React from 'react';
import SalonHeader from '../components/SalonHeader';
import {colors} from '../global/styles';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import {salonData} from '../global/Data';
import {Icon} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function MenuScreen({id, navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Usluge</Text>

        {salonData[id].specialData.map(items => (
          <View style={styles.view1}>
            <View style={styles.view2}>
              <Icon name="star" type="material-community" color="gold"></Icon>
              <Text style={styles.text1}>{items.title}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  view1: {paddingHorizontal: 10},
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: colors.grey5,
  },
  text1: {color: colors.grey3, fontSize: 18, fontWeight: 'bold'},
});
