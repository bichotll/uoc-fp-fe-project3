import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import { AppBar } from '../../ui/AppBar';
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
