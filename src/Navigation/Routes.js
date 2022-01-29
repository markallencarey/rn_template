//React & React Native
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
//Packages
//Context
//Constants
import { auth } from '../Constants/Firebase'
//Navigation
//Components
//Screens

//Icons
//Images
//Styles
import { Buttons, Colors, Containers, Fonts, Images, Index, Misc, Window } from '../Styles/Index'

export const Routes = () => {
	const { user } = useContext(AuthContext)

	return <View style={styles.routesView}>{user ? '' : ''}</View>
}

const styles = StyleSheet.create({
	routesView: {
		...Containers.routesView,
	},
})
