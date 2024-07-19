import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const QuestionTwoScreen = ({route}) => {
    const menuIcon = <FontAwesome5Icon name='bars' size={30} color= '#354F52' style={styles.menuIconStyle}/>
    const { message } = route.params;
    const navigation = useNavigation();

    const [isCorrectPress, setIsCorrectPress]                       = useState(false);
    const [incorrectStylesheetPress, setIncorrectStylesheetPress]   = useState(false);
    const [incorrectListViewPress, setIncorrectListViewPress]       = useState(false);
    const [incorrectRenderPress, setIncorrectRenderPress]           = useState(false);

    let   [currScore, setCurrentScore]                              = useState({message}.message);

    const onCorrectPressHandler = () => {
        setCurrentScore(++currScore);
        setIsCorrectPress(true);
    }

    const onIncorrectStylesheetHandler = () => {
        setIncorrectStylesheetPress(true);
    }

    const onIncorrectListViewPressHandler = () => {
        setIncorrectListViewPress(true);
    }

    const onIncorrectRenderPressHandler = () => {
        setIncorrectRenderPress(true);
    }

    const messageDisplay = () => {
        if(isCorrectPress) {
            return (
                <View style={{top: 210, alignItems: 'center'}}>
                    <Text style={{
                        fontSize: 15, 
                        fontWeight: 'bold',
                        color: 'green'
                        }}>Your answer is correct</Text>
                </View>
            )
        }
        if(incorrectStylesheetPress || incorrectListViewPress || incorrectRenderPress) {
            return (
                <View style={{top: 210, alignItems: 'center'}}>
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
        if(isCorrectPress || incorrectListViewPress || incorrectStylesheetPress || incorrectRenderPress) {
            return (
                <TouchableOpacity 
                    style={styles.nextBtnStyle} // FIX: does not chance opacity yet
                    onPress={() => navigation.navigate('QuestionThreeScreen', {message: currScore})}>
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
        if(isCorrectPress || incorrectListViewPress || incorrectStylesheetPress || incorrectRenderPress) {
            return (
                <TouchableOpacity
                onPress={() => navigation.navigate('QuestionOneScreen')}
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
                <Text style={styles.textStyle}>What is the most basic component? It renders</Text>
                <Text style={styles.textStyle}>text.</Text>
            </View>
            <View>
                {messageDisplay()}
                {nextPageBtnDisplay()}
                {prevPageBtnDisplay()}
                <TouchableOpacity onPress={onIncorrectStylesheetHandler} style={{
                    borderWidth: 2, 
                    borderColor: '#E0DEDE', 
                    padding: 8, 
                    marginRight: 25, 
                    marginLeft: 25,
                    marginTop: 250,
                    height: 52,
                    borderRadius: 8,
                    backgroundColor: incorrectStylesheetPress ? '#FF4C4C' : '#fff'
                    }}>
                    <View>
                        <Text style={{
                            fontWeight: '700', 
                            fontSize: 20,
                            //marginLeft: 38,
                            marginTop: 5}}>A) Stylesheet</Text>
                        </View>
                </TouchableOpacity>
                <View style={{marginBottom: 40}}></View>
                <TouchableOpacity onPress={onIncorrectListViewPressHandler} style={{
                    borderWidth: 2, 
                    borderColor: '#E0DEDE', 
                    padding: 8, 
                    marginRight: 25, 
                    marginLeft: 25,
                    height: 52,
                    borderRadius: 8,
                    backgroundColor: incorrectListViewPress ? '#FF4C4C' : '#fff'
                    }}>
                    <View>
                        <Text style={{
                            fontWeight: '700', 
                            fontSize: 20,
                            marginTop: 5,
                            }}>B) ListView</Text>
                        </View>
                </TouchableOpacity>

                <View style={{marginBottom: 40}}></View>
                <TouchableOpacity style={{
                    borderWidth: 2, 
                    borderColor: '#E0DEDE', 
                    padding: 8, 
                    marginRight: 25, 
                    marginLeft: 25,
                    height: 52,
                    borderRadius: 8,
                    backgroundColor: isCorrectPress ? '#7AE582' : '#fff',
                    }}
                    onPress={onCorrectPressHandler}>
                    <View>
                        <Text style={{
                            fontWeight: '700', 
                            fontSize: 20,
                            marginTop: 5,
                            }}>C) Text</Text>
                        </View>
                </TouchableOpacity>

                <View style={{marginBottom: 40}}></View>
                <TouchableOpacity onPress={onIncorrectRenderPressHandler} style={{
                    borderWidth: 2, 
                    borderColor: '#E0DEDE', 
                    padding: 8, 
                    marginRight: 25, 
                    marginLeft: 25,
                    height: 52,
                    borderRadius: 8,
                    backgroundColor: incorrectRenderPress ? '#FF4C4C' : '#fff'
                    }}>
                    <View>
                        <Text style={{
                            fontWeight: '700', 
                            fontSize: 20,
                            marginTop: 5,
                            }}>D) Render</Text>
                        </View>
                </TouchableOpacity>
                
                
                
                
            </View>
        </View>
    );
};

export default QuestionTwoScreen;

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
        left: 25,
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
        bottom: -80,
        right: 25,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',  
    },
    prevBtnStyle: {
        bottom: -80,
        left: 25,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center', 
    }
})