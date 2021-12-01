import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';


const SignInScreen = () => {
    const { username, setUsername } = useState('');
    const { password, setPassword } = useState('');
    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn("Giriş Yap");

        navigation.navigate('HomeScreen');
    };
    const onForgotPasswordPressed = () => {
        console.warn("Şifremi Unuttum");
        navigation.navigate('ForgotPassword');
    };

    const onSignUpPress = () => {
        console.warn("Hesap Oluştur");
        navigation.navigate('SignUp');
    };
     return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode="contain"
                />
                <CustomInput
                    placeholder="Kullanıcı Adı"
                    value={username}
                    setValue={setUsername}
                />
                <CustomInput
                    placeholder="Parola"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />
                
                <CustomButton text="Giriş Yap" onPress={onSignInPressed} />
                <CustomButton
                    text="Şifremi Unuttum"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />

                <SocialSignInButtons />
                 
                <CustomButton
                    text="Hesabınız yok mu? Bir tane oluştur!"
                    onPress={onSignUpPress}
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
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
        height: 100,
        
    },
});

export default SignInScreen;
