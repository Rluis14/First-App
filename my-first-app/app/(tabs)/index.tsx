import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import LandingPage from './LandingPage';


export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"> Hellow World!! </ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Custom Message Container */}
      <ThemedView style={styles.customContainer}>
        <ThemedText style={styles.customMessage}>Lets build an cool app</ThemedText>
        <Image
          source={{ uri: 'https://reactnative.dev/img/logo-og.png' }}
          style={styles.customImage}
        />
        <ThemedText style={styles.highlightText}>Today Focus:</ThemedText>
        <ThemedText style={styles.topicText}>- 1. </ThemedText>
        <ThemedText style={styles.topicText}>- 2.</ThemedText>
        <ThemedText style={styles.topicText}>- 3.</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  customContainer: {
    backgroundColor: 'rgba(161, 206, 220, 0.3)',
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  customMessage: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
    lineHeight: 24,
  },
  customImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 15,
  },
  highlightText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#1D3D47',
  },
  topicText: {
    fontSize: 14,
    marginBottom: 5,
    color: '#2d3f58',
  },
});