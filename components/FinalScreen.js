import { View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

const FinalScreen = ({route}) => {
    const { message } = route.params;
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/icons8-source-code-48.png')} 
                    style={{width: 30, height: 30, position: 'absolute', top: 56, left: 115}}/>
            <Text style={styles.logoStyle}>TESTER</Text>
            <View style={{alignContent: 'center', alignItems: 'center'}}>
                <Text style={styles.textStyle}>Quiz Complete!!</Text>
                <Text style={styles.textStyle}>Score:</Text>
                <Text style={styles.textStyle}>{message}/4</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Splash')}>
                <View style={styles.buttonView}>
                    <Text style={styles.buttonText}>Return home</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default FinalScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#354F52',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    logoStyle: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'Jua',
        fontWeight: '600',
        position: 'absolute',
        top: 56
    },
    textStyle: {
        color: '#fff',
        fontSize: 30
    },
    buttonView: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        marginTop: 30,
        marginLeft: 16,
        width: 250,
        height: 62,
        marginRight: 17,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontWeight: '700',
        fontSize: 20,
        marginRight: 11
    }
})