import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = () => {
    const { username, setUsername } = useState('');
    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');
    const { passwordRepeat, setPasswordRepeat } = useState('');
    const navigation = useNavigation();
   

    const onRegisterPressed = () => {
        console.warn("Kayıt ol");
        navigation.navigate('ConfirmEmail');
    };
    

    const onSignInPress = () => {
        console.warn("Hesaba Giriş ");
        navigation.navigate('SignIn');
    };

    const onTermsOfUsePressed = () => {
        console.warn(' Kullanım Şartlarımız ');
    };

    const onPrivacyPressed = () => {
        console.warn('Gizlilik Politikamız');
    };

     return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.root}>
                <Text style={styles.title}>Hesap Oluşturma</Text>
                <CustomInput
                    placeholder="Kullanıcı Adı"
                    value={username}
                    setValue={setUsername}
                 />
                 <CustomInput
                    placeholder="Email Adresi"
                    value={email}
                    setValue={setEmail}
                />
                <CustomInput
                    placeholder="Parola"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                 />
                 <CustomInput
                    placeholder="Parola Tekrar"
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry={true}
                />
                
                <CustomButton text="Kayıt ol" onPress={onRegisterPressed} />
                
                 
                 <Text style={styles.text}>Kaydolarak,
                     <Text style={styles.link} onPress={onTermsOfUsePressed}> Kullanım Şartlarımızı </Text> ve 
                     <Text style={styles.link} onPress={onPrivacyPressed}> Gizlilik Politikamızı </Text>
                      Kabul Ettiğinizi Onaylamış Olursunuz. 
                 </Text>

                 <SocialSignInButtons />

             
                <CustomButton
                    text="Hesabınız var mı? Giriş yapın!"
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

export default SignUpScreen;
