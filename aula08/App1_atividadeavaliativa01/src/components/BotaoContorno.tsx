import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
  texto: string;
  onPress: () => void;
  pequeno?: boolean;
};

export default function BotaoContorno({ texto, onPress, pequeno = false }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.botao, pequeno && styles.pequeno, pressed && styles.pressionado]}
    >
      <Text style={[styles.texto, pequeno && styles.textoPequeno]}>{texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: { alignItems: 'center', justifyContent: 'center', borderWidth: 1.5, borderColor: '#222', paddingHorizontal: 14, paddingVertical: 9, backgroundColor: '#FFF' },
  pequeno: { width: 37, height: 37, paddingHorizontal: 0, paddingVertical: 0 },
  texto: { fontSize: 17, color: '#111', fontWeight: '500' },
  textoPequeno: { fontSize: 15 },
  pressionado: { backgroundColor: '#E8E8E8' },
});
