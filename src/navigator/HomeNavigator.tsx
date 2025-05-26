import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import TelaPrincipal from '../layouts/TelaPrincipal';
import CadastroPaciente from '../components/CadastroPaciente';
import FilaAtendimento from '../components/FilaAtendimento.tsx';

// Tipo do paciente (opcional para tela FilaAtendimento)
export type Paciente = {
  nome: string;
  idade: string;
  descricao: string;
  gravidade: number;
};

// Tipos das rotas da stack
export type RootStackParamList = {
  TelaPrincipal: undefined;
  CadastroPaciente: undefined;
  FilaAtendimento: { paciente?: Paciente } | undefined;
};

// Criação da stack com tipos
const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TelaPrincipal"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
      <Stack.Screen name="CadastroPaciente" component={CadastroPaciente} />
      <Stack.Screen name="FilaAtendimento" component={FilaAtendimento} />
    </Stack.Navigator>
  );
};

// Tipagem para uso em props das telas
export type PrincipalProps = NativeStackScreenProps<RootStackParamList, 'TelaPrincipal'>;
export type CadastroPacienteProps = NativeStackScreenProps<RootStackParamList, 'CadastroPaciente'>;
export type FilaAtendimentoProps = NativeStackScreenProps<RootStackParamList, 'FilaAtendimento'>;

export default HomeNavigator;
