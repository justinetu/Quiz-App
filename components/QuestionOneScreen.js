import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable} from "react-native";
import FontAwesome5Icon, { Icon } from 'react-native-vector-icons/FontAwesome5';
//import Icon from 'react-native-ionicons'
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import QuestionTwoScreen from "./QuestionTwoScreen";

const QuestionOneScreen = () => {
    const navigation = useNavigation();

    const [isCorrectPress, setIsCorrectPress]           = useState(false);
    const [incorrectTextPress, setIncorrectTextPress]   = useState(false);
    const [incorrectViewPress, setIncorrectViewPress]   = useState(false);
    const [incorrectImagePress, setIncorrectImagePress] = useState(false);

    let   [currScore, setCurrentScore]                  = useState(0);

    const onCorrectPressHandler = () => {
        setCurrentScore(currScore + 1);
        setIsCorrectPress(true);
    }

    const onIncorrectTextPressHandler = () => {
        setIncorrectTextPress(true);
    };

    const onIncorrectViewPressHandler = () => {
        setIncorrectViewPress(true);
    }

    const onIncorrectImagePressHandler = () => {
        setIncorrectImagePress(true);
    }

    const messageDisplay = () => {
        if(isCorrectPress) {
            return (
                <View style={{top: 230, alignItems: 'center'}}>
                    <Text style={{
                        fontSize: 15, 
                        fontWeight: 'bold',
                        color: 'green'
                        }}>Your answer is correct</Text>
                </View>
            )
        }
        if(incorrectTextPress || incorrectViewPress || incorrectImagePress) {
            return (
                <View style={{top: 230, alignItems: 'center'}}>
                    <Text style={{
                        fontSize: 15, 
                        fontWeight: 'bold',
                        color: 'red'
                        }}>Your answer is incorrect</Text>
                </View>
            )
        }
    }
    const nextPageBtnDisplay = () => {
        if(isCorrectPress || incorrectTextPress || incorrectViewPress || incorrectImagePress) {
            return (
                <TouchableOpacity 
                    style={styles.nextBtnStyle} // FIX: does not chance opacity yet
                    onPress={() => navigation.navigate('QuestionTwoScreen', { message: currScore})}>
                        <View style={{
                        height: 60, 
                        width: 60, 
                        borderRadius: '100%', 
                        backgroundColor: '#354F52',       
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignContent: 'center'
                        }}>
                        <Image source={require('../assets/images/icons8-right-arrow-48.png')}
                        style={{width: 35, height: 35}}/>
                    </View>
                </TouchableOpacity>
            );
        }
    }

    const menuIcon = <FontAwesome5Icon name='bars' size={30} color= '#354F52' style={styles.menuIconStyle}/>
    return (
        // The problem I'm facing now is deciding which type of Icon component to use for the menu bar for the
        // question pages like: Icon, AntDesign, IonicIcons. Look at: (react-native-vector-icons directory) for guidance
        <View style={styles.container}>
            {menuIcon}
                <Image source={require('../assets/images/icons8-code-48.png')}
                    style={{width: 30, height: 30, position: 'absolute', top: 75, left: 115}}/>
                <Text style={styles.logoStyle}>TESTER</Text>
            <View style={styles.loadingBarStyle}></View>
            <View style={styles.loadingBarStyle2}></View>
            <View style={styles.textView}>
                <Text style={styles.textStyle}>Which of these is not </Text>
                <Text style={styles.textStyle}>a core React Native</Text>
                <Text style={styles.textStyle}>component?</Text>
            </View>
            {messageDisplay()}
            {nextPageBtnDisplay()}
            <View>
                <TouchableOpacity onPress={onIncorrectTextPressHandler} style={{
                    borderWidth: 2, 
                    borderColor: '#E0DEDE', 
                    padding: 8, 
                    marginRight: 25, 
                    marginLeft: 25,
                    marginTop: 250,
                    height: 52,
                    borderRadius: 8,
                    backgroundColor: incorrectTextPress ? '#FF4C4C' : '#fff'
                    }}>
                    <View>
                        <Text style={{
                            fontWeight: '700', 
                            fontSize: 20,
                            marginTop: 5}}>A) Text</Text>
                        </View>
                </TouchableOpacity>
                <View style={{marginBottom: 40}}></View>
                <TouchableOpacity onPress={onIncorrectViewPressHandler} style={{
                    borderWidth: 2, 
                    borderColor: '#E0DEDE',
                    padding: 8, 
                    marginRight: 25, 
                    marginLeft: 25,
                    height: 52,
                    borderRadius: 8,
                    backgroundColor: incorrectViewPress ? '#FF4C4C' : '#fff'
                    }}>
                    <View>
                        <Text style={{
                            fontWeight: '700', 
                            fontSize: 20,
                            marginTop: 5,
                            }}>B) View</Text>
                        </View>
                </TouchableOpacity>

                <View style={{marginBottom: 40}}></View>
                <TouchableOpacity onPress={onIncorrectImagePressHandler} style={{
                    backgroundColor: incorrectImagePress ? '#FF4C4C' : '#fff',
                    borderWidth: 2, 
                    borderColor: '#E0DEDE', 
                    padding: 8, 
                    marginRight: 25, 
                    marginLeft: 25,
                    height: 52,
                    borderRadius: 8}}>
                    <View>
                        <Text style={{
                            fontWeight: '700', 
                            fontSize: 20,
                            marginTop: 5,
                            }}>C) Image</Text>
                        </View>
                </TouchableOpacity>

                <View style={{marginBottom: 40}}></View>
                <TouchableOpacity style={{
                    backgroundColor: isCorrectPress ? '#7AE582' : '#fff',
                    borderWidth: 2, 
                    borderColor: '#E0DEDE', 
                    padding: 8, 
                    marginRight: 25, 
                    marginLeft: 25,
                    height: 52,
                    borderRadius: 8
                }} 
                onPress={onCorrectPressHandler}>
                    <View>
                        <Text style={{
                            fontWeight: '700', 
                            fontSize: 20,
                            marginTop: 5,
                            }}>D) Node</Text>
                        </View>
                </TouchableOpacity>
                
                
                
                
            </View>
        </View>
    );
};

