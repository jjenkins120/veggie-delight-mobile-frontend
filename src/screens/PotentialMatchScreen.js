import React, { useEffect, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import useFetchUserData from '../hooks/useFetchUserData'

const PotentialMatchScreen = () => {

    useEffect(() => useFetchUserData, [])

    return (
        <View>
            <Text>Potential Match Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default PotentialMatchScreen