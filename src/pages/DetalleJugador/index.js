import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { ROUTES } from '../../router/routes';
import { AppBar } from '../../ui/AppBar';

const DATA = {
    img: 'https://ia802906.us.archive.org/33/items/ChannelLogos/4music.png',
    name: 'First Item',
    location: 'Rome, Italy',
    email: 'trew@ytreg.com',
}

export function DetalleJugador({
    navigation,
}) {
    return (
        <View style={styles.container}>
            <AppBar
                title="Detalle jugador"
                isBackButtonShown
                isHomeButtonShown
                navigation={navigation}
            />

            <Button
                title="Ver multimedia >"
                onPress={() => navigation.navigate(ROUTES.VIDEO_JUGADOR)}
            />

            <View>
                <Image
                    style={styles.img}
                    source={{
                        uri: DATA.img,
                    }}
                />
            </View>

            <View>
                <Text
                    style={styles.textFieldTitle}
                >
                    {'NAME: '}
                </Text>
                <Text>{DATA.name}</Text>
            </View>

            <View>
                <Text
                    style={styles.textFieldTitle}
                >
                    {'LOCATION: '}
                </Text>
                <Text>{DATA.location}</Text>
            </View>

            <View>
                <Text
                    style={styles.textFieldTitle}
                >
                    {'EMAIL: '}
                </Text>
                <Text>{DATA.email}</Text>
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
    img: {
        margin: 10,
        width: '100%',
        height: '200px',
    },
    textFieldTitle: {
        fontWeight: 'bold',
    },
});
