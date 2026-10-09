import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Moldura from './Moldura';
import BotaoContorno from './BotaoContorno';

export default function TelaHelloWorld() {
  return (
    <Moldura>
      <View style={styles.cima}>
        <View style={styles.menu}>
          {[1, 2, 3].map((numero) => (
            <BotaoContorno
              key={numero}
              texto={String(numero)}
              pequeno
              onPress={() => Alert.alert('Hello World', `Botão ${numero} pressionado.`)}
            />
          ))}
        </View>
      </View>
      <View style={styles.baixo}>
        <Text style={styles.texto}>HELLO{'\n'}WORLD</Text>
      </View>
    </Moldura>
  );
}

const styles = StyleSheet.create({
  cima: { flex: 1, borderBottomWidth: 1.5, borderColor: '#222' },
  menu: { flexDirection: 'row', justifyContent: 'flex-end', gap: 7, margin: 12 },
  baixo: { flex: 1, justifyContent: 'center', paddingLeft: 25 },
  texto: { fontSize: 28, lineHeight: 36, color: '#111' },
});
