import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

import FoodImg from './../../image/food1.png'

const ShoppingCartScreen = ({route}) => {
    const {name, price, navigation} = route.params
    return(
        <View style={styleSCScreen.mainView}>
            <View style={styleSCScreen.imgView}>
                <Image source={FoodImg} style={styleSCScreen.imgFood}/>
            </View>
            <View style={{backgroundColor: 'red', width: 'auto'}}>
                <Text>{name}</Text>
                <Text>{price}</Text>
            </View>
        </View>
    )
}

const styleSCScreen = StyleSheet.create({
    mainView:{
        backgroundColor: 'yellow'
    },
    imgView:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    imgFood:{
        flex: 1
    }
})

export default ShoppingCartScreen
