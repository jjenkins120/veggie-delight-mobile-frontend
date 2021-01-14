import React from 'react'
import { StyleSheet, View } from 'react-native'

const FormView = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingTop: '35%'
    }
})

export default FormView