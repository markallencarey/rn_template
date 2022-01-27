//React & React Native
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
//Packages
//Context
//Constants
//Navigation
import { createStackNavigator } from '@react-navigation/stack'
//Components
//Screens
import { LogIn } from '../Screens/Auth/LogIn'
import { SignUp } from '../Screens/Auth/SignUp'
//Icons
//Images
//Data
//Styles
import { Buttons, Colors, Containers, Fonts, Icons, Images, Index, Misc, Window } from '../Styles/Index'

const Stack = createStackNavigator()

export const AuthStack = ({ navigation }) => {
	return (
		<Stack.Navigator initialRouteName='LogIn'>
			<Stack.Screen name='LogIn' component={LogIn} />
			<Stack.Screen name='SignUp' component={SignUp} />
		</Stack.Navigator>
	)
}
