import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, StatusBar, Image } from 'react-native';

import Logo from '../../image/logo.png'
import Name from '../../image/name.png'
import People from '../../image/people.png'

const StartScreen = ({navigation}) => {
    return(
        // <View>
        //     {/* <Text>Start</Text>
        //     <TouchableOpacity onPress={() => navigation.push('SignScreen')}>
        //         <Text>Next</Text>
        //     </TouchableOpacity> */}
            
        // </View>
        <View style={styleStart.mainView}>
            
            <View style={styleStart.logoView}>
                <Image source={Logo} style={styleStart.logo}/>
                <Image source={Name} style={{marginLeft: 40}}/>
            </View>
            <Image source={People} style={styleStart.people}/>
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={styleStart.btn} onPress={() => navigation.push('SignInScreen')}>
                    <Text style={{textAlign: 'center', color: '#FA4A0C', fontSize: 17}}>Comece Agora</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

const styleStart = StyleSheet.create({
    mainView:{
        backgroundColor: '#FA4A0C',
        height: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    logoView:{
        // backgroundColor: '#e1e1e1'
    },
    logo: {
        margin: 40
    },
    people: {
        marginLeft: -8,
        marginTop: 20,
        flex: 0.9
    },
    btn:{
        width: '80%',
        marginBottom: -20,
        backgroundColor: '#fff',
        paddingVertical: 25,
        borderRadius: 30
    }
})

export default StartScreen