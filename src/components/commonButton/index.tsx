import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../assets/colors'

export interface Props {
    title: string,
    onPress: () => void,
    disabled: boolean,
    textStyle: object,
    buttonStyle: object,
}

const defaultProps = {
    buttonStyle:{
        marginLeft:24,
        marginRight:24,
        backgroundColor: colors.primaryRed,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
}

const CommonButton = (prop: Props) => {
    return (
        <TouchableOpacity
            disabled={prop.disabled}
            style={[defaultProps.buttonStyle,prop.buttonStyle]}
            onPress={prop.onPress}
        >
            <Text style={prop.textStyle}>
                {prop.title}
            </Text>
        </TouchableOpacity>
    )
}

export default CommonButton;