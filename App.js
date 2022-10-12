/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Screen1 from './src/screens/screen1/screen1.js';
import Screen2 from './src/screens/screen2/screen2.js';
import Drawer1 from './src/screens/drawer1/drawer1.js';
import Drawer2 from './src/screens/drawer2/drawer2.js';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const RegularNavigationApp = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="screen1" component={Screen1} />
                <Stack.Screen name="screen2" component={Screen2} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const DrawerNavigationApp = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="drawer1">
                <Drawer.Screen name="drawer1" component={Drawer1} />
                <Drawer.Screen name="drawer2" component={Drawer2} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default RegularNavigationApp;
