import React from 'react'
import { ScrollView, Text, TextInput, View, StyleSheet, Image } from 'react-native';
import ViewFood from './../Food'

import Icon from '../../image/searchIcon.png'
import Food from './../Food';

const HomeScreen = ({navigation, route}) => {
    return(
        <ScrollView>
            <View style={styleHome.viewMain}>
                <Text style={styleHome.txtTitle}>Delícias para você</Text>
                <View style={styleHome.viewSearch}>
                    <Image source={Icon} style={styleHome.imgSearch}/>
                    <TextInput style={styleHome.inputSearch} placeholder='Procurar' />
                </View>                
            </View>  
            <Text style={styleHome.txtSubTitle}>Comidas</Text>
            <View style={styleHome.viewFood}>
                <Food foodName={'Tomate Fresco'} foodPrice={'13,50'} navigation={navigation}/>
                <Food foodName={'Tomate Fresco'} foodPrice={'13,50'} navigation={navigation}/>
                <Food foodName={'Tomate Fresco'} foodPrice={'13,50'} navigation={navigation}/>
                <Food foodName={'Tomate Fresco'} foodPrice={'13,50'} navigation={navigation}/>
            </View>
            <Text style={styleHome.txtSubTitle}>Bebidas</Text>
            <View style={styleHome.viewFood}>
                <Food foodName={'Tomate Fresco'} foodPrice={'13,50'} navigation={navigation}/>
                <Food foodName={'Tomate Fresco'} foodPrice={'13,50'} navigation={navigation}/>
                <Food foodName={'Tomate Fresco'} foodPrice={'13,50'} navigation={navigation}/>
                <Food foodName={'Tomate Fresco'} foodPrice={'13,50'} navigation={navigation}/>
            </View>
        </ScrollView> 
    )
}

const styleHome = StyleSheet.create({
    viewMain:{
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    viewFood:{
        width: '100%',
        display: 'flex',
        paddingHorizontal: 30,
        paddingVertical: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    txtTitle:{
        width: '60%',
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 20
    },
    viewSearch:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EFEEEE',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30
    },
    txtSubTitle:{
        paddingHorizontal: 40, 
        paddingVertical: 10,
        fontSize: 20,
        fontWeight: '700'
    },
    imgSearch:{
        marginRight: 10
    },
    inputSearch:{
        fontSize: 17,
        padding: 10
    }
})

export default HomeScreen