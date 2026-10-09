import React from 'react';
import { Alert, BackHandler, Platform, StyleSheet, Text, View } from 'react-native';
import Moldura from './Moldura';
import BotaoContorno from './BotaoContorno';

export default function TelaBemVindo() {
  function comprar() {
    Alert.alert('Comprar', 'Botão COMPRAR pressionado!');
  }

  function sair() {
    if (Platform.OS === 'android') {
      BackHandler.exitApp();
    } else {
      Alert.alert('Sair', 'O botão SAIR foi pressionado.');
    }
  }

  return (
    <Moldura>
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>BEM VINDO</Text>
        <Text style={styles.nome}>FULANO</Text>
        <View style={styles.comprar}><BotaoContorno texto="COMPRAR" onPress={comprar} /></View>
        <View style={styles.sair}><BotaoContorno texto="SAIR" onPress={sair} /></View>
      </View>
    </Moldura>
  );
}

const styles = StyleSheet.create({
  conteudo: { flex: 1, alignItems: 'center', paddingTop: 42 },
  titulo: { fontSize: 27, fontWeight: '600', color: '#111' },
  nome: { fontSize: 17, marginTop: 12, color: '#111' },
  comprar: { marginTop: 55 },
  sair: { position: 'absolute', bottom: 16, alignItems: 'center' },
});
