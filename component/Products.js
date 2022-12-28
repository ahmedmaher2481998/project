import React from "react";
import {StatusBar, ScrollView, KeyboardAvoidingView,FlatList, View} from "react-native";
import CustomProduct from './../components/CustomProduct'


const DATA = [
    {
        id: 1,
        name: 'BASIC SURF TOUR T-SHIRT',
        category: 'T-SHIRTS',
        image: require('../assets/products/p1.png'),
        price: 'USD 60.00'
    },
    {
        id: 2,
        name: 'COASTAL SHIRT',
        category: 'LINEN SHIRTS',
        image: require('../assets/products/p2.png'),
        price: 'USD 100.00'
    },
    {
        id: 3,
        name: 'GLOBE HOODIE',
        category: 'HOODIES',
        image: require('../assets/products/p3.png'),
        price: 'USD 80.00'
    },
    {
        id: 4,
        name: 'GLOBE SWEATPANTS',
        category: 'T-SHIRTS',
        image: require('../assets/products/p4.png'),
        price: 'USD 60.00'
    },
    {
        id: 5,
        name: 'BASIC SURF TOUR T-SHIRT',
        category: 'T-SHIRTS',
        image: require('../assets/products/p5.png'),
        price: 'USD 60.00'
    },
    {
        id: 6,
        name: 'COASTAL SHIRT',
        category: 'LINEN SHIRTS',
        image: require('../assets/products/p6.png'),
        price: 'USD 100.00'
    },
    {
        id: 7,
        name: 'GLOBE HOODIE',
        category: 'HOODIES',
        image: require('../assets/products/p1.png'),
        price: 'USD 80.00'
    },
    {
        id: 8,
        name: 'GLOBE SWEATPANTS',
        category: 'T-SHIRTS',
        image: require('../assets/products/p2.png'),
        price: 'USD 60.00'
    }
];

export default function Products(props) {
    return (

        <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
            <StatusBar color="#000000"/>
            <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center',  alignItems: 'center', paddingBottom: 60, paddingTop: 10}}>
                <FlatList
                    data={DATA}
                    numColumns={2}
                    keyExtractor={(item, index) => item.id + index}
                    ItemSeparatorComponent={() => <View style={{height: 10}} />}
                    renderItem={(product) =>
                        <CustomProduct
                            onPress={ ()=> props.navigation.navigate('ProductDetails')}
                            name={product.item.name}
                            category={product.item.category}
                            image={product.item.image}
                            price={product.item.price}/>

                    }
                />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
