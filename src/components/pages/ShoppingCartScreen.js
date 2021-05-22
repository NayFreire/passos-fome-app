import React from 'react'
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native'

import FoodImg from './../../image/food1.png'

const ShoppingCartScreen = ({route}) => {
    const {name, price, navigation} = route.params
    return(
        <View style={styleSCScreen.mainView}>
            <View style={styleSCScreen.foodInfoView}>
                <View style={styleSCScreen.imgView}>
                    <Image source={FoodImg} style={styleSCScreen.imgFood}/>
                </View>
                <View style={styleSCScreen.txtInfoFoodView}>
                    <Text style={{fontSize: 17, fontWeight: '800'}}>{name}</Text>
                    <Text style={{fontSize: 15, color: '#FA4A0C'}}>{price}</Text>
                </View>
            </View>
            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: '80%'}}>
                <TouchableOpacity style={styleSCScreen.btnEnter} onPress={() => navigation.push('PaymentScreen', {navigation: navigation})}>
                    <Text style={styleSCScreen.txtBtn}>Completar Pedido</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styleSCScreen = StyleSheet.create({
    mainView:{
        paddingHorizontal: 30,
        paddingVertical: 20,
        height: '100%',
    },
    foodInfoView:{
        backgroundColor: '#FFF',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 30
    },
    imgView:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    imgFood:{
        width: 90,
        height: 90
    },
    txtInfoFoodView:{
        marginLeft: 20,
        display: 'flex',
        justifyContent: 'center'
    },
    btnEnter:{
        backgroundColor: '#FA4A0C',
        width: '80%',
        height: 70,
        paddingVertical: 25,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    txtBtn:{
        color: '#fff',
        fontSize: 17
    },
})

export default ShoppingCartScreen
