import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../../assets/colors';
import { vi } from '../../../languages/vi';
import CustomTextInput from '../../commonTextInput';


const Step1 = (): JSX.Element => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [isShowPassword, setIsShowPassword] = React.useState(true);

    const _onClickShowPassword = () => {
        setShowPassword(!showPassword)
        setIsShowPassword(!isShowPassword)
    }

    const _onChangeTextFirstName = (firstName: string) => {
        setFirstName(firstName)
    }

    const _onChangeTextLastName = (lastName: string) => {
        setLastName(lastName)
    }

    const _onChangeTextEmail = (email: string) => {
        setEmail(email)
    }

    const _onChangeTextPassword = (password: string) => {
        setPassword(password)
    }
    return (
        <>
            <Text>
                {vi.register_title}
            </Text>
            <View style={{ width: '100%' }}>
                <View style={{ width: '100%' }}>
                    <CustomTextInput
                        placeholder={vi.first_name_placeholder}
                        placeholderTextColor={colors.darksLateGray}
                        autoFocus={true}
                        onChangeText={_onChangeTextFirstName}
                        value={firstName}
                    />
                    <CustomTextInput
                        style={{ marginTop: 12 }}
                        placeholder={vi.last_name_placeholder}
                        placeholderTextColor={colors.darksLateGray}
                        autoFocus={true}
                        onChangeText={_onChangeTextLastName}
                        value={lastName}
                    />
                </View>
                <View style={{ width: '100%', marginTop: 32 }}>
                    <CustomTextInput
                        placeholder='Email address'
                        placeholderTextColor={colors.darksLateGray}
                        autoFocus={true}
                        keyboardType={'email-address'}
                        onChangeText={_onChangeTextEmail}
                        value={email}
                        autoCap={'none'} />
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
                </View>
            </View>
            <View style={{ flexDirection: 'row', display: 'flex', flexWrap: 'wrap' }}>
                <Text>{vi.guide_text}</Text>
            </View>
        </>
    )
}

export default Step1;