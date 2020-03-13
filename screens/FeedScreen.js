import React from 'react';
import {View, TextInput, StyleSheet, Dimensions, Text, Image} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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

export function FeedScreen({navigation}) {
    return (
        <ScrollView>
            {/* TEXT INPUT */}
            <TextInput
                style={styles.textInputStyle}
                placeholder="Share with Jakarta.."
            />
            {/* CONTENT */}
            <TouchableOpacity style={styles.activity} onPress={() => navigation.navigate('Thread')}>
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
            </TouchableOpacity>

            <TouchableOpacity style={styles.activity} onPress={() => navigation.navigate('Thread')}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.likeButton}>
                        <Text style={styles.likeButtonText}>0</Text>
                        <Text style={styles.likeButtonText}>👏</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.articleContainer}>
                    <Text style={styles.article}>kesel ga si kalo lo udah bikin temen lo. giliran dia yang salah kita biasa aja. giliran kita yang salah marahnya udah ga ketolongan. bangsat.</Text>
                    <Text style={styles.identity}>5m ago, Tebet</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.activity} onPress={() => navigation.navigate('Thread')}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.likeButton}>
                        <Text style={styles.likeButtonText}>0</Text>
                        <Text style={styles.likeButtonText}>👏</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.articleContainer}>
                    <Text style={styles.article}>temen gue marah tanpa sebab. pas gue tanya kenapa dia bilang ga kenapa napa. lama lama dia kasih tau. katanya dia gasuka main rahasiaan. semua orang punya rahasia kalii. ga semua orang bisa dipercaya</Text>
                    <Text style={styles.identity}>5m ago, Senen</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.activity} onPress={() => navigation.navigate('Thread')}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.likeButton}>
                        <Text style={styles.likeButtonText}>0</Text>
                        <Text style={styles.likeButtonText}>👏</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.articleContainer}>
                    <Text style={styles.article}>Lagi ngeliat liat hape temen, ga sengaja kebuka chat, dan ternyata dia chatting sama gebetan kita.</Text>
                    <Text style={styles.identity}>6m ago, Rawamangun</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.activity} onPress={() => navigation.navigate('Thread')}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.likeButton}>
                        <Text style={styles.likeButtonText}>0</Text>
                        <Text style={styles.likeButtonText}>👏</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.articleContainer}>
                    <Text style={styles.article}>Bagi-bagi kode promo cgv: MARCH2CGV</Text>
                    <Text style={styles.identity}>9m ago, Haji Nawi</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.activity} onPress={() => navigation.navigate('Thread')}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.likeButton}>
                        <Text style={styles.likeButtonText}>0</Text>
                        <Text style={styles.likeButtonText}>👏</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.articleContainer}>
                    <Text style={styles.article}>Banyak anak2 diluar sana kecanduan rokok,kecanduan narkoba,kecanduan alkohol,hamil. Tapi disini ada gue,gue cuma kecanduan tidur. Harusnya mama gue bangga..</Text>
                    <Text style={styles.identity}>9m ago, Haji Nawi</Text>
                </View>
            </TouchableOpacity>

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
    article: {
        fontSize: 15,
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
    }
  });
  