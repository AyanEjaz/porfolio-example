import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const MobCard = () => {
    return(
    <View>
    <Text style={styles.headingText}>Mobile Development</Text>
    <ScrollView horizontal={true} style={styles.container}>
    <View style={[styles.card,styles.cardElevated]}>

            <Text style={styles.ElevatedcardText}>Rect Native</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text style={styles.ElevatedcardText}>Kotlin</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text style={styles.ElevatedcardText}>Java</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text style={styles.ElevatedcardText}>Flutter</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text style={styles.ElevatedcardText}>Ruby</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text style={styles.ElevatedcardText}>Node js</Text>
        </View>
    </ScrollView>
</View>
    )
}

export default MobCard

const styles = StyleSheet.create({
headingText: {
fontSize: 25,
fontWeight: 'bold',
color: 'black',
padding: 10
},
card: {
flex: 1,
justifyContent: 'center',
height: 100,
width: 100,
alignItems:'center',
margin:5

},
cardElevated: {
backgroundColor: 'teal',
borderRadius:5,
elevation:5,
shadowOffset:{
    width:2,
    height:2,
},
shadowColor:"black",
opacity:.9,
shadowRadius:10,

},
container: {
flex: 1,
padding:8,

},
ElevatedcardText:{
fontSize:20,
fontWeight:'bold',
color:"white"
}
})