import * as Colors from './Colors'
import * as Misc from './Misc'
import * as Window from './Window'
import { StyleSheet } from 'react-native'

export const centered = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}

const styles = StyleSheet.create({
	appView: {
		width: Window.width,
		height: Window.height,
		backgroundColor: Colors.background,
		...centered,
	},
	safeAreaView: {
		width: '100%',
		height: '100%',
	},
	content: {
		width: '100%',
		height: '100%',
		padding: Misc.padding,
		flex: 1,
		backgroundColor: Colors.background,
		...centered,
	},
})

export const appView = styles.appView
export const safeAreaView = styles.safeAreaView
export const content = styles.content
