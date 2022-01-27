import * as Misc from './Misc'
import * as Colors from './Colors'
import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const bold = ''
export const regular = ''
export const thin = ''

const standardScreenHeight = 680

const styles = StyleSheet.create({
	h1: {
		fontSize: RFValue('', standardScreenHeight),
		// fontFamily: '',
		color: Colors.black,
	},
	h2: {
		fontSize: RFValue('', standardScreenHeight),
		// fontFamily: '',
		color: Colors.black,
	},
	body: {
		fontSize: RFValue('', standardScreenHeight),
		fontFamily: '',
		color: Colors.black,
	},
})

export const h1 = styles.h1
export const h2 = styles.h2
export const body = styles.body
