import { createStackNavigator } from 'react-navigation-stack';
import Signup from '../Components/SignUp/SignUp';
import Header from '../Components/header';
import React from 'react';

const screen = {
    Signup: {
        screen: Signup,
        navigationOptions: ({navigation,title}) => {
            return{
                headerTitle: () => {
                    <Header title= " SignUp " navigation={navigation}/>
                }
            }
        }
        
    }
}
const signupRoute = createStackNavigator(screen, {
    defaultNavigationOptions: {
        
    }
})
export default signupRoute;