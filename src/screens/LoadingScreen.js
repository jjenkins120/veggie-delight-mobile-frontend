import React from 'react'
import {StyleSheet, Text} from 'react-native'

const LoadingScreen = () => {
    return (
        <>
            <Text style={styles.loading}>LOADING...</Text>
        </>
    )

}

const styles = StyleSheet.create({
    loading: {
        fontWeight: 'bold', 
        textAlign: 'center', 
        fontSize: 40
    }
}) 

export default LoadingScreen