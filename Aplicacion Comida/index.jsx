import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const RegistrationScreen = () => {
  return (
    <View style={styles.registrationScreen}>
      <View style={styles.overlap}>
        <Text style={styles.textWrapper}>Email</Text>
      </View>
      <View style={styles.overlapGroup}>
        <Text style={styles.textWrapper}>Login</Text>
      </View>
      <Text style={styles.dontHaveAnAccount}>
        Don't have an account? <Text style={styles.signUpText}>Sign up</Text>
      </Text>
      <View style={styles.rectangle} />
      <Text style={styles.forgotPassword}>Forget Password?</Text>
      <Text style={styles.orText}>OR</Text>
      {/* Aquí pondrías el resto de tus imágenes y elementos de texto */}
      <TouchableOpacity style={styles.googleLoginButton}>
        <Text style={styles.loginText}>Login with Google</Text>
        {/* Asegúrate de tener estas imágenes en tu carpeta de assets */}
        <Image style={styles.icon} source={require('./assets/google.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookLoginButton}>
        <Text style={styles.loginText}>Login with Facebook</Text>
        <Image style={styles.icon} source={require('./assets/facebook.png')} />
      </TouchableOpacity>
      {/* Repite la estructura similar para otros botones o elementos visuales */}
    </View>
  );
};

const styles = StyleSheet.create({
  registrationScreen: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlap: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 100,
    height: 55,
    width: 342,
    position: 'absolute',
    top: 227,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  textWrapper: {
    color: '#b3b3b3',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    letterSpacing: -0.33,
  },
  overlapGroup: {
    backgroundColor: '#fbde3f',
    borderRadius: 100,
    height: 55,
    width: 342,
    position: 'absolute',
    top: 430,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  dontHaveAnAccount: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    position: 'absolute',
    top: 777,
    textAlign: 'center',
  },
  signUpText: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
  },
  rectangle: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 100,
    height: 55,
    width: 342,
    position: 'absolute',
    top: 310,
  },
  forgotPassword: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    position: 'absolute',
    top: 385,
  },
  orText: {
    color: '#000000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    position: 'absolute',
    top: 517,
  },
  googleLoginButton: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 100,
    height: 55,
    width: 342,
    position: 'absolute',
    top: 574,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookLoginButton: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 100,
    height: 55,
    width: 342,
    position: 'absolute',
    top: 650,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#000000bd',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  icon: {
    height: 24,
    width: 24,
    marginLeft: 10,
  },
  // Añade estilos adicionales para otros elementos como se requiera
});

export default RegistrationScreen;
