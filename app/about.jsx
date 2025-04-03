import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';

export default function TermosDeUso() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre mim</Text>
      <Image source={require('../assets/images/rodrigaSobre.jpeg')} 
      style={{
        width: "80%", 
        height: 700,
        borderRadius: 10,
        alignSelf: 'center', 
        marginBottom: 20 
      }} 
       />
     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}></Text>
        <Text style={styles.sectionText}>
        Olá! Eu sou a Rodriga Garra, a adorável hamster da casa! Sou uma pequena bolinha de pelos macios e olhos brilhantes, e trago muita alegria e diversão para a vida da minha humana.
        </Text>
      </View>
     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personalidade</Text>
        <Text style={styles.sectionText}>
        Sou extremamente curiosa e adoro explorar meu ambiente. Passo horas passeando pelo tubo da minha gaiola. Às vezes, posso ser um pouco tímida, mas assim que me sinto confortável, é impossível não me ver em ação com minhas travessuras!
        </Text>
      </View>
     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Momentos Especiais</Text>
        <Text style={styles.sectionText}>
        Um dos meus momentos favoritos é quando me deixam sair para brincar fora da gaiola. Eu adoro correr livremente, explorando o chão e me aventurando por pequenos obstáculos. É sempre tão divertido interagir com meus brinquedos e, às vezes, até com outros pets da casa!
        </Text>
      </View>
     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conclusão</Text>
        <Text style={styles.sectionText}>
        Ser a Rodriga Garra é uma experiência incrível e cheia de amor. Eu não sou apenas um animal de estimação, mas uma verdadeira amiga que traz sorrisos e momentos de alegria. Estou sempre pronta para novas aventuras e espero que minha humana continue aprendendo a cuidar de mim, garantindo que eu tenha uma vida feliz e saudável!
        </Text>
      </View>
     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conclusão</Text>
        <Text style={styles.sectionText}>
          Reservamos o direito de modificar estes termos a qualquer momento. As alterações serão comunicadas aos usuários.
        </Text>
      </View>
     
      <Link href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Voltar para Home</Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#8C1CB6',
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#8C1CB6',
  },
  sectionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#8C1CB6',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});