import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const FistixCard = () => {
	return (
		<View>
			<Text style={styles.headingText}>Fistix</Text>
			<View style={styles.container}>
				<View style={[styles.card, styles.cardOne]}>
					<Text style={styles.FistixcardText}>Web </Text>
				</View>
				<View style={[styles.card, styles.cardTwo]}>
					<Text style={styles.FistixcardText}>Mob </Text>
				</View>
				<View style={[styles.card, styles.cardThree]}>
					<Text style={styles.FistixcardText}>Shopify </Text>
				</View>
			</View>
		</View>
	)
}

export default FistixCard

const styles = StyleSheet.create({
	headingText: {
		fontSize: 25,
		fontWeight: 'bold',
		color:'black',
		padding:10
	},
	card:{
		flex:1,
		justifyContent:'center',
		height:100,
		width:100,
		borderRadius:8,
		margin:8
		
	},
	cardOne:{
		backgroundColor:'teal',
		alignItems:'center'
	},
	cardTwo:{
		backgroundColor:'teal',
		alignItems:'center'
	},
	cardThree:{
		backgroundColor:'teal',
		alignItems:'center'
	},
	container:{
	flex:1,
	flexDirection:'row'
	},
	FistixcardText:{
		fontSize:20,
		fontWeight:'bold',
		color:"white",
		// opacity:.7,
		}
})