import React from 'react';
import {Modal, StyleSheet, Touchable, View} from 'react-native';
import {Button, Icon, Text} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SalonCard from '../components/SalonCard';
import {colors} from '../global/styles';

class ReservationScreen extends React.Component {
  state = {
    show: false,
  };
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  onPress2 = () => {
    this.setState({show: true});
  };

  closeModal = () => {
    this.setState({show: false});
  };

  render() {
    return (
      <View>
        <Text>Moje rezervacije</Text>
        <View>
          <SalonCard></SalonCard>
          <View style={styles.view2}>
            <TouchableOpacity
              onPress={onPress1 => {
                this.props.navigation.navigate('Calc');
              }}>
              <Icon
                name="lead-pencil"
                type="material-community"
                // color={colors.grey2}
                size={22}
                iconStyle={{
                  marginTop: 3,
                }}
              />

              <Text>Izmeni</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPress2}>
              <Icon
                name="delete"
                type="material-community"
                // color={colors.grey2}
                size={22}
                iconStyle={{
                  marginTop: 3,
                }}
              />
              <Text>Otkazi</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal transparent={true} visible={this.state.show}>
          <View
            style={{
              backgroundColor: '#000000aa',
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#ffffff',
                width: 300,
                height: 200,
                margin: 50,
                padding: 40,
                borderRadius: 20,
              }}>
              <Text style={{fontSize: 20, alignSelf: 'center'}}>
                Sigurno otkazi termin?
              </Text>
              <View
                style={{
                  flex: 3,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 40,
                }}>
                <Button
                  title="DA"
                  buttonStyle={styles.button2}
                  titleStyle={styles.title2}
                  onPress={this.closeModal}></Button>
                <Button
                  title="NE"
                  buttonStyle={styles.button2}
                  titleStyle={styles.title2}
                  onPress={this.closeModal}>
                  {' '}
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
export default ReservationScreen;

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 20},

  view2: {
    flexDirection: 'row',
    marginBottom: 5,
    marginHorizontal: 40,
    justifyContent: 'space-around',
  },
  button2: {
    backgroundColor: colors.buttons,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.cardbackground,
    height: 40,
    paddingHorizontal: 20,
    // width:'100%'
  },

  title2: {
    color: colors.cardbackground,
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
