import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from '../screens/Auth/LoginScreen';

const AuthNavigator: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState('login');

  const navigate = (screen: string) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    const navigation = {
      navigate,
      goBack: () => setCurrentScreen('login'),
      replace: (screen: string) => setCurrentScreen(screen),
    };

    switch (currentScreen) {
      case 'login':
        return <LoginScreen navigation={navigation} />;
      default:
        return <LoginScreen navigation={navigation} />;
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