import React from 'react' ;
import {StyleSheet,Text, View } from 'react-native' ;
import { MaterialIcons} from '@expo/vector-icons';

export default function Header ({navigation, title}) {
    const openMenu = () => {
        navigation.openDrawer()
    }
    return(
        <View>

            <MaterialIcons name="menu" onPress={openMenu}/>
            <View> 
                <Text> {title} </Text>
            </View>

        </View>
    )
}
const styles