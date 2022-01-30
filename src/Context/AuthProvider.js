//React & React Native
import React, { useContext, useEffect, useState, createContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
//Packages
//Context
//Constants
import { auth } from '../Constants/Firebase'
//Navigation
//Components
//Screens
//Icons
//Images
//Data
//Styles
import { Buttons, Colors, Containers, Fonts, Icons, Images, Index, Misc, Window } from '../Styles/Index'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [userData, setUserData] = useState(null)

	useEffect(() => {
		auth().onAuthStateChanged(user => {
			console.log('auth state changed')
			if (user) {
				setUser(user)
			}
		})
	}, [])

	const login = async () => {}

	const register = async () => {
		auth()
			.createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
			.then(() => {
				console.log('User account created & signed in!')
			})
			.catch(error => {
				if (error.code === 'auth/email-already-in-use') {
					console.log('That email address is already in use!')
				}

				if (error.code === 'auth/invalid-email') {
					console.log('That email address is invalid!')
				}

				console.error(error)
			})
	}

	const logout = async () => {}

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				login,
				register,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
