import React from 'react'
import { Text, View } from 'react-native';

const HomeScreen = ({navigation}) => {
    return(
        <View>
            <Text>Home</Text>
            {/* <TouchableOpacity onPress={() => navigation.push('SignScreen')}>
                <Text>Next</Text>
            </TouchableOpacity>  */}
        </View>   
    )
}

export default HomeScreen