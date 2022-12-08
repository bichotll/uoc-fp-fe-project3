import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DetalleJugador } from './src/pages/DetalleJugador';
import { Inicio } from './src/pages/Inicio';
import { VideoJugador } from './src/pages/VideoJugador';

export default function App() {
  return (
    <View style={styles.container}>
      <Inicio />
      <DetalleJugador />
      <VideoJugador />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
