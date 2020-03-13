import React, { Component } from 'react';
import {Alert, TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Image source={require('./assets/logo.png')} style={styles.brand}></Image>
        <Text style={styles.lead}>It's a curious world.</Text>
        <TouchableOpacity style={styles.enterButton} onPress={() => Alert.alert("We are launching soon!")}>
          <Text style={styles.enterButtonText}>Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#FFBD00",
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",
  },
  lead: {
    fontSize: 25,
    fontWeight: "500",
    lineHeight: 30,
    color: "white",
    fontFamily: "Helvetica",
    marginBottom: 50,
  },
  brand: {
    height: 150,
    width: 150,
    marginBottom: 50,
  },
  enterButton: {
    backgroundColor:'white',
    borderRadius:10,
    width: 300,
    height: 50,
    justifyContent: "center", 
    alignItems: "center",
  },
  enterButtonText: {
    color:'orange',
    textAlign:'center',
    fontSize: 25,
    fontWeight: "500",
    paddingLeft : 10,
    paddingRight : 10
  }
});
