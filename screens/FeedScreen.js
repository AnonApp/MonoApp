import React, { Component } from 'react';
import {SafeAreaView, TextInput, StyleSheet, Dimensions, Platform, StatusBar} from 'react-native';

// const DATA = [
//     {
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//       title: 'First Item',
//     },
//     {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       title: 'Second Item',
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Third Item',
//     },
// ];

// function Item({ title }) {
//     return (
//     <TouchableOpacity>
//         <Text style={styles.title}>{title}</Text>
//     </TouchableOpacity>
//     );
//   }

var width = Dimensions.get('window').width;

export function FeedScreen() {
    return (
        <SafeAreaView>
            <TextInput
                style={styles.textInputStyle}
                placeholder="Share with Jakarta.."
            />
        </SafeAreaView>
    );
  }
  
  
  const styles = StyleSheet.create({
    textInputStyle: {
        backgroundColor: "white",
        height: 60,
        width: width,
        fontSize: 15,
        fontWeight: '700',
        paddingHorizontal: 20,
    }
  });
  