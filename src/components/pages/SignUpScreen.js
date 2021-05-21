import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';

import Name from '../../image/nameOrange.png'

const SignUpScreen = ({navigation}) => {
    return(
        <View>
            <ScrollView>
            <View style={styleSign.viewName}>
                <Image source={Name} />
            </View>
            <View>
                <Text style={styleSign.txtTitle}>Cadastre-se e aproveite</Text>
                <View style={styleSign.viewForm}>
                    <Text style={styleSign.txtForm}>Nome Completo</Text>
                    <TextInput style={styleSign.input}/>
                    <Text style={styleSign.txtForm}>Telefone</Text>
                    <TextInput style={styleSign.input}/>
                    <Text style={styleSign.txtForm}>Endereço</Text>
                    <TextInput style={styleSign.input}/>
                    <Text style={styleSign.txtForm}>E-mail</Text>
                    <TextInput style={styleSign.input}/>
                    <Text style={styleSign.txtForm}>Senha</Text>
                    <TextInput secureTextEntry={true} style={styleSign.input}/>                                     
                </View>
                <View style={styleSign.viewBtn}>
                    <TouchableOpacity style={styleSign.btnEnter} onPress={() => navigation.push('HomeScreen')}>
                        <Text style={styleSign.txtBtn}>Cadastrar</Text>
                    </TouchableOpacity> 
                </View>            
            </View>
            </ScrollView>
        </View>   
    )
}

const styleSign = StyleSheet.create({
    mainView:{
        backgroundColor: '#F2F2F2',
        height: '100%',
        // paddingHorizontal: 10,
        paddingVertical: 10
    },
    viewName:{
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 210,
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30
    },    
    txtTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FA4A0C',
        textAlign:  'center',
        marginTop: 30
    },
    viewForm: {
        padding: 40
    },
    txtForm:{
        fontSize: 15,
        color: '#c0c0c0',
        fontWeight: '700'
    },
    input:{
        height: 50,
        borderWidth: 1,
        // borderColor: '#000',
        fontSize: 17,
        padding: 0,
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: '#a1a1a1'
    },
    viewBtn:{
        // paddingVertical: 30,
        display: 'flex',
        // backgroundColor: '#000',
        height: '100%',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    btnEnter:{
        backgroundColor: '#FA4A0C',
        width: '80%',
        height: 70,
        paddingVertical: 25,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20,
        // position: 'relative'
    },
    btnSingUp:{
        display: 'flex',
        color: '#FA4A0C',
        fontWeight: '600',
        marginTop: 30,
        fontSize: 17,
    },
    txtBtn:{
        color: '#fff',
        fontSize: 17
    }
})

export default SignUpScreen