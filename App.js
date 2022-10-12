/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from 'src/screens/screen1/screen1.js';
import Screen2 from 'src/screens/screen2/screen2.js';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="screen1" component={Screen1} />
                <Stack.Screen name="screen2" component={Screen2} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

