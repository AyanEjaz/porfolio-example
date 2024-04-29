import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const WebCard = () => {
	return (
		<View>
			<Text style={styles.headingText}>Web Development</Text>
			<ScrollView horizontal={true} style={styles.container}>
				<View style={[styles.card, styles.container]}>
					<Text style={styles.cardText}>React js</Text>
				</View>
				<View style={[styles.card, styles.container]}>
					<Text style={styles.cardText}>Next js</Text>
				</View>
				<View style={[styles.card, styles.container]}>
					<Text style={styles.cardText}>Angular</Text>
				</View>
				<View style={[styles.card, styles.container]}>
					<Text style={styles.cardText}>Node js</Text>
				</View>
				<View style={[styles.card, styles.container]}>
					<Text style={styles.cardText}>Vue js</Text>
				</View>
				<View style={[styles.card, styles.container]}>
					<Text style={styles.cardText}>Angular</Text>
				</View>
			</ScrollView>
		</View>
	)
}
export default WebCard

const styles = StyleSheet.create({
	headingText: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'black',
		padding: 10
	},
	card: {
		height: 100,
		width: 100,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 5,
		borderRadius: 5,
		elevation: 5,
		backgroundColor: 'teal',
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowColor: 'black',
		shadowRadius: 10,
	},
	cardText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white'
	},
	container: {
		flex: 1,
		padding: 8,
	},
})