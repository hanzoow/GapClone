import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../assets/colors';

export interface Props {
    placeholder?: string,
    value: string,
    onPress?: () => void,
}

const AddAndDeleteAnotherFiled = (props: Props) => {
    const isChangeStyle: boolean = props.value != '';
    return (
        <View style={[{
            height: 56, width: '100%', borderRadius: 6,
            backgroundColor: colors.strokeGrey, justifyContent: 'center',
            marginTop: 10, marginBottom: 10,
        }, isChangeStyle ? { borderWidth: 1 }
            : { borderWidth: 1, borderColor: colors.dodgerBlue }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ marginLeft: 10 }}>
                    <Text style={isChangeStyle ? { color: colors.darksLateGray, fontWeight: 'bold' } : { color: colors.dodgerBlue }}>
                        {isChangeStyle ? props.value : props.placeholder}
                    </Text>
                </View>
                <TouchableOpacity
                    style={{ marginRight: 10 }}
                    onPress={props.onPress}
                    hitSlop={{bottom:10,top:10,right:10,left:10}}
                >
                    <Icon
                        style={isChangeStyle ? { color: colors.dodgerBlue } : { color: colors.dodgerBlue }}
                        name={isChangeStyle ? 'close-outline' : 'add-outline'}
                        size={20}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddAndDeleteAnotherFiled;
