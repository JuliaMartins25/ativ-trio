import React from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function App() {
    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>

                <Text style={styles.titulo}> Acesse a sua conta! </Text>

                <View style={styles.containerImagem}>
                    <Image
                        source={require('../assets/images/garraLogin.png')}
                        style={styles.imagem} />
                </View>

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
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
        backgroundColor: '#8C1CD6',
        borderRadius: 3,
    },
    containerImagem: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        justifySelf: 'flex-start',
    },
    imagem: {
        height: '80%',
        width: '80%',
        borderRadius: 200,
        marginBottom: 20,
        borderWidth: 3,
        borderColor: '#8C1CD6',
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
        fontWeight: 'bold',
        cursor: 'pointer',
    },

});