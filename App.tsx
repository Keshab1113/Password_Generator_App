import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import GeneratePassword from './components/GeneratePassword'


const App = () => {
  const [randomBackground, setRandomBackground] = useState("#ffffff");
  const generateColor = () => {
    const hexRange = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++){
      color+=hexRange[Math.floor(Math.random()*16)]
    }
    setRandomBackground(color);
  }
  return (
    <View style={[styles.container, {backgroundColor:randomBackground}]}>
      <Header/>
      <GeneratePassword />
      <TouchableOpacity onPress={ generateColor} style={styles.backBg}>
        <Text style={styles.backBgText}>
          Change Background Color
        </Text>
      </TouchableOpacity>
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
  backBg: {
    backgroundColor: 'white',
    height: 30,
    padding:5,
    marginLeft: 'auto',
    marginRight: 15,
    marginBottom: 15,
    borderRadius: 4,
    paddingHorizontal:15,
  },
  backBgText: {
    fontWeight: 'bold',
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  }
});
