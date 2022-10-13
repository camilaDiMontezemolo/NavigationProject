/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Button, Text } from 'react-native';


const Drawer2 = ({navigation}) => {
    
    useEffect( () => {

        const unsubscribe = navigation.addListener('focus', () => {
            console.log('render');
        })
        
        return unsubscribe
    }, [navigation]);

    return (
        <View>
            <Text> Hola! renderizaste el drawer 2 </Text>
            <Button
            title="Volver Atrás"
            onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default Drawer2;
