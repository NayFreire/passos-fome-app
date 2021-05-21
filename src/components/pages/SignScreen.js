import React from 'react'
import { Text, View } from 'react-native';

const SignScreen = ({navigation}) => {
    return(
        <View>
            <Text>Sign</Text>
            <TouchableOpacity onPress={() => navigation.push('SignScreen')}>
                <Text>Next</Text>
            </TouchableOpacity> 
        </View>   
    )
}

export default SignScreen