import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from '../screens/Auth/LoginScreen';
import { useNavigation } from '../contexts/NavigationContext';

const AuthNavigator: React.FC = () => {
  const { currentScreen } = useNavigation();

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen />;
      default:
        return <LoginScreen />;
    }
  };

  return <View style={styles.container}>{renderScreen()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
});

export default AuthNavigator;