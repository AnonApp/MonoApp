import React from 'react';
import {View, TextInput, StyleSheet, Dimensions, Text, FlatList, Keyboard, Alert} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const DATA = [
    {
        id: '0',
        article: 'Feel so lonely sometimes in this big world. 😭',
        identity: 'Kuningan, Now',
        replies: 0,
        likes: 10,
    },
    {
        id: '1',
        article: 'jangan kode2 ke cowok lo buat nganterin makanan ke rumah lo malem2. kalo dia dibegal kan berabe',
        identity: 'Kuningan, 3m ago',
        replies: 1,
        likes: 7,
    },
    {
        id: '2',
        article: 'kesel ga si kalo lo udah bikin temen lo. giliran dia yang salah kita biasa aja. giliran kita yang salah marahnya udah ga ketolongan. bangsat.',
        identity: 'Tebet, 5m ago',
        replies: 0,
        likes: 0,
    },
    {
        id: '3',
        article: 'temen gue marah tanpa sebab. pas gue tanya kenapa dia bilang ga kenapa napa. lama lama dia kasih tau. katanya dia gasuka main rahasiaan. semua orang punya rahasia kalii. ga semua orang bisa dipercaya',
        identity: 'Senen, 5m ago',
        replies: 0,
        likes: 0,
    },
    {   
        id: '4',
        article: 'Lagi ngeliat liat hape temen, ga sengaja kebuka chat, dan ternyata dia chatting sama gebetan kita.',
        identity: 'Rawamangun, 6m ago',
        replies: 0,
        likes: 2,
    },
    {
        id: '5',
        article: 'Bagi-bagi kode promo cgv: MARCH2CGV',
        identity: 'Haji Nawi, 6m ago',
        replies: 0,
        likes: 1,
    },
    {
        id: '6',
        article: 'Banyak anak2 diluar sana kecanduan rokok,kecanduan narkoba,kecanduan alkohol,hamil. Tapi disini ada gue,gue cuma kecanduan tidur. Harusnya mama gue bangga..',
        identity: 'Rawamangun, 10m ago',
        replies: 0,
        likes: 8,
    },
];

function Item({ article, identity, replies, likes, navigation }) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.articleContainer}>
                <Text style={styles.article}>{article}</Text>
            </View>
            <View style={styles.footContainer}>
                <View style={styles.identityContainer}>
                    <Text style={styles.identity}>{identity}</Text>
                    <ThreadButton numberOfReplies={replies} navigation={navigation} />
                </View>
                <View style={styles.likeContainer}>
                    <LikeButton numberOfLikes={likes}/>
                </View>
            </View>
        </View>
    );
}

function ThreadButton({numberOfReplies, navigation}) {
    if (numberOfReplies > 0) {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Thread')}>
                <Text style={styles.replies}>👋{numberOfReplies}</Text>
            </TouchableOpacity>
        );
    } else {
        return (null);
    }
}

function LikeButton({numberOfLikes}) {
    if (numberOfLikes > 0) {
        return (
            <TouchableOpacity>
                <Text style={styles.likes}>{numberOfLikes} ♥️</Text>
            </TouchableOpacity>
        )
    } else {
        return (null);
    }
}

export function FeedScreen({navigation}) {
    return (
        <ScrollView>
            {/* TEXT INPUT */}
            <TextInput
                style={styles.textInput}
                placeholder="Share with Jakarta.."
                onFocus={() => navigation.setOptions({ 
                    title: "New Update",
                    headerRight: () => (<TouchableOpacity onPress={Keyboard.dismiss} style={{margin: 10}}><Text style={{color: 'white', fontSize: 18, fontWeight: '700'}}>Post</Text></TouchableOpacity>),
                    headerLeft: () => (<TouchableOpacity onPress={Keyboard.dismiss} style={{margin: 10}}><Text style={{color: 'white', fontSize: 18, fontWeight: '700'}}>X</Text></TouchableOpacity>),
                })}
                onBlur={() => navigation.setOptions({ 
                    title: 'Jakarta',
                    headerRight: null,
                    headerLeft: null
                })}
            />
            {/* CONTENT */}
            <FlatList
                data={DATA}
                renderItem={({ item }) => ( <Item article={item.article} identity={item.identity} replies={item.replies} likes={item.likes} navigation={navigation} /> )}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    );
  }
  
  
  const styles = StyleSheet.create({
    textInput: {
        backgroundColor: "white",
        height: 60,
        width: Dimensions.get('window').width,
        fontSize: 19,
        fontWeight: '500',
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
        fontSize: 19,
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
        fontSize: 12,
        color: "grey"
    },
    replies: {
        fontSize: 12,
        color: "grey",
        paddingLeft: 10
    },
    likeContainer: {
        flex: 0.3,
    },
    likes: {
        fontSize: 12,
        color: "grey",
        textAlign: "right"
    }
  });
  