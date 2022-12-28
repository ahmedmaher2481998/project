import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Profile = (props) =>{
    const data = [
        {id:1,name:{first:'Saja',last:'Eyad'},email:'sajaeyad@email.com',image:require('../assets/image.jpg'),phone:'0591234567'}
    ];
    return<View style={{flex:1,alignItems:'center', justifyContent:'center',backgroundColor:'#FE8E5929'}}>
        {data.map(item=><View style={{flex:1,alignItems:'center',justifyContent:'space-evenly'}}>
            <View>
                <Image source={item.image} style={{width:200,height:200,borderRadius:100}}/>
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20,fontWeight:'700',lineHeight:25,marginBottom:10}}>{item.name.first} {item.name.last}</Text>
                <Text style={{fontSize:16,fontWeight:'700',lineHeight:22,marginBottom:10}}>{item.email}</Text>
                <Text style={{fontSize:14,fontWeight:'700',lineHeight:25}}>{item.phone}</Text>
            </View>
            <View style={{width:230,height:40,backgroundColor:'red',borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('SignIn')}>
                    <Text style={{color:'#FFF',fontSize:15,fontWeight:'600',lineHeight:23,textAlign:'center'}}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>)}
    </View>
}

export default Profile;