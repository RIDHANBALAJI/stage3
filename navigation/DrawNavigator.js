import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigator from './TabNavigator'
import Profile from '../screens/Profile'

const DrawerNavigator =()=>{
    return(
        <Drawer.screen name="Home" component={TabNavigator}/>
        
    )
}

