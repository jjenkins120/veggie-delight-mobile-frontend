import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import AppButton from '../components/AppButton'

const AccountScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Account Screen</Text>
            <AppButton
                title='Sign out'
                onPress={()=> navigation.navigate('Load')}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default AccountScreen