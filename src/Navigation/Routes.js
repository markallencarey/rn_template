//React & React Native
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
//Packages
//Context
import { AuthContext } from '../Context/AuthProvider'
//Constants
//Navigation
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
//Components
//Screens
import { AuthStack } from './AuthStack'
import { MainStack } from './MainStack'
//Icons
//Images
//Data
//Styles
import { Buttons, Colors, Containers, Fonts, Icons, Images, Index, Misc, Window } from '../Styles/Index'

const MyTheme = {
	dark: false,
	colors: {
		primary: Colors.primary,
		background: Colors.background,
		card: Colors.surface,
		text: Colors.black,
		border: Misc.border.borderColor,
		notification: Colors.error,
	},
}

export const Routes = () => {
	const { user, setUser } = useContext(AuthContext)

	useEffect(() => {
		//use this if you need to develop screens before having authentication set up
		//uncomment setUser(true) to developer MainStack
		//uncomment setUser(false) to develop AuthStack
		//
		// setUser(true)
		// setUser(false)
	}, [])

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<NavigationContainer theme={MyTheme}>{user ? <MainStack /> : <AuthStack />}</NavigationContainer>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	safeAreaView: {
		...Containers.safeAreaView,
	},
})
