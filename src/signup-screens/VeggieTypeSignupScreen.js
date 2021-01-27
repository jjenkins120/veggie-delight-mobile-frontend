import React, { useState, useContext } from 'react'
import { StyleSheet } from 'react-native'
import Dropdown from '../components/Dropdown'
import { Context as EntryContext } from '../context/EntryContext'

const VeggieTypeSignupScreen = () => {
    const [veggie, setVeggie] = useState('')
    const { addVeggieType } = useContext(EntryContext)

    const veggieArray = ['Lacto-Ovo', 'Vegatarian', 'Vegan', 'Pescatarian']

    return (
        <Dropdown
            dropdownTitle='Veggie Type'
            inputArray={veggieArray}
            onPressItem={setVeggie}
            selection={veggie}
            appbtnTitle='Continue' 
            onPressBtn={addVeggieType}
        />
    )
}

const styles = StyleSheet.create({

})

export default VeggieTypeSignupScreen