import * as React from 'react'
import { createStackNavigator,StackNavigationOptions } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './rootNavigations';
import SplashScreen from './../screens/splash';
import AuthStack from './authStack';
import RootTab from './RootTab';
const RootStack = createStackNavigator()

const index = (): JSX.Element => {
    const navigationOptions: StackNavigationOptions = {
        headerShown: false,
        gestureEnabled: false,
        cardStyle: {
        }
    }
    return (
        <NavigationContainer ref={navigationRef}>
            <RootStack.Navigator
                initialRouteName='Splash'
                screenOptions={navigationOptions}
            >
                <RootStack.Screen
                    name='Splash'
                    component={SplashScreen}
                />      
                <RootStack.Screen
                    name='RootTab'
                    component={RootTab}
                />
            </RootStack.Navigator>
        </NavigationContainer>

    )
}

export default index;