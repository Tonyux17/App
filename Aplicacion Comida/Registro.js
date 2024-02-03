import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator, TextInput, Dimensions } from 'react-native';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
  });
};
const deviceWidth = Dimensions.get('window').width;

const RegistrationScreen = ({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    fetchFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <View style={styles.registrationScreen}>
    <Image style={styles.mainLogo} source={require('./assets/master.png')} />
    
    <TextInput style={styles.inputField} placeholder="Email" />
    <TextInput style={styles.inputField} placeholder="Password" secureTextEntry />
    <TextInput style={styles.inputField} placeholder="Confirm Password" secureTextEntry />
      
    <TouchableOpacity style={styles.loginButton}>
      <Text style={styles.loginButtonText}>Sign up</Text>
    </TouchableOpacity>

    <View style={styles.separator}>
      <View style={styles.line} />
      <Text style={styles.orText}>OR</Text>
      <View style={styles.line} />
    </View>

    <TouchableOpacity style={styles.googleLoginButton}>
      <Image style={styles.socialIcon} source={require('./assets/google.png')} />
      <Text style={styles.socialLoginText}>Sign up with Google</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.facebookLoginButton}>
      <Image style={styles.socialIcon} source={require('./assets/facebook.png')} />
      <Text style={styles.socialLoginText}>Sign up with Facebook</Text>
    </TouchableOpacity>

    <View style={styles.signUpContainer}>
      <Text style={styles.signUpText}>Already have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signUpButtonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
  registrationScreen: {
    backgroundColor: '#FFF9EC',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  socialIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  mainLogo: {
    width: 180,  
    height: 180, 
    marginRight: 10,
    marginTop: 40,  
    marginBottom: 20, 
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#FFC107',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    width: deviceWidth * 0.9,
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#FFFDE7',
  },
  loginButton: {
    backgroundColor: '#FFA000',
    borderRadius: 20,
    paddingVertical: 15,
    width: deviceWidth * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10, 
  },
  loginButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#FFFFFF',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    width: deviceWidth * 0.9,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'grey',
  },
  orText: {
    fontFamily: 'Poppins-Regular',
    color: 'grey',
    paddingHorizontal: 10,
  },
  socialLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 20,
    paddingVertical: 15,
    width: deviceWidth * 0.9,
    marginTop: 10,
  },
  socialLoginText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, 
  },
  signUpText: {
    fontFamily: 'Poppins-Regular',
    color: 'grey',
    fontSize: 16,
  },
  signUpButtonText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    marginLeft: 5,
  },
  forgotPassword: {
    fontFamily: 'Poppins-Regular',
    color: 'grey',
    fontSize: 16,
    alignSelf: 'flex-end',
    marginRight: '5%',
    marginVertical: 10, 
  },
  googleLoginButton: {
    backgroundColor: '#fff', 
    borderColor: '#db4a39', 
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 15,
    width: deviceWidth * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  facebookLoginButton: {
    backgroundColor: '#fff', 
    borderColor: '#3b5998', 
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 15,
    width: deviceWidth * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  }
});

export default RegistrationScreen;


