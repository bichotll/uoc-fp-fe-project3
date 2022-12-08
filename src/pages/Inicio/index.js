import { StyleSheet, Text, View, FlatList } from 'react-native';
import { AppBar } from '../../ui/AppBar';
import { ListadoJugadores } from './ListadoJugadores';
import { Jugador } from './ListadoJugadores/Jugador';
import { Select } from './Select';

export function Inicio({ navigation }) {
    return (
        <View style={styles.container}>
            <AppBar
                title="Listado equipo"
                isBackButtonShown={false}
                isHomeButtonShown={false}
                navigation={navigation}
            />
            <Select />
            <View>
                <Jugador
                    navigation={navigation}
                    imgUrl='https://ia802906.us.archive.org/33/items/ChannelLogos/4music.png'
                    title='Lionel Messi'
                    position='Forward'
                    score='10'
                />
                <ListadoJugadores
                    navigation={navigation}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // height: '200px',
        backgroundColor: '#fff',
    },
});
