import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './Registro';
import MenuScreen from './menu'; 
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator, TextInput, Dimensions, Alert } from 'react-native';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
  });
};

const deviceWidth = Dimensions.get('window').width;

const LoginScreen = ({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetchFonts().then(() => setFontsLoaded(true));
  }, []);


  const handleLoginPress = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor, ingrese email y contraseña.');
      return;
    }
    Alert.alert(
      "Inicio de Sesión Exitoso",
      "Bienvenido a Las Delicias Del Master!",
      [
        { text: "OK", onPress: () => navigation.navigate('Menu') }
      ],
      { cancelable: false }
    );
  };
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }


  return (
    <View style={styles.LoginScreen}>
      <Image style={styles.mainLogo} source={require('./assets/master.png')} />
      
      <TextInput
        style={styles.inputField}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.inputField}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forget Password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.separator}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity style={styles.googleLoginButton}>
        <Image style={styles.socialIcon} source={require('./assets/google.png')} />
        <Text style={styles.socialLoginText}>Login with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookLoginButton}>
        <Image style={styles.socialIcon} source={require('./assets/facebook.png')} />
        <Text style={styles.socialLoginText}>Login with Facebook</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
       <Text style={styles.signUpText}>Don't have an account?</Text>
         <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
        <Text style={styles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registro" component={RegistrationScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  LoginScreen: {
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
    width: 180,  // Ajusta este valor
    height: 180, // Ajusta este valor
    marginRight: 10,
    marginTop: 40,  // Añade un margen en la parte superior
    marginBottom: 20,  // Añade un margen en la parte inferior
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
