import React from 'react'
import { View, Text } from 'react-native';
import {StackNavigationOptions,createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './../screens/login';
import SignUpScreen from './../screens/signup';
import LandingScreen from './../screens/landing';
export type AuthStackParamList = {
    Login: undefined;
    SignUp: undefined;
    Landing: undefined;
}

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
    const navigationOptions: StackNavigationOptions = {
        headerShown: false,
        gestureEnabled: false
    };

    return(
        <Stack.Navigator screenOptions={navigationOptions}>
            <Stack.Screen
                name='Landing'
                component={LandingScreen}
            />
            <Stack.Screen
                name='Login'
                component={LoginScreen}
            />
            <Stack.Screen
                name='SignUp'
                component={SignUpScreen}
            />
        </Stack.Navigator>
    )
}

export default AuthStack;