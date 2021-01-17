import React, { useEffect, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { Context as UserContext } from '../context/AuthContext' 

const PotentialMatchScreen = () => {
    const { fetchUserInfo } = useContext(UserContext)

    useEffect(() => fetchUserInfo, [])

    return (
        <View>
            <Text>Potential Match Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default PotentialMatchScreen