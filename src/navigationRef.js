import { NavigationActions } from 'react-navigation'

let navigator

export const setNavigator = nav => {
    navigator = nav
}
//this function is essential to gaining access to our navigator inside the app
//without it, its hard to get access to the navigator inside our components

export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({ routeName, params })
    )
}
//routeName is the literal route name and params is the information that we want to navigate to the route name with
//react navigator has an internal state ane with dispatch, we are telling react navigator to change its state and show a different screen to our user