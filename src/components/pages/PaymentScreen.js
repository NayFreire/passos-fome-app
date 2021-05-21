import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { RadioButton } from 'react-native-paper';

import CardIcon from './../../image/cardIcon.png'
import BankIcon from './../../image/bankIcon.png'

const PaymentScreen = ({route}) => {
    const {navigation} = route.params
    return(
        <ScrollView>
            <View style={{paddingHorizontal: 30, paddingVertical: 20}}>
            <Text style={{fontSize: 34, fontWeight: 'bold'}}>Pagamento</Text>
            <Text style={stylePaymentScreen.txtTitle}>Método de Pagamento</Text>
            <View style={stylePaymentScreen.radioOptions}>
                <View style={stylePaymentScreen.radioView}>
                    <RadioButton value='card' status={'checked'}/>
                    <Image source={CardIcon}/>
                    <Text>Cartão</Text>
                </View>
                <View style={{height: 1, width: '100%', backgroundColor: '#a2a2a2'}}></View>
                <View style={stylePaymentScreen.radioView}>
                    <RadioButton value='card' status={'unchecked'}/>
                    <Image source={BankIcon}/>
                    <Text>Conta de Banco</Text>
                </View>
            </View>
            <Text style={stylePaymentScreen.txtTitle}>Entrega</Text>
            <View style={stylePaymentScreen.radioOptions}>
                <View style={stylePaymentScreen.radioView}>
                    <RadioButton value='card' status={'checked'}/>
                    <Text>Entregar em: Rua Doutor Manoel </Text>
                </View>
                <View style={{height: 1, width: '100%', backgroundColor: '#a2a2a2'}}></View>
                <View style={stylePaymentScreen.radioView}>
                    <RadioButton value='card' status={'unchecked'}/>
                    <Text>Retirar na loja</Text>
                </View>
            </View>
            <View style={stylePaymentScreen.totalView}>
                <Text style={{fontSize: 17}}>Total</Text>
                <Text style={{fontSize: 22}}>R$13,50</Text>
            </View>
            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: '15%'}}>
                <TouchableOpacity style={stylePaymentScreen.btnEnter} onPress={() => navigation.push('ProfileScreen')}>
                    <Text style={stylePaymentScreen.txtBtn}>Finalizar Pedido</Text>
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
        // backgroundColor: 'yellow',
        paddingHorizontal: 30,
        paddingVertical: 20,
        
    },
    radioOptions:{
        borderRadius: 30,
        backgroundColor: '#FFF',
        paddingVertical: 20
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

export default PaymentScreen