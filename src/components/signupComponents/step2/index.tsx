import * as React from 'react';
import { Text, TouchableOpacity, View } from "react-native"
import { colors } from '../../../assets/colors';
import { vi } from "../../../languages/vi";
import Icon from 'react-native-vector-icons/Ionicons'


const Step2 = (): JSX.Element => {

    const _onEditPicProfilePressed = () => {

    }

    return (
        <>
            <View style={{justifyContent:'center',alignItems:'center',marginRight:51,marginLeft:51}}>
                <Text>
                    {vi.add_profile_pic}
                </Text>
                <Text style={{textAlign:'center'}}>
                    {vi.default_pic_statement}
                </Text>
            </View>
            <TouchableOpacity onPress={_onEditPicProfilePressed} style={{ height: 120, width: 129 }}>
                <View style={{ backgroundColor: colors.dodgerBlue, height: 40, width: 40, borderRadius: 20, justifyContent: 'center',position:'absolute',right:0,zIndex:2 }}>
                    <Icon
                        name='add-outline'
                        size={18}
                        style={{ alignSelf: "center" }}
                    />
                </View>
                <View style={{ height: 120, width: 120, borderRadius: 60, backgroundColor: colors.strokeGrey, justifyContent: 'center' }}>
                    <Text style={{ alignSelf: 'center' }}>
                        MC
                    </Text>
                </View>
            </TouchableOpacity>
            <Text>
                {vi.skip_and_do_later}
            </Text>
        </>
    )
}

export default Step2;