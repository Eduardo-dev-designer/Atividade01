import { View } from 'react-native';
import Aluno from '../components/Aluno';
import Multiplicacao from '../components/Multiplicacao';
import Pessoa from '../components/Pessoa';

export default function Index() {
  return (
    <View>
      <Pessoa />

      <Aluno />

      <Multiplicacao />
    </View>
  );
}