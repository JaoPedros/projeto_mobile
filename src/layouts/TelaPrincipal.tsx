import React from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';
import { PrincipalProps } from '../navigator/HomeNavigator';

const TelaPrincipal = ({ navigation }: PrincipalProps) => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/hospital.png')} style={styles.logo} />
      <Button
        title="Cadastrar Paciente"
        onPress={() => navigation.navigate('CadastroPaciente')}
      />
      <Button
        title="Ver Fila de Atendimento"
        onPress={() => navigation.navigate('FilaAtendimento')}
      />
    </View>
  );
};

export default TelaPrincipal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
  },
});
