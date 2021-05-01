import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import AboutUs from './Components/AboutUs/AboutUs';
import * as firebase from 'firebase';
import apiKeys from './config/keys';
import Profile from './Components/ProfilePage/profile'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={

      isLoaded: true,
      isAuthenticationReady: false,
      isAuthenticated: false

    }

    //load firebase
    if (!firebase.apps.length){
        firebase.initializeApp(apiKeys.firebaseConfig)
        firebase.auth().onAuthStateChanged((user) => {

          this.setState({isAuthenticationReady:true})
          this.setState({isAuthenticated:!!user})

        })

    }

  }
  render(){
  return (
    <View > 

      {(this.state.isAuthenticated) ? <AboutUs/>:<Login/> }
      
     
    




      
      
      
      <StatusBar style="auto" />
    </View>
  );
}
}
  
  