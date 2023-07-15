import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import RootNavigation from './navigation';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1,}}>
          <StatusBar style="auto" />
          <RootNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
