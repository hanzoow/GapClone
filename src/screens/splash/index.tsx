import React, { useEffect } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { replace } from './../../navigations/rootNavigations';
import { images } from './../../assets/index';
const SplashScreen = (): JSX.Element => {

    useEffect(() => {
        setTimeout(() => {
            replace('RootTab',{})
        },5000)
    },[])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={images.splash_image} resizeMode={'cover'} style={{ height: '100%', width: '100%',justifyContent:'center',alignItems:'center' }}>
                <Image
                    source={images.logo_splash}
                    style={{resizeMode:'contain',width:221,height:54}}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

export default SplashScreen;
