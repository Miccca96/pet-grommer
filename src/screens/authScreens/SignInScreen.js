import React, {useState, useRef, useContext} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Alert,
} from 'react-native';
import {colors, parameters, title} from '../../global/styles';

import {Button, SocialIcon} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import {Formik} from 'formik';
import Header from '../../components/Header';
import SignUpScreen from './SignUpScreen';
import {AuthStack, ClientTabs} from '../../navigation';

export default function SignInScreen({navigation}) {
  const [TextInput2Fossued, setTextInput2Fossued] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header title="Moj nalog" type="arrow-left" />
      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={title}>Uloguj se</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Molim vas unesite vas email i lozinku</Text>
        <Text style={styles.text1}>ili kreirajte novi nalog</Text>
      </View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          navigation.navigate('HomeScreen');
        }}>
        {props => (
          <View>
            <View style={{marginTop: 20}}>
              <View>
                <TextInput
                  style={styles.TextInput1}
                  placeholder="Email"
                  ref={textInput1}
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                />
              </View>

              <View style={styles.TextInput2}>
                <TextInput
                  style={{flex: 1}}
                  placeholder="Lozinka"
                  ref={textInput2}
                  onFocus={() => {
                    setTextInput2Fossued(false);
                  }}
                  onBlur={() => {
                    setTextInput2Fossued(true);
                  }}
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                />

                <Icon
                  name="visibility-off"
                  iconStyle={{color: colors.grey3}}
                  type="material"
                  style={{marginRight: 10}}
                />
              </View>
            </View>

            <View style={{marginHorizontal: 20, marginTop: 30}}>
              <Button
                title="Uloguj se"
                buttonStyle={parameters.styledButton}
                titleStyle={parameters.buttonTitle}
                onPress={props.handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>

      {/*ovde moze biti za forgot password*/}
      <View style={{alignItems: 'center', marginTop: 30, marginBottom: 30}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>ILI</Text>
      </View>
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <SocialIcon
          title="Prijavi se preko Facebook-a"
          button
          type="facebook"
          style={styles.SocialIcon}
          onPress={() => {}}></SocialIcon>
      </View>
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <SocialIcon
          title="Prijavi se preko Google-a"
          button
          type="google"
          style={styles.SocialIcon}
          onPress={() => {}}></SocialIcon>
      </View>
      <View style={{alignItems: 'flex-end', marginHorizontal: 20}}>
        <Button
          title="Kreiraj nalog"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text1: {
    color: colors.grey3,
    fontSize: 16,
  },

  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },

  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },

  SocialIcon: {
    borderRadius: 12,
    height: 50,
  },

  createButton: {
    backgroudColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    paddingHorizontal: 20,
  },

  createButtonTitle: {
    color: '#ff8c52',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
