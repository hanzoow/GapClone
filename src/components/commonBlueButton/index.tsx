import * as React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { colors } from '../../assets/colors'

export interface Props {
    disabled?: boolean,
    text: string,
    buttonStyle?: object,
    onPressed: () => void,
    textStyle?:object,
}

const defaultProps = {
    button: {
        backgroundColor: colors.dodgerBlue,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontFamily: 'bold',
        fontSize: 18,
        color: colors.white
    }
}


const BlueButton = (prop: Props) => {

    return (
        <TouchableOpacity style={[defaultProps.button,prop.buttonStyle]} onPress={prop.onPressed}>
            <Text style={[defaultProps.text,prop.textStyle]}>
                {prop.text}
            </Text>
        </TouchableOpacity>
    )
}

export default BlueButton;