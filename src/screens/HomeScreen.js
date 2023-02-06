import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {ListItemBase} from 'react-native-elements/dist/list/ListItemBase';
import HomeHeader from '../components/HomeHeader';
import SalonCard from '../components/SalonCard';
import {salonData} from '../global/Data';
import {colors, parameters} from '../global/styles';
import ReservationScreen from './ReservationScreen';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <HomeHeader
        OnPressIcon={() => {
          navigation.navigate('ReservationScreen');
        }}
      />

      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <TouchableOpacity>
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Saloni za sisanje pasa</Text>
          </View>
        </TouchableOpacity>
        <View>
          <FlatList
            style={{marginTop: 10, marginBottom: 10}}
            horizontal={true}
            data={salonData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View>
                <SalonCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  salonName={item.salonName}
                  farAway={item.farAway}
                  address={item.address}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                  OnPressSalonCard={() => {
                    navigation.navigate('SalonHomeScreen', {
                      id: item.id,
                      salon: item.salonName,
                    });
                  }}
                />
              </View>
            )}
          />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Saloni u tvojoj blizini</Text>
        </View>
        <View style={{width: SCREEN_WIDTH, paddingTop: 10}}>
          {salonData.map(item => (
            <View key={item.id} style={{paddingBottom: 20}}>
              <SalonCard
                screenWidth={SCREEN_WIDTH * 0.95}
                images={item.images}
                salonName={item.salonName}
                farAway={item.farAway}
                address={item.address}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
                OnPressSalonCard={() => {
                  navigation.navigate('SalonHomeScreen', {
                    id: item.id,
                    salon: item.salonName,
                  });
                }}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: colors.grey2,
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  headerTextView: {
    backgroundColor: colors.grey5,
    paddingVertical: 3,
  },
});
