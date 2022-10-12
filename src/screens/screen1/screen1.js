/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, Button, TextInput } from 'react-native';


const Screen1 = ({navigation}) => {
    const [text, setText] = useState('');

    return (
        <View>
            <TextInput
            value={text}
            onChangeText={(someText) => {setText(text);}}
            />
            <Button
            title="Avanzar"
            onPress={() => navigation.navigate('screen2', {
                name: text,
            })}
            />
        </View>
    );
};

export default Screen1;
