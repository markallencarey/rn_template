//React & React Native
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
//Packages
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
	return (
		<DummyProvider>
			<View style={styles.appView}>
				<Text>RN Template</Text>
			</View>
		</DummyProvider>
	)
}

export default App

const styles = StyleSheet.create({
	appView: {
		...Containers.appView,
	},
})
