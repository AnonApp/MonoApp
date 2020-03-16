import React from 'react';
import {View, StyleSheet, Dimensions, Text, KeyboardAvoidingView, Button} from 'react-native';
import { TouchableOpacity, ScrollView, TextInput } from 'react-native-gesture-handler';

var width = Dimensions.get('window').width;

export function ThreadScreen() {
    return (
        <ScrollView>
            {/* CONTENT */}
            <View style={styles.itemContainer}>
                <View style={styles.articleContainer}>
                    <Text style={styles.article}>jangan kode2 ke cowok lo buat nganterin makanan ke rumah lo malem2. kalo dia dibegal kan berabe</Text>
                </View>
                <View style={styles.footContainer}>
                    <View style={styles.identityContainer}>
                        <Text style={styles.identity}>Tomang, 3m ago</Text>
                    </View>
                    <View style={styles.likeContainer}>
                        <Text style={styles.likes}>3 ❤️</Text>
                    </View>
                </View>
            </View>


            {/* <KeyboardAvoidingView>
                <TextInput style={styles.textInputStyle} placeholder="Say something nice.."/>
            </KeyboardAvoidingView> */}
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    textInputStyle: {
        backgroundColor: "white",
        height: 60,
        width: width,
        fontSize: 15,
        fontWeight: '400',
        paddingHorizontal: 20,
    },
    itemContainer: {
        backgroundColor: "white",
        padding: 20,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        minHeight: 100,
        flex: 1,
        flexDirection: "column",
    },
    article: {
        fontSize: 17,
        // lineHeight: 20
    },
    footContainer: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 30,
    },
    identityContainer: {
        flex: 0.7,
        flexDirection: "row"
    },
    identity: {
        fontSize: 14,
        color: "grey"
    },
    replies: {
        fontSize: 14,
        color: "grey",
        paddingLeft: 10
    },
    likeContainer: {
        flex: 0.3,
    },
    likes: {
        fontSize: 15,
        color: "grey",
        textAlign: "right"
    }
  });
  