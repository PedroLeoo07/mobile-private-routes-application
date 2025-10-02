import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <LinearGradient
      colors={['#000000', '#1a0a0a', '#2a0000', '#1a0a0a', '#000000']}
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.emojiContainer}>
            <Text style={styles.emoji}>👋</Text>
          </View>
          <Text style={styles.title}>BEM-VINDO(A)!</Text>
          <View style={styles.userNameContainer}>
            <Text style={styles.userName}>{user?.name}</Text>
          </View>
          
          <View style={styles.card}>
            <View style={styles.cardGlow} />
            <Text style={styles.cardTitle}>✅ VOCÊ ESTÁ AUTENTICADO!</Text>
            <Text style={styles.cardText}>
              Esta é uma rota privada protegida pelo Expo Router. 
              Você só consegue acessar esta tela porque fez login com sucesso.
            </Text>
          </View>

          <View style={styles.infoCard}>
            <View style={styles.cardGlow} />
            <Text style={styles.infoTitle}>🎯 RECURSOS IMPLEMENTADOS:</Text>
            <Text style={styles.infoItem}>✓ Expo Router (navegação moderna)</Text>
            <Text style={styles.infoItem}>✓ AsyncStorage (persistência de dados)</Text>
            <Text style={styles.infoItem}>✓ Rotas privadas automáticas</Text>
            <Text style={styles.infoItem}>✓ Cadastro de usuários</Text>
            <Text style={styles.infoItem}>✓ Login persistente</Text>
            <Text style={styles.infoItem}>✓ Validação de dados</Text>
          </View>

          <View style={styles.tipCard}>
            <View style={styles.cardGlow} />
            <Text style={styles.tipTitle}>💡 DICA IMPORTANTE:</Text>
            <Text style={styles.tipText}>
              Seus dados ficam salvos mesmo se você fechar o app! 
              Use o botão "Sair" no perfil para fazer logout.
            </Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    paddingTop: 70,
    paddingBottom: 40,
  },
  emojiContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  emoji: {
    fontSize: 140,
    textAlign: 'center',
    textShadowColor: '#ff3b30',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 40,
  },
  title: {
    fontSize: 48,
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#ff3b30',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 25,
    letterSpacing: 3,
  },
  userNameContainer: {
    backgroundColor: '#ff3b30',
    borderRadius: 20,
    padding: 20,
    marginBottom: 40,
    alignItems: 'center',
    shadowColor: '#ff3b30',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 20,
  },
  userName: {
    fontSize: 36,
    color: '#ffffff',
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 4,
    textShadowColor: '#000000',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 24,
    padding: 30,
    marginBottom: 25,
    borderWidth: 3,
    borderColor: '#ff3b30',
    shadowColor: '#ff3b30',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 25,
    elevation: 20,
    overflow: 'hidden',
  },
  cardGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ff3b30',
    opacity: 0.1,
    borderRadius: 24,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#ff3b30',
    marginBottom: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    textShadowColor: '#ff3b30',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  cardText: {
    fontSize: 17,
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 26,
    fontWeight: '600',
  },
  infoCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 24,
    padding: 30,
    marginBottom: 25,
    borderWidth: 3,
    borderColor: '#ff3b30',
    shadowColor: '#ff3b30',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 25,
    elevation: 20,
    overflow: 'hidden',
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#ff3b30',
    marginBottom: 20,
    textTransform: 'uppercase',
    letterSpacing: 2,
    textShadowColor: '#ff3b30',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  infoItem: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 14,
    lineHeight: 28,
    fontWeight: '700',
    textShadowColor: '#000000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  tipCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 24,
    padding: 30,
    borderWidth: 3,
    borderColor: '#ff3b30',
    shadowColor: '#ff3b30',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 25,
    elevation: 20,
    overflow: 'hidden',
  },
  tipTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#ff3b30',
    marginBottom: 16,
    textTransform: 'uppercase',
    letterSpacing: 2,
    textShadowColor: '#ff3b30',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  tipText: {
    fontSize: 17,
    color: '#ffffff',
    lineHeight: 26,
    fontWeight: '600',
  },
});