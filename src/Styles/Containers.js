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
		paddingHorizontal: Misc.padding * 2,
		...centered,
	},
	safeAreaView: {
		height: '100%',
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	content: {
		height: '100%',
		width: '100%',
		flex: 1,
		...centered,
	},
})

export const appView = styles.appView
export const safeAreaView = styles.safeAreaView
export const content = styles.content
