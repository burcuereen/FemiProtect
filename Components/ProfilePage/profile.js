import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import React from 'react';

export default function Profile(){
    return(
        <View style={styles.container}>
            <View style={{flexDirection:'row',display: 'flex',}}>
                <Text style={{fontSize:40,fontWeight:'bold',color:'#4B0082'}}>Femi</Text>
                <Text style={{fontSize:40,fontWeight:'normal',color:'#4B0082'}}>Protect</Text>
                
                <TouchableOpacity style={{marginStart:'35%',padding:'2%'}}>
                <Icon color='#4B0082' size={25} name="navicon" />
                </TouchableOpacity>
            </View>
        <ScrollView>
            <View style={styles.ProfileSectionWrapper}>
                <View style={styles.ImageSection}>
                <Image
                    style={styles.userImage}
                    
                />
                </View>
                
                <Text style={{fontSize:20,color:'#4B0082'}}>
                    Burcu Eren
                </Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'#4B0082'}}>
                    @burcueren
                </Text>
                <TouchableOpacity>
                <Icon color='#4B0082' size={15} name="edit"/>
                </TouchableOpacity>
                </View>
                <Text style={{fontSize:16,color:'#4B0082'}}>10 following 8 follower</Text>
            </View>
            <View style={{alignItems:'center',marginTop:20}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Liked Posts</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'center',marginTop:5}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Published Posts</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'center',marginTop:5}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Followed Posts</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'center',marginTop:5}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Saved Emergency Contracts</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

            <View style={styles.tab}>
                    <TouchableOpacity>
                    <Icon color='#4B0082' size={25} name="home"  />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Icon color='#4B0082' size={25} name="map-o"/>
                    </TouchableOpacity>
                    <TouchableOpacity >
                    <Icon color='#4B0082' size={25} name="comments-o" />
                    </TouchableOpacity>
            </View>
        </View>


    )
}



  export const styles = StyleSheet.create({
    
    container: {
        backgroundColor:'#E6E6FA',
        display:'flex',
        flex:1,
        justifyContent:'center',
    
        
    },
    tab: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderColor: '#4B0082',
        borderTopWidth: 1,
      },
      ProfileSectionWrapper: {
        display: 'flex',
        alignItems: 'center',
      },
      ImageSection: {
        display: 'flex',
        flex: 1,
        padding: 5,
      },
      userImage: {
        width: 115,
        height: 115,
        borderRadius: 90,
        margin: 13,
        borderWidth: 1.5,
        borderColor: '#4B0082'
      },
      button: {
          width: '75%',
          height: 35,
          borderColor: '#4B0082',
          borderWidth: 1,
          backgroundColor:'#E6E6F6',
          borderRadius: 10,
          
          
      },
      text: {
          marginHorizontal: 25,
        fontSize: 20,
        color:'#4B0082',
      }


})