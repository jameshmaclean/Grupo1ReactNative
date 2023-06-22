import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Carrinho from './src/screens/Carrinho';
import Profile from './src/screens/Perfil';

export default function App() {
  return (
    // <View style={styles.container}>
    <View>
      {/* <Carrinho/> */}
      <Profile/>
      <StatusBar style="auto" />
    </View>
  );
}


