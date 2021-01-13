import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'


const LoadScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Load Screen</Text>
            <AppButton 
                title='Create Account'
                onPress={ () => navigation.navigate('EmailSignup')}/>
            <AppButton 
                title='Sign In'
                onPress={() => navigation.navigate('Signin') } 
            />
        </View>
    )
}

LoadScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center'
    }
})

export default LoadScreen