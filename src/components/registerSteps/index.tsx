import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../assets/colors';



export interface Props {
    onChangeIndex: (step: number) => void,
    step: number,
}

export interface StepsProps {
    id: number,
    step: number,
    isDone: boolean,
    isActive: boolean,
    isEdit: boolean,
}

const defaultSteps = [
    {
        id: 1,
        step: 1,
        isDone: false,
        isActive: true,
        isEdit: false,
        canEdit: true,
    },
    {
        id: 2,
        step: 2,
        isDone: false,
        isActive: false,
        isEdit: false,
        canEdit: true,
    },
    {
        id: 3,
        step: 3,
        isDone: false,
        isActive: false,
        isEdit: false,
        canEdit: false,
    },
    {
        id: 4,
        step: 4,
        isDone: false,
        isActive: false,
        isEdit: false,
        canEdit: false,
    },

]

const Steps = (props: Props) => {
    const [steps, setSteps] = React.useState(defaultSteps)
    const [currentStep, setCurrentStep] = React.useState(0);

    React.useEffect(() => {
        _onStepChanged(props.step);
    }, [props.step])

    // const _onPressStep = ({ step, isEdit, isActive, isDone }: StepsProps) => {
    //     const decreaseStep = step - 1;
    //     setCurrentStep(decreaseStep);
    //     if (currentStep == decreaseStep) return;
    //     const newSteps = steps.map(({ step, isActive, isDone, isEdit }, index) => {
    //         if (decreaseStep == index) {
    //             return { ...steps[decreaseStep], isActive: true }
    //         }
    //         else {
    //             return { ...steps[index], isActive: false }
    //         }
    //     })
    //     setSteps(newSteps);
    //     _onStepChanged(decreaseStep + 1)
    // }

    const _onStepChanged = (step: number) => {
        // console.log("before", steps)
        const newStepsAfterStepChanged = steps.map(({ }, index) => {
            if (index + 1 <= step) {
                return { ...steps[index], isActive: true, isDone: true }
            } else {
                return { ...steps[index], isActive: false, isDone: false }
            }
        })
        // console.log("After", newStepsAfterStepChanged)
        setSteps(newStepsAfterStepChanged)
        props.onChangeIndex(step)
    }

    const _renderContentInside = (step: StepsProps) => {
        if (step.isDone) {
            return (
                <Icon
                    name='checkmark-done-outline'
                    size={20}
                />
            )
        } else {
            return (
                <Text>{step.step}</Text>
            )
        }
    }

    const renderSteps = () => {
        return steps.map((step, index) => {
            return (
                <View key={index} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{
                        backgroundColor: step.isActive ? colors.dodgerBlue : colors.smokeOne,
                        borderRadius: 22, height: 44, width: 44, alignItems: 'center', justifyContent: 'center'
                    }}
                    // onPress={() => _onPressStep(step)}
                    >
                        {_renderContentInside(step)}
                    </TouchableOpacity>
                    {index < steps.length - 1 &&
                        <View
                            style={{ height: 2, width: 16, backgroundColor: 'red', marginHorizontal: 4 }}
                        />
                    }
                </View>
            )
        })
    }

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            {renderSteps()}
        </View>
    )
}


export default Steps;