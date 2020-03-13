import React from 'react';
import {View, StyleSheet, Dimensions, Text, KeyboardAvoidingView, Button} from 'react-native';
import { TouchableOpacity, ScrollView, TextInput } from 'react-native-gesture-handler';

var width = Dimensions.get('window').width;

export function ThreadScreen() {
    return (
        <ScrollView>
            {/* CONTENT */}
            <View style={styles.activity}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.likeButton}>
                        <Text style={styles.likeButtonText}>0</Text>
                        <Text style={styles.likeButtonText}>👏</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.articleContainer}>
                    <Text style={styles.article}>jangan kode2 ke cowok lo buat nganterin makanan ke rumah lo malem2. kalo dia dibegal kan berabe</Text>
                    <Text style={styles.identity}>3m ago, Kuningan</Text>
                </View>
            </View>

            {/* <KeyboardAvoidingView>
                <TextInput style={styles.textInputStyle} placeholder="Say something nice.."/>
            </KeyboardAvoidingView> */}

            <View style={styles.replyContainer}>
                <View style={styles.buttonContainer}>
                    <View style={styles.likeButton}>
                        <Text style={styles.likeButtonText}>🤪</Text>
                    </View>
                </View>
                <View style={styles.articleContainer}>
                    <Text style={styles.reply}>Kenapa sih cowok pada sirik aja</Text>
                    <Text style={styles.identity}>Now</Text>
                </View>
            </View>
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
    activity: {
        backgroundColor: "white",
        minHeight: 60,
        paddingHorizontal: 20,
        paddingVertical: 25,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        flex: 1,
        flexDirection: 'row',
        width: width,
    },
    replyContainer: {
        backgroundColor: "white",
        minHeight: 60,
        paddingHorizontal: 20,
        paddingVertical: 25,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        flex: 1,
        flexDirection: 'row',
        width: width,
    },
    reply: {
        fontSize: 15,
        fontWeight: "400",
        lineHeight: 23
    },
    article: {
        fontSize: 17,
        fontWeight: "400",
        lineHeight: 23
    },
    articleContainer:{
        width: "90%",
        paddingHorizontal: 10
    },
    identity: {
        paddingTop: 10,
        color: "grey"
    },
    likeButton: {
        alignItems: "center",
        backgroundColor: "rgb(240, 240, 240)",
        borderRadius: 5,
        paddingVertical: 5,
        width: "90%",
    },
    buttonContainer: {
        width: "10%",
    },
    likeButtonText: {
        fontSize: 12,
        lineHeight: 20
    },
    image: {
        // width: '100%',
        height: '100%'
    },
  });
  