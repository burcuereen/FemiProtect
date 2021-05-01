import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button ,Alert} from 'react-native';
import * as firebase from 'firebase';







export default class SignUp extends React.Component {
    constructor(props){

        super(props)
        this.state = {

            email: '',
            username: '',
            password: '',
            
        }
    }
    createAccount=() => {
        
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(()=> {
            //signup is succesfull
            Alert.alert('Signup is succesfull!')
        })

        .catch((err)=> {
            Alert.alert(err.message)
        })

    }
    render(){
    
    return (
        <View style={styles.container}>
  
        <Text style={styles.title}>Sign Up</Text>
        
            <TextInput style={styles.input}
                placeholder="Email" 
                placeholderTextColor= "#4B0082"
                onChangeText={(email) => {
                    this.setState({email:email})

                }} value={this.state.email}





            />

            <TextInput style={styles.input}
                placeholder="Username"
                placeholderTextColor= "#4B0082"
                onChangeText={(username) => {
                    this.setState({username:username})

                }} value={this.state.username}




            />
      
            <TextInput style={styles.input}
                placeholder="Password"
                placeholderTextColor= "#4B0082"
                onChangeText={(password) => {
                    this.setState({password:password})

                }} value={this.state.password}
                secureTextEntry



            />


            

            <View style={styles.button}> 
                
                <Button
            
            
                    title={'continue'}
                    color= '#4B0082'
                    onPress={this.createAccount}
            
            
                />
  
            </View>
  
        
        
        
        
      </View>
    );
  }
}

  export const styles = StyleSheet.create({


    container: {
        backgroundColor:'#E6E6FA',
        height: "100%",
        width:"100%",
        alignItems: 'center',
        justifyContent: 'center',

        
    },
    title:{

        fontSize: 45,
        marginBottom: 10,
        color: '#4B0082',


    },

    input:{

        borderRadius: 0,
        width: "50%",
        padding: "1%",
        fontSize: 15,
        borderBottomWidth: 1,
        borderColor: "#4B0082",
        



    },

    button:{

        width:"40%",
        borderWidth: 1,
        borderColor: '#4B0082',
        marginTop: 10,
        borderRadius: 20,

        
        




    },

    



  })