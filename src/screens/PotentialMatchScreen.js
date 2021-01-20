import React, { useEffect, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import useFetchUserData from '../hooks/useFetchUserData'
import { Context as UserContext } from '../context/UserContext'

const PotentialMatchScreen = () => {
    const { state } = useContext(UserContext)
    const [callFetch] = useFetchUserData()

    useEffect(() => callFetch, [])

    return (
        <View>
            <Text>Potential Match Screen</Text>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default PotentialMatchScreen