import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function User() {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error("Error fetching user data:", error));
  }, []);

  return (
    <ScrollView >
      {userData && (
        <View key={userData.userId}>
          <Text> User id: {userData.id}</Text>
          <Text> User data: {userData.title}</Text>
          <Text> User body:  {userData.body}</Text>
        </View>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({})
