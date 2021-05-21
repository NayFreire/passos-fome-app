import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';

const StartScreen = ({navigation}) => {
    return(
        <View>
            <Text>Start</Text>
            <TouchableOpacity onPress={() => navigation.push('SignScreen')}>
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default StartScreen