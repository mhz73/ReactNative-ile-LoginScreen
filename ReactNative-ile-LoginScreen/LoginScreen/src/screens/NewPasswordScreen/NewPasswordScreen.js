import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';


const NewPasswordScreen = () => {
   
    const { code, setCode } = useState('');
    const { newPassword, setNewPassword } = useState('');
    const navigation = useNavigation();
   

    const onSubmitPressed = () => {
        console.warn("Onayla");
        navigation.navigate('HomeScreen');
    };


    const onSignInPress = () => {
        console.warn("Giriş Ekranı ");
         navigation.navigate('SignIn');
    };

   


     return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.root}>
                <Text style={styles.title}>Parolayı Sıfırla</Text>
                <CustomInput
                    placeholder="Onay Kodu"
                    value={code}
                    setValue={setCode}
                 />
                 <CustomInput
                     placeholder="Yeni Parola"
                     value={newPassword}
                     setValue={setNewPassword}
                 />
                
                
                
                 <CustomButton text="Onayla" onPress={onSubmitPressed} />
 
             
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

export default NewPasswordScreen;
