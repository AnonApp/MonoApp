import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export function HomeScreen({navigation}) {
    return (
        <ScrollView>
            <TouchableOpacity style={styles.buttonLayout} onPress={() => navigation.navigate('Feed')}>
                <Text style={styles.buttonIcon}>📍</Text>
                <Text style={styles.buttonName}>Near Jakarta</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    buttonLayout: {
        flex: 1,
        flexDirection: "row",
        minHeight: 80,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        padding: 20,
        alignItems: "center",
        backgroundColor: "white"
    },
    buttonIcon: {
        flex: 0.2,
        fontSize: 35
    },
    buttonName: {
        flex: 0.8,
        fontSize: 20,
        fontWeight: "500"
    }
})