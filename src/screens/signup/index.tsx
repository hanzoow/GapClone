import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../assets/colors';
import BlueButton from '../../components/commonBlueButton';
import Steps from '../../components/registerSteps';
import Step1 from '../../components/signupComponents/step1';
import Step2 from '../../components/signupComponents/step2';
import Step3 from '../../components/signupComponents/step3';
import Step4 from '../../components/signupComponents/step4';
import { vi } from '../../languages/vi';
import { goBack } from '../../navigations/rootNavigations';

const SignUpScreen = (): JSX.Element => {
    const [currentStep, setCurrentStep] = useState(1);



    const _onNextButtonClick = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1)
        } else {
            console.log("AAAA")
            //call api
        }
    }





    const renderGuideText = (guideText: string) => {

    }

    const _onStepChange = (step: number) => {
        setCurrentStep(step)
    }

    const _onIconBackPressed = () => {
        if (currentStep != 1) {
            setCurrentStep(currentStep - 1);
        } else {
            goBack();
        }
    }

    const _renderContentByStep = () => {
        switch (currentStep) {
            case 2:
                return <Step2 />
            case 3:
                return <Step3 />
            case 4:
                return <Step4 />
            case 1:
                return <Step1 />
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20, marginTop: 8 }}>
                <Icon
                    onPress={_onIconBackPressed}
                    name='arrow-back-outline'
                    size={20}
                    color={colors.dodgerBlue}
                />
                <Text style={{ color: colors.dodgerBlue, }}>
                    {vi.already_registered_question}
                </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ alignSelf: 'center' }}>Step {currentStep} of 4</Text>
                <View>
                    <Steps
                        onChangeIndex={_onStepChange}
                        step={currentStep}
                    />
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', marginRight: 24, marginLeft: 24 }}>
                {_renderContentByStep()}
            </View>
            <BlueButton
                onPressed={_onNextButtonClick}
                text={vi.next}
                buttonStyle={{ width: '100%', height: 64, }}
            />
        </View>
    )
}

export default SignUpScreen;
