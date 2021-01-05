import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'


const switchNavigator = createSwitchNavigator  ({

})

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <App/>
  )
}