import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { RadioButton } from 'react-native-paper';

import ProfilePicture from './../../image/eu.jpg'

const ProfileScreen = ({route}) => {
    const {navigation} = route.params
    return(
        <ScrollView>
            <View style={{paddingHorizontal: 30, paddingVertical: 20, height: '90%'}}>
                <Text style={{fontSize: 34, fontWeight: 'bold'}}>Meu Perfil</Text>
                <Text style={stylePaymentScreen.txtTitle}>Informações Pessoais</Text>
                <View style={stylePaymentScreen.radioOptions}>
                    <View style={stylePaymentScreen.radioView}>
                        <Image source={ProfilePicture} style={{width: 90, height: 100, borderRadius: 10}}/>
                    </View>
                    <View>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Nayara</Text>
                            <Text style={{fontSize: 15}}>nayof@gmail.com</Text>
                            <View style={{width: '100%', height: 1, backgroundColor: '#121212', marginTop: 5, marginBottom: 5}}/>
                            <Text style={{fontSize: 15}}>+55 35999000000</Text>
                            <View style={{width: '100%', height: 1, backgroundColor: '#121212', marginTop: 5, marginBottom: 5}}/>
                            <Text style={{fontSize: 15}}>Rua Doutor Manoel</Text>
                    </View>
                </View>
                <View style={stylePaymentScreen.options}>
                    <View style={stylePaymentScreen.radioView}>
                        <Text>Pedidos</Text>
                    </View>
                </View>
                <View style={stylePaymentScreen.options}>
                    <View style={stylePaymentScreen.radioView}>
                        <Text>Revisões</Text>
                    </View>
                </View>
                <View style={stylePaymentScreen.options}>
                    <View style={stylePaymentScreen.radioView}>
                        <Text>Ajuda</Text>
                    </View>
                </View>
                <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: '20%'}}>
                    <TouchableOpacity style={stylePaymentScreen.btnEnter}>
                        <Text style={stylePaymentScreen.txtBtn}>Finalizar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const stylePaymentScreen = StyleSheet.create({
    radioView:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 20,
        
    },
    radioOptions:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 30,
        backgroundColor: '#FFF',
        paddingVertical: 20
    },
    options:{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 30,
        backgroundColor: '#FFF',
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
    txtTitle:{
        marginTop: 20,
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 10
    }, 
    totalView:{
        marginTop: 20,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default ProfileScreen