import React from 'react';
import { ActivityIndicator, View, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

// Context
import { NavigationProvider } from './src/contexts/NavigationContext';
import { StoreProvider } from './src/contexts/StoreContext';
import { AuthProvider, useAuth } from './src/contexts/AuthContext';
import { LessonProvider } from './src/contexts/LessonContext';
import { UserProvider } from './src/contexts/UserContext';

// Navigation
import AuthNavigator from './src/navigation/AuthNavigator';
import AppNavigator from './src/navigation/AppNavigator';

import "./global.css"; // nativewind

function Main() {
  const { isLoggedIn, loading } = useAuth();

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {isLoggedIn ? (
        <LessonProvider>
          <AppNavigator />
        </LessonProvider>
      ) : (
        <AuthNavigator />
      )}
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <UserProvider>
        <StoreProvider>
          <AuthProvider>
            <NavigationProvider>
              <Main />
            </NavigationProvider>
          </AuthProvider>
        </StoreProvider>
      </UserProvider>
    </SafeAreaProvider>
  );
}