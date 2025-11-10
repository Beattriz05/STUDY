import React from 'react';
import { StyleSheet, ScrollView, StatusBar, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './src/components/Header';
import About from './src/components/Sobre';
import Skills from './src/components/Skills';
import Projects from './src/components/Projetos';
import Experience from './src/components/Experiências';
import Education from './src/components/Educação';
import { portfolioData } from './src/data/PortfolioData';

const App: React.FC = () => {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998']}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Header
          name={portfolioData.name}
          title={portfolioData.title}
          email={portfolioData.email}
          phone={portfolioData.phone}
          location={portfolioData.location}
        />

        <About about={portfolioData.about} />

        <Skills skills={portfolioData.skills} />

        <Projects projects={portfolioData.projects} />

        <Experience experience={portfolioData.experience} />

        <Education education={portfolioData.education} />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
    flexGrow: 1,
  },
});

export default App;