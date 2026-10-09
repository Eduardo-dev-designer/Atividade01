import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Moldura from './Moldura';
import BotaoContorno from './BotaoContorno';

const opcoes = [
  { numero: 3, titulo: 'TERCEIRO' },
  { numero: 2, titulo: 'SEGUNDO' },
  { numero: 1, titulo: 'PRIMEIRO' },
];

export default function TelaNumeros() {
  return (
    <Moldura>
      <View style={styles.cima}>
        {opcoes.map((opcao) => (
          <Text key={opcao.numero} style={styles.texto}>{opcao.titulo}</Text>
        ))}
      </View>
      <View style={styles.baixo}>
        {opcoes.map((opcao) => (
          <BotaoContorno
            key={opcao.numero}
            texto={String(opcao.numero)}
            pequeno
            onPress={() => Alert.alert('Opção selecionada', opcao.titulo)}
          />
        ))}
      </View>
    </Moldura>
  );
}

const styles = StyleSheet.create({
  cima: { flex: 1, borderBottomWidth: 1.5, borderColor: '#222', justifyContent: 'space-around', paddingHorizontal: 22 },
  baixo: { flex: 1, alignItems: 'center', justifyContent: 'space-evenly' },
  texto: { fontSize: 21, color: '#111' },
});
