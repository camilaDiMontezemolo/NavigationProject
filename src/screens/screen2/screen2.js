/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Button, Text } from 'react-native';


const Screen2 = ({route, navigation}) => {
    var name = route.params.personName;

    return (
        <View>
            <Text> Hola {name}! Estás en la pagina 2 </Text>
            <Button
            title="Volver Atrás"
            onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default Screen2;
