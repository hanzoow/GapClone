import React from 'react';
import { Text, View } from 'react-native';
import firebase from 'react-native-firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';
const HomeScreen = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(changeLoginStatusChanged(true))
    // })
    return(
        <View>
            <TouchableOpacity onPress={() => {firebase.auth().signOut()}}>
                <Text>dwqdwqdqw</Text>
            </TouchableOpacity>
            <Text>Hello from Home</Text>
        </View>
    )
}


export default HomeScreen;
