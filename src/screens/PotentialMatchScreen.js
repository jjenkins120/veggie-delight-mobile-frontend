import React, { useEffect, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import useFetchUserData from '../hooks/useFetchUserData'
import { Context as AuthContext } from '../context/AuthContext'

const PotentialMatchScreen = () => {
    const { token } = useContext(AuthContext)
    const [callFetch] =useFetchUserData()

    // useEffect(() => callFetch, [])

    return (
        <View>
            <Text>Potential Match Screen</Text>
            <Text>{token}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default PotentialMatchScreen