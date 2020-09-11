import * as React from 'react';
import { Text, View } from "react-native"
import { vi } from "../../../languages/vi";


const Step4 = (): JSX.Element => {
    return (
        <>
            <Text>
                {vi.add_profile_pic}
            </Text>
            <Text>
                {vi.default_pic_statement}
            </Text>
            <View>

            </View>
        </>
    )
}

export default Step4;