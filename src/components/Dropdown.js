import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import FormView from './FormView'
import AppButton from './AppButton'
import { Button, Menu, Provider } from 'react-native-paper';

const Dropdown = ({ dropdownTitle, inputArray, onPressItem, selection, appbtnTitle, onPressBtn }) => {
    const [visible, setVisible] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const renderMenuItems = inputArray => {
        return inputArray.map(input => {
            return <Menu.Item onPress={() => {
                onPressItem(input)
                closeMenu()
            }} title={input} key={input}/>
        })
    }

    return (
        <FormView>
            <Provider>
                <NavigationEvents onWillFocus={() => setErrorMessage('')}/>
                {errorMessage ? <Text>{errorMessage}</Text> : null}
                <View
                    style={styles.container}>
                    <Menu
                        style={styles.menu}
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={<Button onPress={openMenu}>Pick your {dropdownTitle}</Button>}
                    >
                        {renderMenuItems(inputArray)}
                    </Menu>
                </View>
                <Text>{selection}</Text>
            </Provider>
            <AppButton
                title={appbtnTitle}
                onPress={selection? () => onPressBtn(selection) : () => setErrorMessage('You must make a selection') }
            />
        </FormView>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    menu: {
        marginTop: 150
    }
})

export default Dropdown