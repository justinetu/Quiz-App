import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

const QuestionThreeScreen = ({route}) => {
    const menuIcon = <FontAwesome5Icon name='bars' size={30} color= '#354F52' style={styles.menuIconStyle}/>
    const { message } = route.params;
    const navigation = useNavigation();

    const [isCorrectPress, setIsCorrectPress]                     = useState(false);
    const [incorrectTextInputPress, setIncorrectTextInputPress]   = useState(false);
    const [incorrectGitPress, setIncorrectGitPress]               = useState(false);
    const [incorrectAppPress, setIncorrectAppPress]               = useState(false);

    let   [currScore, setCurrentScore]                            = useState({message}.message);

    const onCorrectPressHandler = () => {
        setCurrentScore(++currScore);
        setIsCorrectPress(true);
    }

    const onIncorrectTextInputPressHandler = () => {
        setIncorrectTextInputPress(true);
    };

    const onIncorrectGitPressHandler = () => {
        setIncorrectGitPress(true);
    }

    const onIncorrectAppPressHandler = () => {
        setIncorrectAppPress(true);
    }
    const messageDisplay = () => {
        if(isCorrectPress) {
            return (
                <View style={{top: 220, alignItems: 'center'}}>
                    <Text style={{
                        fontSize: 15, 
                        fontWeight: 'bold',
                        color: 'green'
                        }}>Your answer is correct</Text>
                </View>
            )
        }
        if(incorrectTextInputPress || incorrectGitPress || incorrectAppPress) {
            return (
                <View style={{top: 220, alignItems: 'center'}}>
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
        if(isCorrectPress || incorrectTextInputPress || incorrectGitPress || incorrectAppPress) {
            return (
                <TouchableOpacity 
                    style={styles.nextBtnStyle} // FIX: does not chance opacity yet
                    onPress={() => navigation.navigate('QuestionFourScreen', {message: currScore})}>
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
    const prevPageBtnDisplay = () => {
        if(isCorrectPress || incorrectTextInputPress || incorrectGitPress || incorrectAppPress) {
            return (
                <TouchableOpacity
                onPress={() => navigation.navigate('QuestionTwoScreen')}
                style={styles.prevBtnStyle}>
                    <View style={{
                        height: 60,
                        width: 60,
                        borderRadius: '100%',
                        backgroundColor: '#fff',
                        borderWidth: 2,
                        borderColor: '#354F52',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignContent: 'center'
                        }}>
                        <Image source={require('../assets/images/icons8-left-arrow-48 (1).png')}
                        style={{width: 35, height: 35}}/>
                    </View>
            </TouchableOpacity>
            );
        }
    }
    return (
        <View style={styles.container}>
            {menuIcon}
                <Image source={require('../assets/images/icons8-code-48.png')}
                    style={{width: 30, height: 30, position: 'absolute', top: 75, left: 115}}/>
                <Text style={styles.logoStyle}>TESTER</Text>
            <View style={styles.loadingBarStyle}></View>
            <View style={styles.loadingBarStyle2}></View>
            <View style={styles.textView}>
                <Text style={styles.textStyle}>What is the React component that </Text>
                <Text style={styles.textStyle}>renders an image?</Text>
            </View>
                {messageDisplay()}
                {nextPageBtnDisplay()}
                {prevPageBtnDisplay()}
            <View>
                <TouchableOpacity onPress={onCorrectPressHandler} style={{
                    backgroundColor: isCorrectPress ? '#7AE582' : '#fff',
                    borderWidth:2, 
                    borderColor: '#E0DEDE', 
                    padding: 8, 
                    marginRight: 25, 
                    marginLeft: 25,
                    marginTop: 250,
                    height: 52,
                    borderRadius: 8,
                    }}>
                    <View>
                        <Text style={{
                            fontWeight: '700', 
                            fontSize: 20,
                            marginTop: 5}}>A) Image</Text>
                        </View>
                </TouchableOpacity>
                <View style={{marginBottom: 40}}></View>
                <TouchableOpacity onPress={onIncorrectTextInputPressHandler} style={{
                    backgroundColor: incorrectTextInputPress ? '#FF4C4C' : '#fff',
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
                            }}>B) TextInput</Text>
                        </View>
                </TouchableOpacity>

                <View style={{marginBottom: 40}}></View>
                <TouchableOpacity onPress={onIncorrectGitPressHandler} style={{
                    backgroundColor: incorrectGitPress ? '#FF4C4C' : '#fff',
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
                            }}>C) Git</Text>
                        </View>
                </TouchableOpacity>

                <View style={{marginBottom: 40}}></View>
                <TouchableOpacity onPress={onIncorrectAppPressHandler} style={{
                    backgroundColor: incorrectAppPress ? '#FF4C4C' : '#fff',
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
                            }}>D) App.js</Text>
                        </View>
                </TouchableOpacity>               
            </View>
        </View>
    );
};

export default QuestionThreeScreen;

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
        left: 50,
    },
    textView: {
        position: 'absolute',
        top: 200
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
    nextBtnStyle: {
        bottom: 40,
        right: 25,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',  
    },
    prevBtnStyle: {
        bottom: 40,
        left: 25,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center', 
    }
})