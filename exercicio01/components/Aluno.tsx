import { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';

export default function Aluno() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [turma, setTurma] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');

  function mostrarAluno() {
    const media =
      (Number(nota1) + Number(nota2)) / 2;

    Alert.alert(
      'Dados do aluno',
      `Nome: ${nome}
Idade: ${idade}
Turma: ${turma}
Nota 1: ${nota1}
Nota 2: ${nota2}
Média: ${media}`
    );
  }

  return (
    <View>
      <Text>Nome:</Text>
      <TextInput
        placeholder="Nome do aluno"
        value={nome}
        onChangeText={setNome}
      />

      <Text>Idade:</Text>
      <TextInput
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
      />

      <Text>Turma:</Text>
      <TextInput
        placeholder="Turma"
        value={turma}
        onChangeText={setTurma}
      />

      <Text>Nota 1:</Text>
      <TextInput
        placeholder="Nota 1"
        value={nota1}
        onChangeText={setNota1}
        keyboardType="numeric"
      />

      <Text>Nota 2:</Text>
      <TextInput
        placeholder="Nota 2"
        value={nota2}
        onChangeText={setNota2}
        keyboardType="numeric"
      />

      <Button
        title="Mostrar dados"
        onPress={mostrarAluno}
      />
    </View>
  );
}

