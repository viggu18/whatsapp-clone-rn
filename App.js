import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './navigation';

export default function App() {
  return (
    <>
          <StatusBar style="auto" />
          <RootNavigation />
    </>
  );
}

const styles = StyleSheet.create({

});
