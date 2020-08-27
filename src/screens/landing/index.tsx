import React from 'react'
import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { images } from '../../assets';
import { colors } from '../../assets/colors';
import CommonButton from '../../components/commonButton';
import { vi } from '../../languages/vi';
import { navigation } from '../../navigations/rootNavigations';

const LandingScreen = (): JSX.Element => {

    const onSignUpPressed = () => {
        navigation.navigate('SignUp',{})
    }

    const onLoginPressed = () => {
        navigation.navigate('Login',{})
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={images.splash_image} resizeMode={'cover'} style={{
                height: '100%', width: '100%',
            }}>
                <View style={{flex:1, justifyContent: 'space-around', alignContent: 'center', alignItems: 'center'}}>
                    <Image
                        source={images.logo_splash}
                        style={{ resizeMode: 'contain', width: 120, height: 29.32}}
                    />
                    <Image
                        source={images.landing_title}
                        style={{ resizeMode: 'contain', width: 288, height: 120 }}
                    />
                    <View style={{width:'100%'}}>
                        <CommonButton
                            buttonStyle={{ height: 56 }}
                            disabled={false}
                            onPress={onLoginPressed}
                            title={vi.button_login}
                            textStyle={{fontFamily: 'bold',fontSize: 18,color:colors.white}}
                        />
                        <Text style={{alignSelf:'center',fontSize:14,color:colors.white,marginTop: 24 }}>
                            {vi.or_connect}
                        </Text>
                        <Image
                            style={{alignSelf:'center',height: 30,width:70.33,marginTop:12}}
                            source={images.fb_apple_icon}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{color:colors.white,fontSize:16}}>
                            {vi.no_account}
                        </Text>
                        <TouchableOpacity onPress={onSignUpPressed} style={{paddingLeft:4}}>
                            <Text style={{color:colors.primaryYellow,fontSize:16}}>
                                {vi.sign_up_touchable_text}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default LandingScreen;
