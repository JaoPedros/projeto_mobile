import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const CadastroPaciente = ({ navigation }: any) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [descricao, setDescricao] = useState('');
  const [gravidade, setGravidade] = useState('');

  const [mensagem, setMensagem] = useState('');
  const [corMensagem, setCorMensagem] = useState('green');

  useEffect(() => {
    if (mensagem) {
      const timer = setTimeout(() => setMensagem(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [mensagem]);

  const validarEEnviar = async () => {
    if (!nome.trim() || !idade.trim() || !descricao.trim() || !gravidade.trim()) {
      setCorMensagem('red');
      setMensagem('Preencha todos os campos.');
      return;
    }

    const idadeNum = Number(idade);
    const gravidadeNum = Number(gravidade);

    if (isNaN(idadeNum) || idadeNum <= 0) {
      setCorMensagem('red');
      setMensagem('Informe uma idade válida.');
      return;
    }

    if (isNaN(gravidadeNum) || gravidadeNum < 1 || gravidadeNum > 5) {
      setCorMensagem('red');
      setMensagem('Insira uma gravidade válida (1 a 5).');
      return;
    }

    const paciente = {
      nome: nome.trim(),
      idade: idadeNum.toString(),
      descricao: descricao.trim(),
      gravidade: gravidadeNum,
    };

    try {
      await firestore().collection('pacientes').add(paciente);
      setCorMensagem('green');
      setMensagem('Paciente adicionado com sucesso.');

      setNome('');
      setIdade('');
      setDescricao('');
      setGravidade('');
    } catch (error) {
      setCorMensagem('red');
      setMensagem('Erro ao salvar no banco.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text style={styles.label}>Idade:</Text>
      <TextInput
        style={styles.input}
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Descrição da enfermidade:</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        multiline
        value={descricao}
        onChangeText={setDescricao}
      />

      <Text style={styles.label}>Gravidade (1 a 5):</Text>
      <TextInput
        style={styles.input}
        value={gravidade}
        onChangeText={setGravidade}
        keyboardType="numeric"
        maxLength={1}
      />

      <TouchableOpacity style={styles.button} onPress={validarEEnviar}>
        <Text style={styles.buttonText}>Adicionar à fila</Text>
      </TouchableOpacity>

      {mensagem ? (
        <Text style={[styles.mensagem, { color: corMensagem }]}>{mensagem}</Text>
      ) : null}
    </View>
  );
};

export default CadastroPaciente;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#3399ff',
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  mensagem: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
