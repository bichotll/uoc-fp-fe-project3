import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import { AppBar } from '../../ui/AppBar';

export function VideoJugador({
    navigation,
}) {
    return (
        <View style={styles.container}>
            <AppBar
                title="Video jugador"
                isBackButtonShown
                isHomeButtonShown
                navigation={navigation}
            />
            <View>
                <Text>...</Text>
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
