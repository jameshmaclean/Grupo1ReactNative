import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Carrinho from './src/screens/Carrinho';

export default function App() {
  return (
    <View style={styles.container}>
      <Carrinho/>
      <StatusBar style="auto" />
    </View>
  );
}


