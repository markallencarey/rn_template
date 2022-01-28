//React & React Native
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
//Packages
import SplashScreen from 'react-native-splash-screen'
//Context
import { DummyProvider } from './src/Context/DummyProvider'
//Constants
//Navigation
//Components
//Screens
//Icons
//Images
//Data
//Styles
import { Buttons, Colors, Containers, Fonts, Icons, Images, Index, Misc, Window } from './src/Styles/Index'

const App = () => {
	useEffect(() => {
		SplashScreen.hide()
	})

	return (
		<DummyProvider>
			<View style={styles.appView}>
				<SafeAreaView style={styles.safeAreaView}>
					<Text style={styles.h1}>RN Template</Text>
				</SafeAreaView>
			</View>
		</DummyProvider>
	)
}

export default App

const styles = StyleSheet.create({
	appView: {
		...Containers.appView,
	},
	safeAreaView: {
		...Containers.safeAreaView,
	},
	h1: {
		...Fonts.h1,
	},
})
