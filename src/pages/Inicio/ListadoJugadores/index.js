import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Jugador } from './Jugador';
import { db } from '../../../config';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        imgUrl: 'https://ia802906.us.archive.org/33/items/ChannelLogos/4music.png',
        title: 'First Item',
        position: 'Wqwe',
        score: '456',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        imgUrl: 'https://ia802906.us.archive.org/33/items/ChannelLogos/4music.png',
        title: 'Second Item',
        position: 'Drwe',
        score: '789',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        imgUrl: 'https://ia802906.us.archive.org/33/items/ChannelLogos/4music.png',
        title: 'Third Item',
        position: 'Cfewr',
        score: '0',
    },
];

let playerList = [];

async function getPlayers() {
    getDocs(collection(db, 'Jugadores')).then((playersSnapshot) => {
        playerList = playersSnapshot.docs.map(doc => doc.data());
    });
    console.log(playerList);
}

export function ListadoJugadores({
    navigation,
}) {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={ getPlayers() }
                renderItem={({ item }) => (
                    <Jugador
                        navigation={navigation}
                        imgUrl={item.imgUrl}
                        title={item.title}
                        position={item.position}
                        score={item.score}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
