import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
    return (
        <View style={styles.container}>

            <Image
                source={require('../assets/images/garraHome.jpeg')}
                style={styles.imagem}/>

            <View style={styles.containerTitulo}>
                <Text style={styles.title}>Seja bem vindo ao site da <br /> Rodriga Garra</Text>
            </View>

            <View style={styles.containerLinks}>

                <Link href="/about" asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </Pressable>
                </Link>
                <Link href="/about" asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Ir para Sobre</Text>
                    </Pressable>
                </Link>

            </View >

            <Link href="/termos" > <p style={styles.textTermos}>Termos de uso</p></Link>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagem: {
        height: '40%',
        width: '80%',
        borderRadius: 200,
        marginBottom: 20,
        borderWidth: 5,
        borderColor: '#8C1CD6',
    },
    containerTitulo: {
        backgroundColor: '#8C1CD6',
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1,
        margin: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    containerLinks: {
        padding: 20,
        gap: 10,
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#8C1CD6',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },

    textTermos: {
        color: '#8C1CD6',
        fontWeight: 'bold',
        marginTop: 20,
    },
});