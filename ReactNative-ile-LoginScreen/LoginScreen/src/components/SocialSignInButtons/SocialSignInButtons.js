import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {

    
    const onSignInFacebook = () => {
        console.warn("Facebook ile Giriş");
    };
    const onSignInGoogle = () => {
        console.warn("Google ile Giriş");
    };
    const onSignInIcloud = () => {
        console.warn("Icloud ile Giriş");
    };
    
    return (
        <>
               <CustomButton
                    text="Facebook ile Giriş Yapın"
                    onPress={onSignInFacebook}
                    bgColor="#E7EAF4"
                    fgColor="#4765A9"
                />
                <CustomButton
                    text="Google ile ile Giriş Yapın"
                    onPress={onSignInGoogle}
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                />
                <CustomButton
                    text="Icloud ile ile Giriş Yapın"
                    onPress={onSignInIcloud}
                    bgColor="#e3e3e3"
                    fgColor="#363636"
                />
        </>
    )
}

export default SocialSignInButtons;
