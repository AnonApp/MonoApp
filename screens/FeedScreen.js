import React, { Component } from 'react';
import {Alert, TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';

export function FeedScreen() {
    return (
        <View style={styles.body}>
            <Text style={styles.lead}>Welcome to the feed.</Text>
        </View>
    );
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
  