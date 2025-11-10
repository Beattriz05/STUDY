import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { colors } from '../styles/Styles';
import { Experience as ExperienceType } from '../types/Types';

interface ExperienceItemProps {
  item: ExperienceType;
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ item, index }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        delay: index * 150,
        useNativeDriver: false,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        delay: index * 150,
        useNativeDriver: false,
      }),
    ]).start();
  }, [index, fadeAnim, slideAnim]);

  return (
    <Animated.View
      style={[
        styles.experienceItem,
        {
          opacity: fadeAnim,
          transform: [{ translateX: slideAnim }],
        },
      ]}
    >
      <View style={styles.timeline}>
        <View style={styles.timelineDot} />
        {index < 1 && <View style={styles.timelineLine} />}
      </View>
      <View style={styles.experienceContent}>
        <Text style={styles.period}>{item.period}</Text>
        <Text style={styles.position}>{item.position}</Text>
        <Text style={styles.company}>{item.company}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </Animated.View>
  );
};

interface ExperienceProps {
  experience: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      delay: 0,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.sectionTitle}>Experiência</Text>
      <View style={styles.card}>
        {experience.map((item, index) => (
          <ExperienceItem key={item.id} item={item} index={index} />
        ))}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 15,
  },
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 15,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  experienceItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timeline: {
    alignItems: 'center',
    marginRight: 15,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.primaryLight,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: colors.cardBorder,
    marginTop: 5,
  },
  experienceContent: {
    flex: 1,
  },
  period: {
    fontSize: 12,
    color: colors.primaryLight,
    fontWeight: '600',
    marginBottom: 5,
  },
  position: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 3,
  },
  company: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});

export default Experience;
