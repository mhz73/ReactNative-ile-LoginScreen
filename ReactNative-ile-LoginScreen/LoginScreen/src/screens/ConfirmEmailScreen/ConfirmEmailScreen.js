import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';


const ConfirmEmailScreen = () => {
   
    const { code, setCode } = useState('');
    const navigation = useNavigation();
   

    const onConfirmPressed = () => {
        console.warn("Onayla");
        navigation.navigate('HomeScreen');
    };
    
    const onSignInPress = () => {
        console.warn("Giriş Ekranı ");
        navigation.navigate('SignIn');
    };

    const onResendPressed = () => {
        console.warn('Kodu Yeniden Gönder');
    };

     return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.root}>
                <Text style={styles.title}>Email Onayla</Text>
                <CustomInput
                    placeholder="Doğrulama Kodunuzu Girin"
                    value={code}
                    setValue={setCode}
                 />
                
                
                 <CustomButton text="Onayla" onPress={onConfirmPressed} />

                <CustomButton
                    text="Kodu Yeniden Gönder"
                    onPress={onResendPressed}
                    type="SECONDARY"
                /> 
             
                <CustomButton
                    text="Giriş Ekranına Geri Dön!"
                    onPress={onSignInPress}
                    type="TERTIARY"
                />
            </View>
            
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 25,
    },
   
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,

    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075'
    },
});

export default ConfirmEmailScreen;
