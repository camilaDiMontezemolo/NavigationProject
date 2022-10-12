/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Button } from 'react-native';


const Screen1 = ({navigation}) => {

    return (
        <View>
            <Button
            title="Avanzar"
            onPress={() => navigation.navigate('screen2')}
            />
        </View>
    );
};

export default Screen1;
