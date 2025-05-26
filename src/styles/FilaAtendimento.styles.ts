import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f9fc', // tom suave, mais clean que cinza forte
  },
  pacienteContainer: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
    borderRadius: 12, // cantos mais arredondados
    // sombra mais suave e realçada para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // sombra para Android
    elevation: 3,
  },
  pacienteSelecionado: {
    borderWidth: 2,
    borderColor: '#4a90e2', // azul suave para seleção
    backgroundColor: '#e6f0ff', // fundo leve para diferenciar o selecionado
    // sombra mais forte no selecionado
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },
  nome: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333', // texto mais escuro para boa leitura
  },
  descricao: {
    marginTop: 6,
    fontSize: 15,
    color: '#555',
    lineHeight: 20,
  },
  gravidade: {
    marginTop: 8,
    fontWeight: '700',
    fontSize: 16,
  },
  semPacientes: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
    color: '#999',
    fontStyle: 'italic',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
