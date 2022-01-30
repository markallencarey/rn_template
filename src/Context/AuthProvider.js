//React & React Native
import React, { useContext, useEffect, useState, createContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
//Packages
//Context
//Constants
import { auth, firestore, timestamp } from '../Constants/Firebase'
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
	console.log('file: AuthProvider.js -> line 21 -> AuthProvider -> user', user)
	const [userData, setUserData] = useState(null)

	useEffect(() => {
		auth().onAuthStateChanged(account => {
			console.log('auth state changed')
			if (account) {
				setUser(account)
			} else {
				setUser(null)
			}
		})
	}, [user])

	const login = async (email, password) => {
		await auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				console.log('log in successful')
			})
			.catch(err => {
				console.log('file: AuthProvider.js -> line 40 -> login -> err', err)
				if (err.code === 'auth/user-not-found') {
					alert('There is no account associated with that email')
				}

				if (err.code === 'auth/invalid-email') {
					alert('The email address is formatted incorrectly')
				}

				if (err.code === 'auth/wrong-password') {
					alert('Incorrect password')
				}

				if (err.code === 'auth/too-many-requests') {
					alert('We have blocked all requests from this device due to unusual activity. Try again later.')
				}
			})
	}

	const register = async (email, password, name, phone) => {
		await auth()
			.createUserWithEmailAndPassword(email, password)
			.then(user => {
				console.log('User account created & signed in!')
				firestore().collection('Users').doc(user.uid).set({
					name: name,
					email: email,
					phone: phone,
					dateCreated: timestamp,
				})
			})
			.catch(err => {
				console.log('file: AuthProvider.js -> line 58 -> register -> err', err)
				if (err.code === 'auth/email-already-in-use') {
					alert('That email address is already in use')
				}

				if (err.code === 'auth/invalid-email') {
					alert('That email address is invalid')
				}

				if (err.code === 'auth/weak-password') {
					alert('The given password is invalid. Password should be at least 6 characters.')
				}

				// console.error(error)
			})
	}

	const signOut = async () => {
		await auth()
			.signOut()
			.then(() => console.log('User signed out!'))
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				login,
				register,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
