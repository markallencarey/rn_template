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
import { Home } from '../Screens/Home/Home'
//Icons
//Images
//Data
//Styles
import { Buttons, Colors, Containers, Fonts, Icons, Images, Index, Misc, Window } from '../Styles/Index'

const Stack = createStackNavigator()

export const MainStack = ({ navigation }) => {
	return (
		<Stack.Navigator initialRouteName='Home'>
			<Stack.Screen name='Home' component={Home} />
		</Stack.Navigator>
	)
}
