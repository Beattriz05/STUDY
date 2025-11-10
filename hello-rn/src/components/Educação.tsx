import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { colors } from '../styles/Styles';
import { Education as EducationType } from '../types/Types';

interface EducationItemProps {
  item: EducationType;
  index: number;
}

const EducationItem: React.FC<EducationItemProps> = ({ item, index }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      delay: index * 150,
      useNativeDriver: false,
    }).start();
  }, [index, fadeAnim]);

  return (
    <Animated.View style={[styles.educationItem, { opacity: fadeAnim }]}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>🎓</Text>
      </View>
      <View style={styles.educationContent}>
        <Text style={styles.degree}>{item.degree}</Text>
        <Text style={styles.institution}>{item.institution}</Text>
        <Text style={styles.period}>{item.period}</Text>
      </View>
    </Animated.View>
  );
};

interface EducationProps {
  education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
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
      <Text style={styles.sectionTitle}>Educação</Text>
      <View style={styles.card}>
        {education.map((item, index) => (
          <EducationItem key={item.id} item={item} index={index} />
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
  educationItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  iconContainer: {
    marginRight: 15,
  },
  icon: {
    fontSize: 30,
  },
  educationContent: {
    flex: 1,
  },
  degree: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 5,
  },
  institution: {
    fontSize: 15,
    color: colors.primaryLight,
    marginBottom: 3,
  },
  period: {
    fontSize: 13,
    color: colors.textSecondary,
  },
});

export default Education;
