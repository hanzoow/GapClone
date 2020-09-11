import * as React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { vi } from "../../../languages/vi";
import { Picker } from '@react-native-community/picker';
import AddAndDeleteAnotherFiled from '../../commonAddAndDeleteAnotherField';
import { colors } from '../../../assets/colors';
import ModalAddNew from './../../modalAddnew'
import childProp from './testComponent';
const Step3 = (): JSX.Element => {

    const [university, setUniversity] = React.useState('');
    const [campus, setCampus] = React.useState('');
    const [faculty, setFaculty] = React.useState('');

    const fakeData = [
        {
            value: "aa",
            label: 'bb',
        },
        {
            value: "cc",
            label: 'dd',
        },
        {
            value: "ee",
            label: 'ff',
        },
        {
            value: "hh",
            label: 'qq',
        },

    ]

    const onAddNewOrDeletePressed = (value: string) => {
        if (value) {
            console.log(value)

        } else {
            console.log("rong")
        }
    }

    const onAddNew = (type: string) => {
        switch (type) {
            case 'university':
            // return <ModalAddNew />
            case 'campus':

            default:

        }
    }



    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width: '100%', flex: 1, }}
        >
            <ModalAddNew
                contentComponent={childProp}
            />
            <Text style={{ textAlign: 'center', fontSize: 26, fontWeight: 'bold', marginTop: 20 }}>
                {vi.tell_us_more}
            </Text>
            <View style={{ justifyContent: 'space-around', flex: 1 }}>
                <View style={{ flex: 1, marginTop: 40 }}>
                    <Text>{vi.university_title}<Text>{vi.force}</Text></Text>
                    <View style={{ width: '100%', backgroundColor: colors.strokeGrey, borderRadius: 5 }}>
                        <Picker
                            selectedValue={university}
                            onValueChange={(itemValue, itemIndex) => {
                                setUniversity(itemValue.toString())
                            }}
                            mode="dropdown"
                            style={{ height: 50, width: '100%' }}
                        >

                            <Picker.Item label={vi.university_placeholder} value='' />
                            <Picker.Item value='Java' label='Java' />
                            <Picker.Item value='AAA' label='AAAA' />
                        </Picker>
                    </View>
                    <TouchableOpacity
                        onPress={() => onAddNew('university')}
                    >
                        <Text style={{ color: colors.primaryBlue, marginTop: 10 }}>{vi.university_question_to_add}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, marginTop: 40 }}>
                    <Text>{vi.campus_title}<Text>{vi.force}</Text></Text>
                    <View style={{ width: '100%', backgroundColor: colors.strokeGrey, borderRadius: 5 }}>
                        <Picker
                            selectedValue={campus}
                            onValueChange={(itemValue, itemIndex) => {
                                setCampus(itemValue.toString())
                            }}
                            mode="dropdown"
                            style={{ height: 50, width: '100%' }}
                        >
                            <Picker.Item label={vi.campus_placeholder} value='' />
                            <Picker.Item value='Java' label='Java' />
                            <Picker.Item value='AAA' label='AAAA' />
                        </Picker>
                    </View>
                    <TouchableOpacity>
                        <Text style={{ color: colors.primaryBlue, marginTop: 10 }}>{vi.campus_question_to_add}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, marginTop: 40 }}>
                    <Text>{vi.faculty}</Text>
                    <View style={{ width: '100%', backgroundColor: colors.strokeGrey, borderRadius: 5 }}>
                        <Picker
                            selectedValue={faculty}
                            onValueChange={(itemValue, itemIndex) => {
                                setFaculty(itemValue.toString());
                            }}
                            mode="dropdown"
                            style={{ height: 50, width: '100%' }}
                        >
                            <Picker.Item label={vi.faculty_placeholder} value='' />
                            <Picker.Item value='Java' label='Java' />
                            <Picker.Item value='AAA' label='AAAA' />
                        </Picker>
                    </View>
                    <TouchableOpacity>
                        <Text style={{ color: colors.primaryBlue, marginTop: 10 }}>{vi.faculty_question_to_add}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, marginTop: 40 }}>
                    <Text>{vi.interested_in_question}</Text>
                    {/* {fakeData.map((value, index) => {
                        return <AddAndDeleteAnotherFiled
                            key={index}
                            value={value.label}
                            onPress={() => onAddNewOrDeletePressed(value.value)}
                        />
                    })} */}
                    <AddAndDeleteAnotherFiled
                        placeholder={vi.interested_in_placeholder}
                        onPress={() => onAddNewOrDeletePressed('')}
                        value={''}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default Step3;