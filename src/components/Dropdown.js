import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import FormView from '../components/FormView'
import AppButton from '../components/AppButton'
import { Button, Menu,Provider } from 'react-native-paper';

const Dropdown = ({ dropdownTitle, inputArray, onPressItem, selection, appbtnTitle, onPressBtn }) => {
    const [visible, setVisible] = useState(false)

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const renderMenuItems = inputArray => {
        return inputArray.map(input => {
            return <Menu.Item onPress={() => onPressItem(input)} title={input} key={input}/>
        })
    }

    return (
        <FormView>
            <Provider>
                <View
                    style={styles.dropdown}>
                    <Menu
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
                onPress={() => onPressBtn(selection)}
            />
        </FormView>
    )
}


const styles = StyleSheet.create({
    dropdown: {
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
    }
})

export default Dropdown