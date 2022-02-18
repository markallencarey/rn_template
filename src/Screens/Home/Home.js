//React & React Native
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native'
//Packages
//Context
//Constants
//Navigation
//Components
//Screens
//Icons
//Images
//Data
//Styles
import { Buttons, Colors, Containers, Fonts, Icons, Images, Index, Misc, Window } from '../../Styles/Index'

export const Home = ({ navigation }) => {
	const goToScreen1 = () => {
		navigation.navigate('Screen1')
	}

	const goToScreen2 = () => {
		navigation.navigate('Screen2')
	}

	return (
		<View style={styles.content}>
			<ScrollView contentContainerStyle={styles.scrollView}>
				<Text style={styles.h2}>Home.js</Text>
				<View style={styles.navRow}>
					<TouchableOpacity style={styles.navBtn} onPress={goToScreen1}>
						<Text style={styles.body}>Go to</Text>
						<Text style={styles.body}>Screen1</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.navBtn} onPress={goToScreen2}>
						<Text style={styles.body}>Go to</Text>
						<Text style={styles.body}>Screen2</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	content: {
		...Containers.content,
		paddingHorizontal: 0,
	},
	scrollView: {
		paddingHorizontal: Misc.padding * 2,
		alignItems: 'center',
	},
	h2: {
		...Fonts.h2,
	},
	body: {
		...Fonts.body,
	},
	navRow: {
		flexDirection: 'row',
		marginTop: Misc.padding * 2,
	},
	navBtn: {
		...Buttons.transparent,
		marginHorizontal: Misc.margin,
		justifyContent: 'flex-start',
	},
})
