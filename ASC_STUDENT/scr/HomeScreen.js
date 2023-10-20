// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text>Section 1 (1/8)</Text>
      </View>
      <View style={styles.middleSection}>
        <Text>Section 2 (6/8)</Text>
      </View>
      <View style={styles.bottomSection}>
        <Text>Section 3 (1/8)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topSection: {
    flex: 1 / 8,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleSection: {
    flex: 6 / 8,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSection: {
    flex: 1 / 8,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


