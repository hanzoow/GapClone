import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { colors } from '../../assets/colors';
import BlueButton from '../../components/commonBlueButton';
import CustomTextInput from '../../components/commonTextInput';
import { vi } from '../../languages/vi';
import { loginRequest } from '../../reducers/user/actions';
import { userLoginWithEmail } from '../../reducers/user/interface';
import { dispatch, navigate } from './../../navigations/rootNavigations';
const LoginScreen = (): JSX.Element => {
    const [showPassword, setShowPassword] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(true);
    const [email, setEmail] = useState('hoaivu@gmail.com');
    const [password, setPassword] = useState('hoaivu123');

    const onLoginPressed = () => {
        const userLoginInfo = {email,password}
        loginRequest(userLoginInfo)
    }

    const _onClickShowPassword = () => {
        setShowPassword(!showPassword)
        setIsShowPassword(!isShowPassword)
    }

    const onForgotPasswordPressed = () => {
        console.log("forgot")
    }

    const _onChangeTextEmail = (email: string) => {
        setEmail(email)
    }

    const _onChangeTextPassword = (password: string) => {
        setPassword(password)
    }

    const _onSignUpPressed = () => {
        navigate('SignUp');
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <TouchableOpacity onPress={_onSignUpPressed}>
                <Text style={{ alignSelf: 'flex-end', marginTop: 11, color: colors.dodgerBlue, marginRight: 20 }}>
                    {vi.no_have_account}
                </Text>
            </TouchableOpacity>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight: 24, marginLeft: 24 }}>
                <View style={{ width: '100%', alignItems: 'center', alignSelf: 'center' }}>
                    <Text style={{ marginBottom: 39 }}>{vi.login_title}</Text>
                    <CustomTextInput
                        placeholder='Email address'
                        placeholderTextColor={colors.darksLateGray}
                        autoFocus={true}
                        keyboardType={'email-address'}
                        onChangeText={_onChangeTextEmail}
                        value={email}
                        autoCap={'none'}
                    />
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 12 }}>
                        <CustomTextInput
                            placeholder='Password'
                            placeholderTextColor={colors.darksLateGray}
                            isSecure={isShowPassword}
                            onChangeText={_onChangeTextPassword}
                            value={password}
                            autoCap={'none'}
                        />
                        <TouchableOpacity
                            onPress={_onClickShowPassword}
                            style={{ position: 'absolute', zIndex: 2, right: 12 }}
                            hitSlop={{ bottom: 5, top: 5, right: 5, left: 5 }}
                        >
                            <Icon
                                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={onForgotPasswordPressed}>
                        <Text style={{ marginTop: 24 }}>
                            {vi.forgot_password}
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
            <BlueButton
                onPressed={onLoginPressed}
                text={vi.login_title}
                buttonStyle={{ width: '100%', height: 64, }}
            />
        </View>
    )
}


export default LoginScreen;