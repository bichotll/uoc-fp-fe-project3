import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import { mainBackgroundColor } from '../../../theme';

export function Select() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Seleccionar...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'white',
        width: '100%',
        height: '100px',
        backgroundColor: mainBackgroundColor,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
});
