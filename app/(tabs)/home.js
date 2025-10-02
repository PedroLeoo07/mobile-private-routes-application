import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>👋</Text>
        <Text style={styles.title}>Bem-vindo(a)!</Text>
        <Text style={styles.userName}>{user?.name}</Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>✅ Você está autenticado!</Text>
          <Text style={styles.cardText}>
            Esta é uma rota privada protegida pelo Expo Router. 
            Você só consegue acessar esta tela porque fez login com sucesso.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>🎯 Recursos Implementados:</Text>
          <Text style={styles.infoItem}>✓ Expo Router (navegação moderna)</Text>
          <Text style={styles.infoItem}>✓ AsyncStorage (persistência de dados)</Text>
          <Text style={styles.infoItem}>✓ Rotas privadas automáticas</Text>
          <Text style={styles.infoItem}>✓ Cadastro de usuários</Text>
          <Text style={styles.infoItem}>✓ Login persistente</Text>
          <Text style={styles.infoItem}>✓ Validação de dados</Text>
        </View>

        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>💡 Dica:</Text>
          <Text style={styles.tipText}>
            Seus dados ficam salvos mesmo se você fechar o app! 
            Use o botão "Sair" no perfil para fazer logout.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  emoji: {
    fontSize: 100,
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: '#ff3b30',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: '#ff3b30',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  userName: {
    fontSize: 28,
    color: '#ff3b30',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    textShadowColor: '#ff3b30',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 25,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ff3b30',
    shadowColor: '#ff3b30',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff3b30',
    marginBottom: 12,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  cardText: {
    fontSize: 15,
    color: '#e0e0e0',
    textAlign: 'center',
    lineHeight: 22,
  },
  infoCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 25,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ff3b30',
    shadowColor: '#ff3b30',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 12,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff3b30',
    marginBottom: 15,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  infoItem: {
    fontSize: 15,
    color: '#ffffff',
    marginBottom: 10,
    lineHeight: 22,
    fontWeight: '500',
  },
  tipCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 25,
    borderWidth: 2,
    borderColor: '#ff3b30',
    shadowColor: '#ff3b30',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 12,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff3b30',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  tipText: {
    fontSize: 15,
    color: '#e0e0e0',
    lineHeight: 22,
  },
});