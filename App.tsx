import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import GeneratePassword from './components/GeneratePassword'


const App = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <GeneratePassword/>
      <Footer/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F5F5F5',
    justifyContent: 'space-between',
  },
});