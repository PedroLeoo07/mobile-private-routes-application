import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <LinearGradient
      colors={['#000000', '#1a0000', '#330000', '#1a0000', '#000000']}
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
            <Text style={styles.userBadge}>🏆 USUÁRIO VERIFICADO</Text>
          </View>
          
          {/* Stats Cards */}
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statEmoji}>🔐</Text>
              <Text style={styles.statNumber}>100%</Text>
              <Text style={styles.statLabel}>SEGURO</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statEmoji}>⚡</Text>
              <Text style={styles.statNumber}>24/7</Text>
              <Text style={styles.statLabel}>ATIVO</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statEmoji}>💾</Text>
              <Text style={styles.statNumber}>∞</Text>
              <Text style={styles.statLabel}>STORAGE</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardGlow} />
            <Text style={styles.cardTitle}>✅ VOCÊ ESTÁ AUTENTICADO!</Text>
            <Text style={styles.cardText}>
              Esta é uma rota privada protegida pelo Expo Router. 
              Você só consegue acessar esta tela porque fez login com sucesso.
            </Text>
          </View>

          {/* Badges de Conquistas */}
          <View style={styles.achievementsCard}>
            <View style={styles.cardGlow} />
            <Text style={styles.achievementsTitle}>🏅 CONQUISTAS DESBLOQUEADAS</Text>
            <View style={styles.badgesContainer}>
              <View style={styles.badge}>
                <Text style={styles.badgeEmoji}>🎯</Text>
                <Text style={styles.badgeText}>Primeiro Login</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeEmoji}>🔥</Text>
                <Text style={styles.badgeText}>Conta Ativa</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeEmoji}>⭐</Text>
                <Text style={styles.badgeText}>Usuário Premium</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeEmoji}>🚀</Text>
                <Text style={styles.badgeText}>Early Adopter</Text>
              </View>
            </View>
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

          {/* Funcionalidades Extras */}
          <View style={styles.featuresCard}>
            <View style={styles.cardGlow} />
            <Text style={styles.featuresTitle}>✨ FUNCIONALIDADES EXTRAS:</Text>
            <View style={styles.featureRow}>
              <Text style={styles.featureIcon}>🎨</Text>
              <View style={styles.featureInfo}>
                <Text style={styles.featureLabel}>Design Moderno</Text>
                <Text style={styles.featureDesc}>Interface dark com gradientes e efeitos neon</Text>
              </View>
            </View>
            <View style={styles.featureRow}>
              <Text style={styles.featureIcon}>🔄</Text>
              <View style={styles.featureInfo}>
                <Text style={styles.featureLabel}>Sincronização Automática</Text>
                <Text style={styles.featureDesc}>Dados salvos automaticamente em tempo real</Text>
              </View>
            </View>
            <View style={styles.featureRow}>
              <Text style={styles.featureIcon}>📱</Text>
              <View style={styles.featureInfo}>
                <Text style={styles.featureLabel}>100% Responsivo</Text>
                <Text style={styles.featureDesc}>Funciona perfeitamente em todos os dispositivos</Text>
              </View>
            </View>
            <View style={styles.featureRow}>
              <Text style={styles.featureIcon}>🛡️</Text>
              <View style={styles.featureInfo}>
                <Text style={styles.featureLabel}>Segurança Avançada</Text>
                <Text style={styles.featureDesc}>Proteção total dos seus dados pessoais</Text>
              </View>
            </View>
          </View>

          {/* Status do Sistema */}
          <View style={styles.systemCard}>
            <View style={styles.cardGlow} />
            <Text style={styles.systemTitle}>📊 STATUS DO SISTEMA:</Text>
            <View style={styles.systemRow}>
              <Text style={styles.systemLabel}>Servidor:</Text>
              <View style={styles.statusOnline}>
                <View style={styles.statusDot} />
                <Text style={styles.statusText}>ONLINE</Text>
              </View>
            </View>
            <View style={styles.systemRow}>
              <Text style={styles.systemLabel}>Autenticação:</Text>
              <View style={styles.statusOnline}>
                <View style={styles.statusDot} />
                <Text style={styles.statusText}>ATIVA</Text>
              </View>
            </View>
            <View style={styles.systemRow}>
              <Text style={styles.systemLabel}>Versão:</Text>
              <Text style={styles.systemValue}>v2.0.0</Text>
            </View>
            <View style={styles.systemRow}>
              <Text style={styles.systemLabel}>Última Atualização:</Text>
              <Text style={styles.systemValue}>Hoje</Text>
            </View>
          </View>

          <View style={styles.tipCard}>
            <View style={styles.cardGlow} />
            <Text style={styles.tipTitle}>💡 DICA IMPORTANTE:</Text>
            <Text style={styles.tipText}>
              Seus dados ficam salvos mesmo se você fechar o app! 
              Use o botão "Sair" no perfil para fazer logout.
            </Text>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>🔥 Desenvolvido com React Native & Expo</Text>
            <Text style={styles.footerSubtext}>Powered by Expo Router v3</Text>
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
  userBadge: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '700',
    marginTop: 8,
    letterSpacing: 2,
    opacity: 0.9,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ff3b30',
    shadowColor: '#ff3b30',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 15,
  },
  statEmoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '900',
    color: '#ff3b30',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    color: '#ffffff',
    fontWeight: '700',
    letterSpacing: 1,
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
  achievementsCard: {
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
  achievementsTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#ff3b30',
    marginBottom: 20,
    textTransform: 'uppercase',
    letterSpacing: 2,
    textAlign: 'center',
    textShadowColor: '#ff3b30',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  badge: {
    width: '48%',
    backgroundColor: '#2a2a2a',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ff3b30',
  },
  badgeEmoji: {
    fontSize: 36,
    marginBottom: 8,
  },
  badgeText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '700',
    textAlign: 'center',
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
  featuresCard: {
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
  featuresTitle: {
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
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  featureIcon: {
    fontSize: 36,
    marginRight: 16,
  },
  featureInfo: {
    flex: 1,
  },
  featureLabel: {
    fontSize: 16,
    color: '#ff3b30',
    fontWeight: '800',
    marginBottom: 4,
  },
  featureDesc: {
    fontSize: 13,
    color: '#ffffff',
    lineHeight: 18,
    fontWeight: '500',
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
  systemCard: {
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
  systemTitle: {
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
  systemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  systemLabel: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '700',
  },
  statusOnline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#00ff00',
    marginRight: 8,
    shadowColor: '#00ff00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
  },
  statusText: {
    fontSize: 16,
    color: '#00ff00',
    fontWeight: '800',
  },
  systemValue: {
    fontSize: 16,
    color: '#ff3b30',
    fontWeight: '800',
  },
  footer: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#ff3b30',
    fontWeight: '700',
    marginBottom: 6,
    textAlign: 'center',
  },
  footerSubtext: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '500',
    opacity: 0.7,
    textAlign: 'center',
  },
});