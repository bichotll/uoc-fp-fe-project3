import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Jugador } from './Jugador';
import { db } from '../../../config';
import { collection, getDocs } from 'firebase/firestore/lite';

export function ListadoJugadores({
    navigation
}) {
    
    async function getJugadores(db){
        await getDocs(collection(db, 'Jugadores')).then((playersSnapshot) => {
            return playersSnapshot.docs.map(doc => doc.data());
        });
    }
    const playerList = getJugadores(db);
    console.log(db);
    console.log(playerList);
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={ playerList }
                renderItem={({ item }) => (
                    <Jugador
                        navigation={navigation}
                        imgUrl={item.img}
                        title={item.nombre}
                        position={item.posicion}
                        score={item.puntos}
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
