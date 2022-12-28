import React from "react";
import { Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const SignIn=(props)=>{
return<ImageBackground style={styles.contenir} source={require('../assets/1.jpg')}>
    <View style={styles.logo}>
        <Text style={styles.logo}>Property</Text>
        <Image source={require('../assets/logo.png')} style={{width:40,height:40,marginHorizontal:10}}/>
    </View>
    <View>
        <Text style={styles.label}>Welcom to my Property</Text>
    </View>
    <View>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor={'#dddddd'} keyboardType={"email-address"}></TextInput>
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor={'#dddddd'} keyboardType={"default"}></TextInput>
    </View>
    <View>
        <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('Tab')}>
            <Text style={styles.labelyllow}>Login</Text>
            </TouchableOpacity>
    </View>
    <View>
        <Text style={styles.labelyllow}>
        Join My Property ?
            <Pressable onPress={()=>props.navigation.navigate('SignUp')}>
                <Text style={styles.labelpupler}>    Sign up</Text>
                </Pressable>
        </Text>
    </View>
</ImageBackground>
}

const styles = StyleSheet.create({
    contenir:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    logo:{
        fontSize:32,
        fontWeight:"bold",
        textAlign:'center',
        color:'#9d3d9d',
        marginBottom:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 30,
        backgroundColor: '#9d3d9d',
        marginHorizontal: "2%",
        marginBottom: 60,
        alignItems:'center',
        justifyContent:'center',
        width:85,
        height:50
    },
    label:{
        fontSize:23,
        marginBottom:30,
        fontFamily:'Helvetica',
        fontWeight:"400",
        letterSpacing:0.5,
        color:'#333'
    },
    labelyllow:{
        fontSize:15,
        color:'#333',
    },
    labelpupler:{
        fontSize:15,
        color:'#9d3d9d',
    },
    input:{
        backgroundColor:'#9d3d9d',
        height:50,
        width:290,
        borderRadius:30,
        paddingHorizontal:20,
        paddingVertical:10,
        marginVertical:25
    },
    });
    
    export default SignIn;