export default QuestionOneScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //position: 'absolute',
        
        //alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    menuIconStyle: {
        position: 'absolute',
        top: 76,
        left: 16
    },
    textStyle: {
        fontSize: 35,
        fontWeight: '500',
        color: '#354F52',
        left: 35,
    },
    textView: {
        position: 'absolute',
        top: 190,
    },
    logoStyle: {
        color: '#354F52',
        fontSize: 24,
        fontFamily: 'Jua',
        fontWeight: '600',
        position: 'absolute',
        top: 75,
        left: 160
    },
    loadingBarStyle: {
        backgroundColor: '#354F52', 
        width: 190, 
        height: 5,
        position: 'absolute',
        top: 140
    },
    loadingBarStyle2: {
        backgroundColor: '#D9D9D9', 
        width: 190, 
        height: 5,
        position: 'absolute',
        top: 140,
        right: 0
    },
    correctAnsDisplay: {
        backgroundColor: '#7AE582',
        borderWidth: 0.5, 
        borderColor: '#E0DEDE', 
        padding: 8, 
        marginRight: 25, 
        marginLeft: 25,
        height: 52,
        borderRadius: 8
    },
    incorrectAnsDisplay: {
        backgroundColor: '#7AE582',
        borderWidth: 0.5, 
        borderColor: '#E0DEDE', 
        padding: 8, 
        marginRight: 25, 
        marginLeft: 25,
        height: 52,
        borderRadius: 8
    },
    nextBtnStyle: {
        bottom: 40,
        right: 25,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
  
})