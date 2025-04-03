import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";

export default function TermosDeUso() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Termos de Uso</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Última atualização: 03/04/2025</Text>
        <Text style={styles.sectionText}>
          Bem-vindo ao nosso aplicativo sobre a hamster Rodriga Garra!
          Ao usar este aplicativo, você concorda com os seguintes termos e
          condições. Se você não concorda com estes termos, por favor, não
          utilize o aplicativo.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Aceitação dos Termos</Text>
        <Text style={styles.sectionText}>
          Ao acessar ou usar o aplicativo, você concorda em cumprir e estar
          vinculado a estes Termos de Uso. Se você não concorda com qualquer
          parte destes termos, você não deve usar o aplicativo.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Uso do Aplicativo</Text>
        <Text style={styles.sectionText}>
          O aplicativo é destinado a fins de entretenimento e informação sobre a
          hamster Rodriga. Você concorda em usar o aplicativo apenas para fins
          legais e de acordo com todas as leis aplicáveis.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Propriedade Intelectual</Text>
        <Text style={styles.sectionText}>
          Todo o conteúdo do aplicativo, incluindo textos, imagens e gráficos, é
          protegido por direitos autorais e outras leis de propriedade
          intelectual. Você não pode reproduzir, distribuir ou modificar
          qualquer parte do conteúdo sem a nossa permissão expressa.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Isenção de Responsabilidade</Text>
        <Text style={styles.sectionText}>
          As informações fornecidas no aplicativo são apenas para fins
          informativos e não devem ser consideradas como aconselhamento
          profissional. Não nos responsabilizamos por quaisquer danos ou perdas
          resultantes do uso das informações contidas no aplicativo.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5. Alterações aos Termos</Text>
        <Text style={styles.sectionText}>
          Reservamo-nos o direito de modificar estes Termos de Uso a qualquer
          momento. Quaisquer alterações serão publicadas nesta página. O uso
          contínuo do aplicativo após a publicação de alterações constitui sua
          aceitação dos novos termos.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>6. Contato</Text>
        <Text style={styles.sectionText}>
          Se você tiver alguma dúvida sobre estes Termos de Uso, entre em
          contato conosco através dos nossos e-mail:
          gabriela.f.barbosa@aluno.senai.br

          julia.a.martins7@aluno.senai.br
          
          vincius.valverde@aluno.senai.br
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
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#8C1CB6",
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#8C1CB6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#8C1CB6",
  },
  sectionText: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },

  button: {
    backgroundColor: "#8C1CB6",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
