import * as Colors from './Colors'
import * as Misc from './Misc'
import * as Containers from './Containers'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	white: {
		padding: Misc.padding,
		backgroundColor: Colors.white,
		borderRadius: Misc.borderRadius,
		...Containers.centered,
		...Misc.border,
	},
	transparent: {
		padding: Misc.padding,
		borderRadius: Misc.borderRadius,
		...Containers.centered,
		...Misc.border,
	},
})

export const white = styles.white
export const transparent = styles.transparent
