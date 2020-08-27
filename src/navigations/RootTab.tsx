import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './authStack';

export type RootStackParamList = {
    AuthStack: undefined;

}

const RootTabStack = createStackNavigator();

const index = () : JSX.Element =>{

    return(
        <RootTabStack.Navigator
            initialRouteName='AuthStack'
            screenOptions={{
                headerShown: false,
                gestureEnabled: false
            }}
        >
            <RootTabStack.Screen
                name='AuthStack'
                component={AuthStack}
            />
        </RootTabStack.Navigator>
    )
}

export default index;