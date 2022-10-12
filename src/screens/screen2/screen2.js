/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Button, Text } from 'react-native';


const Screen2 = ({navigation}) => {

    return (
        <View>
            <Text> Estás en la pagina 2 </Text>
            <Button
            title="Avanzar"
            onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default Screen2;
