//React & React Native
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, SafeAreaView } from 'react-native'
//Packages
import SplashScreen from 'react-native-splash-screen'
//Context
import { DummyProvider } from './src/Context/DummyProvider'
//Constants
import { firestore } from './src/Constants/Firebase'
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

	const [textPosts, setTextPosts] = useState([])
	const [textInput, setTextInput] = useState('')

	useEffect(() => {
		firestore()
			.collection('Test')
			.onSnapshot(
				querySnapshot => {
					const testPosts = []
					querySnapshot?.forEach(doc => {
						testPosts.push(doc.data())
					})
					setTextPosts(testPosts)
				},
				err => console.log(err)
			)
	}, [])

	return (
		<DummyProvider>
			<SafeAreaView style={styles.appView}>
				<View style={styles.mainView}>
					<Text style={styles.title}>RN Template</Text>
					<Text style={styles.firebaseTest}>Firebase Test:</Text>
					<Text style={styles.testTxt}>
						Below you can test that your Firebase connection is working. Type something into the text input and press Post. If your Firebase and
						Firestore are set up correctly should post to Firestore and then display in a FlatList at the bottom.
					</Text>
					<TextInput onChangeText={input => setTextInput(input)} style={styles.input} placeholder='enter test text here' value={textInput} />
					<TouchableOpacity
						onPress={() => {
							firestore().collection('Test').add({ text: textInput })
							setTextInput('')
						}}
						style={styles.postBtn}
					>
						<Text>Post</Text>
					</TouchableOpacity>
					<FlatList
						data={textPosts}
						renderItem={({ item }) => <Text style={styles.testTxt}>{item.text}</Text>}
						keyExtractor={item => item.id}
						style={styles.flatList}
					/>
				</View>
			</SafeAreaView>
		</DummyProvider>
	)
}

export default App

const styles = StyleSheet.create({
	appView: {
		...Containers.appView,
		justifyContent: 'flex-start',
	},
	mainView: {
		paddingHorizontal: Misc.padding * 2,
		width: '100%',
		height: '100%',
		alignItems: 'center',
	},
	title: {
		...Fonts.h1,
		marginVertical: Misc.margin / 2,
	},
	firebaseTest: {
		...Fonts.h2,
		marginTop: Misc.margin * 2,
		marginBottom: Misc.margin / 2,
	},
	testTxt: {
		...Fonts.body,
		marginVertical: Misc.margin / 2,
	},
	input: {
		...Misc.border,
		borderRadius: Misc.borderRadius,
		width: '100%',
		marginVertical: Misc.margin / 2,
		paddingHorizontal: Misc.margin / 4,
		paddingVertical: Misc.margin / 2,
		...Fonts.body,
	},
	postBtn: {
		...Buttons.transparent,
		marginVertical: Misc.margin / 2,
		padding: Misc.padding / 2,
	},
	flatList: {
		marginVertical: Misc.margin / 2,
		borderColor: Colors.surface,
		borderWidth: 2,
		borderRadius: Misc.borderRadius,
		width: '100%',
		maxHeight: Window.height * 0.4,
		paddingHorizontal: Misc.padding,
	},
})
