import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../styles/Styles';
import { Project } from '../types/Types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 500,
        delay: index * 150,
        useNativeDriver: false,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        delay: index * 150,
        useNativeDriver: false,
      }),
    ]).start();
  }, [index, scaleAnim, fadeAnim]);

  // Verificação segura para o projeto
  if (!project) {
    return (
      <View style={styles.projectCard}>
        <Text>Projeto não disponível</Text>
      </View>
    );
  }

  return (
    <Animated.View
      style={[
        styles.projectCard,
        {
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <LinearGradient
        colors={[colors.cardBackground, colors.primaryDark + '20']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.cardGradient}
      >
        <View style={styles.projectHeader}>
          <Text style={styles.projectName}>{project.Nome || 'Nome não disponível'}</Text>
          <View style={[
            styles.statusBadge,
            project.Status === 'Concluído' ? styles.statusComplete : styles.statusInProgress
          ]}>
            <Text style={styles.statusText}>{project.Status || 'Status não definido'}</Text>
          </View>
        </View>

        <Text style={styles.projectDescription}>{project.Descriçâo || 'Descrição não disponível'}</Text>

        {/* CORREÇÃO AQUI: Verificação segura para technologies */}
        <View style={styles.techContainer}>
          {project.technologies && Array.isArray(project.technologies) 
            ? project.technologies.map((tech, idx) => (
                <View key={`tech-${project.Id}-${idx}`} style={styles.techBadge}>
                  <Text style={styles.techText}>{tech}</Text>
                </View>
              ))
            : <Text style={styles.techText}>Tecnologias não listadas</Text>
          }
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      delay: 0,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  // CORREÇÃO: Verificação segura para projects
  if (!projects || !Array.isArray(projects)) {
    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Projetos</Text>
        <Text>Nenhum projeto disponível</Text>
      </View>
    );
  }

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.sectionTitle}>Projetos</Text>
      {projects.map((project, index) => (
        // CORREÇÃO: Key mais segura
        <ProjectCard 
          key={project?.Id ? `project-${project.Id}` : `project-${index}`} 
          project={project} 
          index={index} 
        />
      ))}
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
  projectCard: {
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  cardGradient: {
    padding: 20,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusComplete: {
    backgroundColor: colors.accent + '30',
  },
  statusInProgress: {
    backgroundColor: colors.secondary + '30',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
  },
  projectDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 15,
    lineHeight: 20,
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  techBadge: {
    backgroundColor: colors.primary + '40',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  techText: {
    fontSize: 12,
    color: colors.primaryLight,
    fontWeight: '600',
  },
});

export default Projects;