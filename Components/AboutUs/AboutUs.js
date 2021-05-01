import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default class AboutUs extends React.Component {
    render(){
    
    return (
        <View style={styles.container}>
  
            <Text style={styles.Logo}>  FemiProtect </Text>

            <Text style={styles.PageName}> About Us </Text>

            <Text style={styles.Title1}> Misyonumuz </Text>

            <Text style={styles.Paragraph1}>FemiProtect şiddetten ölen kadınlar için dijital anıt fikriyle yola çıkmış, daha sonrasında kadına yönelik şiddete farkındalık yaratmanın yanında kadınları birbirlerini güçlendreceği bir platform olma yönünde ilerlemiştir. FemiProtect olarak kadına şiddete farkındalığı arttırıp, kadınlara destek ve yardım sunmak esas amacımızdır.</Text>
       
            <Text style={styles.Title2}> Nasıl Kullanılır? </Text>

            <Text style={styles.Paragraph2}> FemiProtect'i kullanmak oldukça kolay.Üye olmanızla birlikte sizlere sunduğumuz dijital anıta ana sayfadan erişebilir,harita kısmından haftalık olayları inceleyebilir,forum kısmından tartışmalara katılıp bilgilendirmelerden faydalanabilir ve panik kısmındansa yardıma ihtiyaç duyduğunuz zamanlarda kullanmak üzere panik butonunu kullanabilirsiniz.Panik butonunu kullandığınızda sisteme kaydettiğiniz kişilere konumunuz paylaşılacaktır.İşte bu kadar basit,daha fazla sorunuz için lütfen bizimle iletişime geçiniz.</Text>
        
            <Text style={styles.Help}>Need more help? Reach authorised help here.</Text>
        
        
      </View>
    );
  }
}







   export const styles = StyleSheet.create({


    container:{
        
        backgroundColor:'#E6E6FA',
        height: "100%",
        width:"100%",
        alignItems: 'center',
        justifyContent: 'center',
        



    },

    Logo:{

        fontSize: 45,
        
        color: '#4B0082',

    },

    PageName:{




    }




    })