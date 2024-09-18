import React from 'react';
import { View, Text } from 'react-native';

const WhiteCScreen = () => {
return (
    <View>
      <View style={{ backgroundColor: "#f2f2f2", borderTopColor:"#e6e6e6", borderBottomWidth:2,borderTopWidth:3, borderBottomColor:"#e6e6e6", height:60, marginTop: 40, flexDirection: "row", alignItems: "center" }}>
       <Text style={{fontSize:18, fontWeight:"bold", marginLeft:10}}>No Product Available</Text>
      </View>

      </View>
  );
};

export default WhiteCScreen;