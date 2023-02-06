import React from 'react';
import SalonHeader from '../components/SalonHeader';
import {colors, parameters} from '../global/styles';
import {Button} from 'react-native-elements';
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
import MenuScreen from './MenuScreen';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SalonHomeScreen = ({navigation, route}) => {
  const {id, salon} = route.params;
  return (
    <View style={styles.container}>
      <SalonHeader id={id} navigation={navigation} />
      {salonData[id].discount && (
        <View style={styles.view1}>
          <Text style={styles.text1}>
            {salonData[id].discount}% POPUSTA NA UKUPNU CENU
          </Text>
        </View>
      )}
      <View style={styles.view1}>
        <Text style={styles.text2}>{salonData[id].salonName}</Text>
      </View>

      <View style={styles.view2}>
        <View style={styles.view3}>
          <Text style={styles.text1}>Adresa</Text>
          <Text style={styles.text3}>{salonData[id].address}</Text>
          <View style={styles.view4}>
            <Icon
              name="star"
              type="meterial-community"
              color={colors.grey3}
              size={15}
            />
            <Text style={styles.text4}>{salonData[id].averageReview}</Text>
            <Text style={styles.text5}>{salonData[id].numberOfReview}</Text>
            <Icon
              name="map-marker"
              type="meterial-community"
              color={colors.grey3}
              size={15}
            />
            <Text style={styles.text6}> {salonData[id].farAway} km</Text>
          </View>
          <MenuScreen id={id} navigation={navigation} />
          <View>
            <Button
              title="REZERVISI TERMIN"
              buttonStyle={parameters.styledButton}
              titleStyle={parameters.buttonTitle}
              onPress={() => {
                navigation.navigate('Calc');
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SalonHomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 20},

  view1: {
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text1: {color: 'green', fontSize: 14, fontWeight: 'bold'},

  view2: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 5,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },

  view3: {flex: 8},

  text2: {fontSize: 20, fontWeight: 'bold', color: colors.grey1},

  text3: {fontSize: 15, color: colors.grey3},

  view4: {flexDirection: 'row', alignItems: 'center', marginTop: 5},

  text4: {
    fontSize: 13,
    color: colors.grey3,
    marginLeft: 2,
  },

  text5: {
    fontSize: 13,
    color: colors.grey3,
    marginLeft: 2,
    marginRight: 5,
  },
  text6: {
    fontSize: 13,
    color: colors.grey3,
    marginLeft: 0,
  },

  view5: {flex: 3, alignItems: 'center'},

  text6: {fontSize: 15, fontWeight: 'bold', color: colors.grey1},

  view7: {
    width: 40,
    height: 40,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'space-around',
  },

  text7: {fontSize: 16, fontWeight: 'bold', color: colors.black, marginTop: 5},

  text8: {fontSize: 13, color: colors.black, marginBottom: 5},

  view8: {flex: 3, alignItems: 'center'},

  text9: {fontSize: 15, fontWeight: 'bold', color: colors.cardbackground},

  view9: {
    width: 40,
    height: 40,
    backgroundColor: colors.buttons,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'space-around',
  },

  text10: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.cardbackground,
    marginTop: 5,
  },

  text11: {fontSize: 13, color: colors.cardbackground, marginBottom: 5},

  view10: {elevation: 10, backgroundColor: colors.pagebackground},

  view11: {
    backgroundColor: colors.buttons,
    height: 50,
    alignContent: 'center',
    marginBottom: 0,
    justifyContent: 'center',
  },

  view12: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text12: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.cardbackground,
  },

  view13: {
    borderWidth: 1,
    marginRight: 10,
    borderColor: colors.cardbackground,
    borderRadius: 6,
    paddingBottom: 2,
  },

  text13: {
    paddingHorizontal: 3,
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.cardbackground,
  },

  tab: {
    paddingTop: 0,
    backgroundColor: colors.buttons,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  tabContainer: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },

  tabLabel: {fontWeight: 'bold', color: colors.cardbackground},

  tabStyle: {width: SCREEN_WIDTH / 4, maxHeight: 45},

  view14: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.buttons,
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 25,
  },

  text14: {
    fontWeight: 'bold',
    marginLeft: 40,
    color: colors.black,
    fontSize: 18,
  },

  view15: {marginTop: 5, paddingBottom: 20},
});
