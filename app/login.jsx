import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'

export default function App() {
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container}>
        <StatusBar backgtoundColor="#FFF" translucent={false} />
        <TextInput
          placeholder='Username, Celular ou Email'
          style={styles.input} />

        <TextInput
          placeholder='Sua Senha'
          style={styles.input}
          secureTextEntry={true} />

        <View style={styles.esqueceuContainer}>
          <TouchableOpacity>
            <Text style={styles.esqueceuText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.login}>
          <Text style={styles.loginText}>Acessar</Text>
        </TouchableOpacity>



        <View style={styles.cadastro}>
          <Text> Não possui uma conta?</Text>
          <Text style={styles.cadastreText}>Cadastre-se</Text>
        </View>



      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: '90%',
    height: 42,
    backgroundColor: '#d9d9d9',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'black',
  },

  esqueceuContainer: {
    width: '90%',
    alignItems: 'flex-end',
    marginBottom: 25
  },

  esqueceuText: {
    color: '#8C1CD6',
  },

  login: {
    backgroundColor: '#8C1CD6',
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 0.2,
  },

  loginText: {
    color: '#FFF'
  },

  cadastroLinha: {
    height: 20,
    width: '90%',
  },

  cadastro: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 10,
  },

  cadastreText: {
    color: '#8C1CD6',
    fontWeight: 'bold'
  },

});