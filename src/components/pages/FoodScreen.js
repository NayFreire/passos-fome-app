import React from 'react'
import { Image, StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated'

import FoodImg from './../../image/food1.png'

const FoodScreen = ({route}) => {
    const {name, price, navigation} = route.params
    return(
        <ScrollView>
            <View style={styleFoodScreen.mainView}>
                <Image source={FoodImg} style={{width: 241, height: 241}}/>
                <View>
                    <Text style={styleFoodScreen.txtName}>{JSON.stringify(name).replace(/\"/g, "")}</Text>
                    <Text style={styleFoodScreen.txtPrice}>{JSON.stringify(price).replace(/\"/g, "")}</Text>
                </View>
                <View style={styleFoodScreen.infoView}>
                    <View>
                        <Text style={styleFoodScreen.txtInfoTitle}>Informações de entrega</Text>
                        <Text style={styleFoodScreen.txtInfo}>Entrega somente de segunda a sexta das 14 as 22 horas.</Text>
                    </View>

                    <View style={{marginTop: 40}}>
                        <Text style={styleFoodScreen.txtInfoTitle}>Politica de devolução</Text>
                        <Text style={styleFoodScreen.txtInfo}>Todos os nossos alimentos são verificados duas vezes antes de sair de nossas lojas, caso você encontre um alimento denificado, entre em contato.</Text>
                    </View>

                    <View style={styleFoodScreen.viewBtn}>
                        <TouchableOpacity style={styleFoodScreen.btnEnter} onPress={() => navigation.push('ShoppingCartScreen', {name: JSON.stringify(name).replace(/\"/g, ""), price: JSON.stringify(price).replace(/\"/g, ""), navigation: navigation})}>
                            <Text style={styleFoodScreen.txtBtn}>Adicionar no Carrinho</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styleFoodScreen = StyleSheet.create({
    mainView:{
        paddingHorizontal: 20,
        paddingVertical: 30,
        display: 'flex',
        alignItems: 'center'
    },
    txtName:{
        fontSize: 28,
        textAlign: 'center',
        marginTop: 10
    },
    txtPrice:{
        marginTop: 10,
        fontSize: 22,
        textAlign: 'center',
        color: '#FA4A0C'
    },
    infoView: {
        marginTop: 20,
        // backgroundColor: 'yellow',
        width: '100%',
        height: '100%',
        paddingHorizontal: 20
    },
    txtInfoTitle:{
        fontSize: 17,
        fontWeight: 'bold'
    },
    txtInfo:{
        fontSize: 15
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
    viewBtn:{
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        marginTop: 40
    },
})

export default FoodScreen