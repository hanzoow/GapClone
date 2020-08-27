import React from 'react'
import { View, Text } from 'react-native'
import { BottomTabBarOptions, createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './../screens/home';
import TimeTableScreen from './../screens/timetable';
import FavouritesScreen from './../screens/favourites';
import FriendsScreen from './../screens/friends';
import ChatScreen from './../screens/chat';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export type HomeTabParamList = {
    HomeIndex: undefined;
    TimetableIndex: undefined;
    FavouritesIndex: undefined;
    FriendsIndex: undefined;
    ChatIndex: undefined;
}
const screenOptions = {
    headerShown: false,
    gestureEnabled: false
}
const Stack = createStackNavigator();

const WhatsOnStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='HomeIndex'
                component={HomeScreen}
            />
        </Stack.Navigator>
    )
}

const TimetableStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='TimetableIndex'
                component={TimeTableScreen}
            />
        </Stack.Navigator>
    )
}

const FavouritesStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='FavouritesIndex'
                component={FavouritesScreen}
            />
        </Stack.Navigator>
    )
}

const FriendsStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='FriendsIndex'
                component={FriendsScreen}
            />
        </Stack.Navigator>
    )
}

const ChatStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='ChatIndex'
                component={ChatScreen}
            />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeTab = () => {
    const tabBarOptions: BottomTabBarOptions = {

    };
    const navigationOptions: BottomTabNavigationOptions = {

    };
    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => <Icon name="home"
                        size={30} color={focused ? '#000' : '#ddd'} />
                }} component={WhatsOnStack} name="HomeIndex" />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => <Icon name="magnify"
                    size={30} color={focused ? '#000' : '#ddd'} />
            }} component={TimetableStack} name="TimetableIndex" />
            <Tab.Screen
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        e.preventDefault();
                        navigation.navigate('GalleryChooser');
                    },
                })}
                options={{
                    tabBarIcon: ({ focused }) => <Icon name="plus-box"
                        size={30} color={'#ddd'} />
                }} component={FavouritesStack} name="FavouritesIndex" />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => <Icon name="magnify"
                    size={30} color={focused ? '#000' : '#ddd'} />
            }} component={FriendsStack} name="FriendsIndex" />
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => <Icon name="magnify"
                    size={30} color={focused ? '#000' : '#ddd'} />
            }} component={ChatStack} name="ChatIndex" />
        </Tab.Navigator>
    )
}

export default HomeTab;
