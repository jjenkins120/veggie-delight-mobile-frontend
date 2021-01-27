import React, { useState, useContext } from 'react'
import Dropdown from '../components/Dropdown'
import { StyleSheet } from 'react-native'
import { Context as EntryContext} from '../context/EntryContext'

const GenderSignupScreen = () => {
    const [gender, setGender] = useState('')
    const { addGender } = useContext(EntryContext)
    const genderArray = ['Male', 'Female', 'Trans Man', 'Trans Woman', 'Non-Binary']

    return (
        <Dropdown
            dropdownTitle='Gender'
            inputArray={genderArray}
            onPressItem={setGender}
            selection={gender}
            appbtnTitle='Continue' 
            onPressBtn={addGender}
        />
    )
}    

const styles = StyleSheet.create({

})

export default GenderSignupScreen
