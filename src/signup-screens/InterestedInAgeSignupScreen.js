import React, { useState, useContext } from 'react'
import { StyleSheet, View, Text} from 'react-native'
import AppButton from '../components/AppButton'
import FormView from '../components/FormView'
import RangeSlider from 'react-native-range-slider-expo';
import { Context as EntryContext} from '../context/EntryContext'

const InterestedInAgeSignupScreen = () => {
    const { addInterestedInAge } = useContext(EntryContext)
    const [fromValue, setFromValue] = useState(18);
    const [toValue, setToValue] = useState(75);

    return (
        <FormView>
            <View style={styles.range}>
                <RangeSlider min={18} max={75}
                        fromValueOnChange={value => setFromValue(value)}
                        toValueOnChange={value => setToValue(value)}
                        initialFromValue={11}
                        initialValue={12}
                        knobColor='red'
                        valueLabelsBackgroundColor='black'
                        inRangeBarColor='purple'
                        outOfRangeBarColor='orange'
                />
                <Text>from value:  {fromValue}</Text>
                <Text>to value:  {toValue}</Text>
            </View>
            <AppButton
                title='Continue' 
                onPress={()=> addInterestedInAge(fromValue, toValue)}
            />
        </FormView>
    )
}

const styles = StyleSheet.create({
    range: {
        marginHorizontal: 15
    }
})

export default InterestedInAgeSignupScreen