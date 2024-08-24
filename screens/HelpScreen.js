import { StyleSheet, Text, View ,SafeAreaView,Button,TouchableOpacity, Pressable} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CartIcon from '../components/CartIcon';



const HelpScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity  style={{backgroundColor:"#f07b07",marginLeft:23, marginRight:23,flexDirection:"row", borderRadius:5,marginTop:20, padding:12}}>
      <MaterialCommunityIcons name="message" size={26} color="white" />
      <Text style={{color:'white',alignItems:'center',fontSize:15, marginLeft:90, marginTop:2, fontWeight:'500'}}>Start Live Chat</Text>
      </TouchableOpacity>
      <View style={{marginTop:20, marginLeft:14}}>
        <Text style={{color:"grey", fontSize:12, fontWeight:"500"}}>ABOUT JUMIA</Text>
      </View>
      <View style={{backgroundColor:'white',height:180, marginTop:6}}>
        <Text style={{marginLeft:14,marginTop:20,fontWeight:"500", fontSize:15 }} onPress={()=>navigation.navigate("Services")}>Jumia Services</Text>
        <Text style={{marginLeft:14,marginTop:45,fontWeight:"500", fontSize:15 }} onPress={()=>navigation.navigate("Privacy")} >Privacy Policy</Text>
        <Text onPress={()=>navigation.navigate("Faq")} style={{marginLeft:14,marginTop:40,fontWeight:"500", fontSize:15 }}>Faq</Text>
      </View>
      <View style={{marginTop:30, marginLeft:14}}>
        <Text style={{color:"grey", fontSize:12, fontWeight:"500"}}>SETTINGS</Text>
      </View>
      <View style={{backgroundColor:'white',height:240, marginTop:6}}>
        <Text style={{marginLeft:14,marginTop:20,fontWeight:"500", fontSize:15 }}>Push Notifications</Text>
        <Text style={{marginLeft:14,marginTop:40,fontWeight:"500", fontSize:15 }} onPress={()=>navigation.navigate("Country")} >Country</Text>
        <Text style={{marginLeft:14,marginTop:40,fontWeight:"500", fontSize:15,color:'#d9d6d2' }}>Language</Text>
        <CartIcon/>
        <Text style={{marginLeft:14,marginTop:40,fontWeight:"500", fontSize:15, color:'#d9d6d2' }}>App Version 13.8.0</Text>

      </View>
      
      


      
    </SafeAreaView>
  )
} 

export default HelpScreen

const styles = StyleSheet.create({})