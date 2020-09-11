import * as React from 'react'
import { View, Text, TouchableOpacity, TextInput, TextInputProps } from 'react-native'
import { colors } from '../../assets/colors'

export interface Props  extends TextInputProps{
    disabled?: boolean,
    placeholder?: string,
    style?: object,
    placeholderTextColor:string,
    autoFocus?:boolean,
    isSecure?: boolean,
    keyboardType?:any,
    value:string,
    onChangeText?: (text:string) => void,
    onSubmitEditing?: () => void,
    autoCap?: any,
}

const defaultProps = {
    buttonStyle: {
        marginLeft: 24,
        marginRight: 24,
        backgroundColor: colors.primaryRed,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
}

const CustomTextInput = (prop: Props) => {

    return (
        <TextInput
            {...prop}
            placeholder={prop.placeholder}
            style={[
                {                   
                    width: '100%',
                    height: 56,
                    backgroundColor: colors.greyOne,
                    borderRadius:4,
                    borderColor: colors.smokeOne,
                    borderWidth: 1,
                },
                prop.style,
            ]}
            secureTextEntry={prop.isSecure}
            keyboardType={prop.keyboardType}
            onChangeText={prop.onChangeText}
            autoCapitalize={prop.autoCap}
        />
    )
}

export default CustomTextInput;