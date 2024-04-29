import { View, Text, StyleSheet, ScrollView, Image, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

const Projects = () => {
const merchlink =(openWeblink:string)=>{
Linking.openURL(openWeblink);
}
const carImports =(openWeblink:string)=>{
	Linking.openURL(openWeblink);
	}
	const shopifygym =(openWeblink:string)=>{
		Linking.openURL(openWeblink);
		}

	return (
		<View>
			<Text style={styles.headingText}>Projects</Text>
			<ScrollView horizontal={true}>
				<View style={[styles.card, styles.cardEleveted]} >
					<Image
						source={{ uri: 'https://cdn.shopify.com/app-store/listing_images/3efa91e06aedc89acf8e0d38af21ee05/promotional_image/CMWLucir3IEDEAE=.jpeg?height=720&quality=90&width=1280' }}
						style={styles.imageStyle} />
					<Text style={styles.descriptionheading}> Merchlink</Text>
					<Text style={styles.descStyle}>MerchLink is a dynamic web application designed
						to empower creators, influencers, and brands to
						effortlessly sell their merchandise online. With MerchLink,
						users can set up personalized storefronts,
						showcasing their unique brand identity and products. </Text>
						<TouchableOpacity onPress={()=>merchlink("https://www.merchlink.io/")}>
						<Text style={{color:'blue', fontSize:18, fontWeight:'600',opacity:.7}}> Visit </Text>
						</TouchableOpacity>
				</View>
				<View style={[styles.card, styles.cardEleveted]} >
					<Image
						source={{ uri: 'https://www.codica.com/static/d22be3d856351f80d6ffb648a7e987c7/ccec0/OG_banner_PMK_eec05140f4.jpg' }}
						style={styles.imageStyle} />
					<Text style={styles.descriptionheading}> Car Imports</Text>
					<Text style={styles.descStyle}>
						The Car Imports web app is a comprehensive solution tailored
						for individuals or businesses involved in importing vehicles from
						overseas markets. This platform simplifies the complex process of
						importing cars by providing essential tools in one place.</Text>
					<TouchableOpacity onPress={()=>carImports("https://www.afternic.com/forsale/carimports.com?utm_source=TDFS_DASLNC&utm_medium=parkedpages&utm_campaign=x_corp_tdfs-daslnc_base&traffic_type=TDFS_DASLNC&traffic_id=daslnc&")}>
						<Text style={{color:'blue', fontSize:18, fontWeight:'600',opacity:.7}}> Visit </Text>
						</TouchableOpacity>
				</View>

				<View style={[styles.card, styles.cardEleveted]} >
					<Image
						source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfDMSsDMhlDftSsLo9mhjN9O4TWOyUVZxiZ16VnEU7jg&s' }}
						style={[styles.imageStyle,]} />
					<Text style={styles.descriptionheading}>Life Fitness</Text>
					<Text style={styles.descStyle}>
						Shopify store dedicated to gym exercise offers a comprehensive
						selection of fitness equipment, apparel, and accessories tailored to
						meet the needs of fitness enthusiasts at all levels. From high-quality
						weights and machines to stylish activewear and supportive gear,
					</Text>
					<TouchableOpacity onPress={()=>shopifygym("https://www.lifefitness.com/en-us")}>
					<Text style={{color:'blue', fontSize:18, fontWeight:'600',opacity:.7}}> Visit </Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	)
}

export default Projects

const styles = StyleSheet.create({
	headingText: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'black',
		padding: 10
	},
	imageStyle: {
		height: 250,
		width: 380
	},
	card: {
		borderRadius: 10,
		padding: 10,
		margin: 3
	},
	cardEleveted: {
		borderRadius: 10,
		elevation: 5,
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowColor: "black",
		shadowRadius: 15,
		backgroundColor: 'teal'
	},
	descStyle: {
		width: 380,
		fontSize: 20,
		fontWeight: '500',
		padding: 8,
		marginHorizontal: 6
	},
	descriptionheading: {
		fontSize: 22,
		color: 'black',
		opacity: .7,
		fontWeight: '900',
		padding: 3
	}
})