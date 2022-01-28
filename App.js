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
import { Home } from './src/Screens/Home/Home'
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
				<SafeAreaView>
					<Home />
				</SafeAreaView>
			</View>
		</DummyProvider>
	)
}

export default App

const styles = StyleSheet.create({
	appView: {
		...Containers.appView,
		justifyContent: 'flex-start',
	},
})
