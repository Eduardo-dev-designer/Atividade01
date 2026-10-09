import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = { children: ReactNode };

export default function Moldura({ children }: Props) {
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <View style={styles.caixa}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 24, paddingVertical: 16 },
  caixa: { flex: 1, borderWidth: 2, borderColor: '#222222', borderRadius: 9, overflow: 'hidden' },
});
