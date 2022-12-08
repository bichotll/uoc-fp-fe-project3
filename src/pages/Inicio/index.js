import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import { AppBar } from '../../ui/AppBar';
import { Listado } from './Listado';

export function Inicio() {
    return (
        <View style={styles.container}>
            <AppBar
                title="Listado equipo"
                isBackButtonShown={false}
                isHomeButtonShown={false}
            />
            <Listado />
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
