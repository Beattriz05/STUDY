import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../styles/Styles';

interface HeaderProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
}

const Header: React.FC<HeaderProps> = ({ name, title, email, phone, location }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  return (
    <LinearGradient
      colors={[colors.primary, colors.primaryDark, colors.secondary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{name.charAt(0)}</Text>
          </View>
        </View>

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.contactInfo}>
          <Text style={styles.contactText}>📧 {email}</Text>
          <Text style={styles.contactText}>📱 {phone}</Text>
          <Text style={styles.contactText}>📍 {location}</Text>
        </View>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  content: {
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  avatarText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.text,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    color: colors.text,
    opacity: 0.9,
    marginBottom: 20,
  },
  contactInfo: {
    alignItems: 'center',
    gap: 5,
  },
  contactText: {
    fontSize: 14,
    color: colors.text,
    opacity: 0.8,
  },
});

export default Header;
