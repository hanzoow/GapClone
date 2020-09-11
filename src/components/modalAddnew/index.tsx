import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';

export interface Props {
    contentComponent: React.ReactNode
}

const ModalAddNew = ({ contentComponent }: Props) => {

    useEffect(() => {
        console.log(contentComponent)
    })

    return (
        <View>
            <Modal isVisible={true}>
                <>
                    {contentComponent}
                </>
            </Modal>
        </View>
    )
}

export default ModalAddNew;