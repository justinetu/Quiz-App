import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
// import { Icon } from 'react-native-vector-icons/FontAwesome5';
// import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuestionOneScreen from './components/QuestionOneScreen';
import QuestionTwoScreen from './components/QuestionTwoScreen';
import QuestionThreeScreen from './components/QuestionThreeScreen';
import QuestionFourScreen from './components/QuestionFourScreen';
import FinalScreen from './components/FinalScreen';
import Splash from './components/Splash';

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
         <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Splash'
                    component={Splash}
                    options={{headerShown: false}}
                    
                />
                <Stack.Screen 
                    name='QuestionOneScreen'
                    component={QuestionOneScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name='QuestionTwoScreen'
                    component={QuestionTwoScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name='QuestionThreeScreen'
                    component={QuestionThreeScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name='QuestionFourScreen'
                    component={QuestionFourScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name='FinalScreen'
                    component={FinalScreen}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );

}