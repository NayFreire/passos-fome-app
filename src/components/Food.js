import React from 'react'
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import FoodImg from './../image/food1.png'

const Food = ({foodName, foodPrice, navigation}) => {
    return(
        <View style={styleFood.viewMain}>
            <View style={{display: 'flex', alignItems: 'center'}}>
                <Image source={FoodImg}/>
            </View>
            <TouchableOpacity onPress={() => navigation.push('FoodScreen', {name: foodName, price: foodPrice, navigation: navigation})}>
                <View style={{marginTop: 10}}>
                    <Text style={styleFood.foodName}>{foodName}</Text>
                    <Text style={styleFood.foodPrice}>R${foodPrice}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styleFood = StyleSheet.create({
    viewMain:{
        display: 'flex',
        backgroundColor: '#FFF',
        width: '45%',
        margin: 5,
        paddingHorizontal: 40,
        paddingVertical: 30,
        justifyContent: 'center',
        borderRadius: 20
    },
    foodName:{
        textAlign: 'center',
        fontSize: 20
    },
    foodPrice:{
        marginTop: 15,
        textAlign: 'center',
        fontSize: 17
    }
})

export default Food