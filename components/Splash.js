
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-vector-icons/FontAwesome5';
import { Image } from 'react-native';
import QuestionOneScreen from './QuestionOneScreen';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();
    const image = {uri: 'https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
    
    return (
        <View style={styles.container}>
                <ImageBackground source={image} resizeMode='cover' style={styles.image}>
                    <Image source={require('../assets/images/icons8-source-code-48.png')} 
                        style={{width: 30, height: 30, position: 'absolute', top: 56, left: 115}}/>
                    <Text style={styles.logoStyle}>TESTER</Text>
                    <View style={styles.splashTextView}>
                        <Text style={styles.splashText}>Do you know</Text>
                        <Text style={styles.splashText}>React Native?</Text>
                    </View>
                        <TouchableOpacity onPress={() => navigation.navigate('QuestionOneScreen')}>
                            <View style={styles.buttonView}>
                                <Text style={styles.buttonText}>Let's find out</Text>
                                <Image 
                                    source={require('../assets/images/icons8-move-right-48.png')}
                                    style={{width: 25, height: 25}}/>
                            </View>
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row', marginTop: 17}}>
                                <Image 
                                    source={require('../assets/images/icons8-clock-48.png')}
                                    style={{width: 25, height: 25, marginRight: 10}}/>
                                <Text style={styles.timeDurationText}>2 minute quiz</Text>
                            </View>
                </ImageBackground>
            </View> 
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    splashTextView: {
        marginTop: 400,
        right: 80
    },
    splashText: {
        fontSize: 40,
        fontWeight: '500',
        color: '#fff',
        left: 22,
    },
    logoStyle: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'Jua',
        fontWeight: '600',
        position: 'absolute',
        top: 56
    },
    buttonView: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        marginTop: 30,
        marginLeft: 16,
        width: 357,
        height: 62,
        marginRight: 17,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontWeight: '700',
        fontSize: 20,
        marginRight: 11
    },
    timeDurationText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
        
    }
  });

export default Splash;
