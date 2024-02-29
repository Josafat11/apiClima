// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Clima from './Componentes/Clima';  // Importa el componente Clima

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado />
      <Cuerpo />
      <Pie />
      <StatusBar style="auto" />
    </View>
  );
}

export const Encabezado = () => {
  return (
    <View style={styles.encabezado}>
      <Text style={styles.texto}>X</Text>
      <Text style={styles.texto}>Nombre</Text>
      <Text style={styles.texto}>X</Text>
    </View>
  );
};

export const Cuerpo = () => {
  return (
    <View style={styles.contenido}>
      <Clima />
    </View>
  );
};


export const Pie = () => {
  return (
    <View style={styles.pie}>
      <Text style={styles.texto}>X</Text>
      <Text style={styles.texto}>X</Text>
      <Text style={styles.texto}>X</Text>
      <Text style={styles.texto}>X</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#753c15',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  encabezado: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#c09a7e',
  },
  pie: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#c09a7e',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  contenido: {
    flex: 8,
    alignItems: 'stretch',
    padding: 20
  },
  texto: {
    color: "#fff",
    fontSize: 30
  }
});
