/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Button, Text} from 'react-native';


const Drawer1 = ({navigation}) => {

    return (
        <View>
            <Text>Avanza a la proxima pagina</Text>
            <Button
            title="Avanzar"
            onPress={() => navigation.navigate('drawer2')}
            />
        </View>
    );
};

export default Drawer1;
