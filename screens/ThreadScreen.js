import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

var width = Dimensions.get('window').width;

export function ThreadScreen({route}) {
    const {jsonData} = route.params;
    return (
        <ScrollView>
            {/* CONTENT */}
            <View style={styles.itemContainer}>
                <View style={styles.articleContainer}>
                    <Text style={styles.article}>{jsonData.article}</Text>
                </View>
                <View style={styles.footContainer}>
                    <View style={styles.identityContainer}>
                        <Text style={styles.identity}>{jsonData.identity}</Text>
                    </View>
                    <View style={styles.likeContainer}>
                        <Text style={styles.likes}>{jsonData.likes} ♥</Text>
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
        fontFamily: "Nunito",
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
        color: "grey",
        fontFamily: "Nunito",
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
  