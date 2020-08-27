import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './authStack';
import firebase from 'react-native-firebase';
import HomeTab from './HomeTab';

export type RootStackParamList = {
    AuthStack: undefined;

}

const RootTabStack = createStackNavigator();

const index = (): JSX.Element => {
    const [user, setUser] = useState(null);

    function onAuthStateChanged(result:any) {
        setUser(result);
    }
    useEffect(() => {
        const authSubscribe = firebase.auth().onAuthStateChanged(onAuthStateChanged);

        return authSubscribe;
    }, [user])
    return (
        <RootTabStack.Navigator
            initialRouteName={user ? 'HomeTab' : 'AuthStack'}
            screenOptions={{
                headerShown: false,
                gestureEnabled: false
            }}
        >      
            <RootTabStack.Screen
                name='AuthStack'
                component={AuthStack}
            />
            <RootTabStack.Screen
                name='HomTab'
                component={HomeTab}
            />
        </RootTabStack.Navigator>
    )
}

export default index;