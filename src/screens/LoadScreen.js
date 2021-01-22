import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppButton from '../components/AppButton'

const LoadScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AppButton 
                title='Sign In'
                onPress={() => navigation.navigate('EmailSignin') } 
            />
            <AppButton 
                title='Create Account'
                onPress={ () => navigation.navigate('EmailSignup')}/>
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