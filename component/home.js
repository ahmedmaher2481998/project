import React from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { ImageSlider } from "react-native-image-slider-banner";


const Home = () =>{
    const prudect =[
        {id:1,image:require('../assets/crse.jpg'),title:'كرسي مخمل بقاعدة',price:242,catogryId:1},
        {id:2,image:require('../assets/crse1.jpg'),title:'كرسي قماش بقاعدة',price:173,catogryId:2},
        {id:3,image:require('../assets/tadem.jpg'),title:'طقم طاولة تقديم',price:607,catogryId:2},
        {id:4,image:require('../assets/tadem1.jpg'),title:'2طقم طاولة تقديم',price:651,catogryId:1},
    ] 
    const catogry =[
        {id:1,name:'كرسي',image:require('../assets/crse.jpg')},
        {id:2,name:'طاولة',image:require('../assets/tadem.jpg')},
    ]
    return<View style={styles.container}>
        <ImageSlider 
            data={[
                {img: require('../assets/crse.jpg')},
                {img: require('../assets/crse1.jpg')},
                {img: require('../assets/crse2.jpg')}
            ]}
            localImg={true}
            autoPlay={true}
            timer={2000}
            showIndicator={true}
            preview={false}
        />
        <ScrollView >
            <View style={{justifyContent:'center',alignItems:'center',marginVertical:15}}>
                <Text style={{fontSize:24,fontWeight:'600',color:'#172331'}}>New Product</Text>
            </View>
            <View style={{marginBottom:20}}>
                <FlatList 
                    data={prudect}
                    renderItem={
                        (item)=><View style={{justifyContent:'space-evenly',alignItems:'center',width:180,height:195,backgroundColor:'#FFF',borderRadius:10,marginHorizontal:12,marginVertical:10}}>
                            <Image source={item.item.image} style={{width:140,height:120,borderRadius:10}}/>
                            <Text style={{fontSize:20,fontWeight:'500',color:'#172331'}}>{item.item.title}</Text>
                            <Text style={{fontSize:12,fontWeight:'500',color:'#172331'}}>{item.item.price} $</Text>
                        </View>
                    }
                    keyExtractor={(item)=>item.id}
                    numColumns={2}
                />
            </View>
            <View style={{justifyContent:'center',alignItems:'center',marginBottom:20}}>
                <Text style={{fontSize:24,fontWeight:'600',color:'#172331'}}>Product Catogry</Text>
            </View>
            <View>
                <FlatList 
                    data={catogry}
                    renderItem={
                        (item)=><View style={{justifyContent:'space-evenly',alignItems:'center',width:180,height:195,backgroundColor:'#FFF',borderRadius:10,marginHorizontal:12,marginVertical:10}}>
                            <Image source={item.item.image} style={{width:140,height:120,borderRadius:10}}/>
                            <Text style={{fontSize:20,fontWeight:'500',color:'#172331'}}>{item.item.name}</Text>
                        </View>
                    }
                    keyExtractor={(item)=>item.id}
                    numColumns={2}
                />
            </View>
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'flex-start',
        // alignItems:'center',
        backgroundColor:'#FE8E5929',
        height:730,
        paddingBottom:15
    }
});
export default Home;