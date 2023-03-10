import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {Button} from 'react-native-elements';
const jsonData = {
  slots: {
    slot1: '9:00am to 9:30am',
    slot2: '9:30am to 10:00am',
    slot3: '10:00am to 10:30am',
    slot4: '10:30am to 11:00am',
    slot5: '11:00am to 11:30am',
    slot6: '11:30am to 12:00pm',
  },
};
export default class Slot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _onPressBack() {
    const {goBack} = this.props.navigation;
    goBack();
  }
  _bookSlot(status, key, value) {
    const month = this.state.bookingDate.month;
    const date = this.state.bookingDate.day;
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    let userDataJson = {};
    if (status) userDataJson[key] = uid;
    else userDataJson[key] = null;

    firebase
      .database()
      .ref('users')
      .child(uid)
      .child('appointments')
      .child(month)
      .child(date)
      .update(userDataJson);
  }
  render() {
    let _this = this;
    const slots = jsonData.slots;
    const slotsarr = Object.keys(slots).map(function (k) {
      return (
        <View key={k} style={{margin: 5}}>
          <Button
            countCheck={0}
            onColor={'green'}
            effect={'pulse'}
            title={slots[k]}
            _onPress={status => _this._bookSlot(status, k, slots[k])}
          />
        </View>
      );
    });
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View>
          <TouchableOpacity onPress={() => this._onPressBack()}>
            <Text>Back</Text>
          </TouchableOpacity>
          <Text></Text>
          <Text></Text>
        </View>
        {slotsarr}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
