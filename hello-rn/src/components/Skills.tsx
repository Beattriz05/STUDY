import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../styles/Styles';
import { Skill } from '../types/Types';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  const widthAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: skill.level,
      duration: 1500,
      delay: index * 100,
      useNativeDriver: false,
    }).start();
  }, [skill.level, index, widthAnim]);

  const width = widthAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.skillItem}>
      <View style={styles.skillHeader}>
        <Text style={styles.skillName}>{skill.name}</Text>
        <Text style={styles.skillLevel}>{skill.level}%</Text>
      </View>
      <View style={styles.skillBarContainer}>
        <Animated.View style={[styles.skillBarFill, { width }]}>
          <LinearGradient
            colors={[colors.primary, colors.primaryLight, colors.secondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          />
        </Animated.View>
      </View>
    </View>
  );
};

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
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
      <Text style={styles.sectionTitle}>Habilidades</Text>
      <View style={styles.card}>
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
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
  skillItem: {
    marginBottom: 20,
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  skillName: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '600',
  },
  skillLevel: {
    fontSize: 14,
    color: colors.primaryLight,
    fontWeight: 'bold',
  },
  skillBarContainer: {
    height: 10,
    backgroundColor: colors.cardBorder,
    borderRadius: 5,
    overflow: 'hidden',
  },
  skillBarFill: {
    height: '100%',
    borderRadius: 5,
  },
  gradient: {
    flex: 1,
  },
});

export default Skills;
