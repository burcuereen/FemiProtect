import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';








export default class Login extends React.Component {
    constructor(props){

        super(props)
        this.state = {

            username: '',
            password: '',
            
        }
    }
    
    render(){
    
    return (
        <View style={styles.container}>
  
        <Text style={styles.title}>FemiProtect</Text>
        
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
                secureTextEntry
                onChangeText={(password) => {
                    this.setState({password:password})

                }} value={this.state.password}
                



            />
      
            <View style={styles.button}> 
                
                <Button
            
            
                    title={'Log In'}
                    color= '#4B0082'
            
            
                />
  
            </View>


            <Text style={{color: "#4B0082"}}>or</Text>

            <View style={styles.button2}> 
                
                <Button
            
            
                    title={'create an account'}
                    color= '#4B0082'
            
            
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
        color:"#4B0082",



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

    button2:{

        width:"40%",
        borderWidth: 1,
        borderColor: '#4B0082',
        borderRadius: 20,
    
        




    }



  })