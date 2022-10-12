/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, Button, TextInput } from 'react-native';


const Screen1 = ({navigation}) => {
    const [text, setText] = useState('');

    return (
        <View>
            <TextInput
            value={text}
            onChangeText={(someText) => {setText(someText);}}
            />
            <Button
            title="Avanzar"
            onPress={() => navigation.navigate('screen2', {
                personName: text,
            })}
            />
        </View>
    );
};

export default Screen1;
