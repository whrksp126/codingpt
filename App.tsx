import React, { useState } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityIndicator, View, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Context
import { AuthProvider, useAuth } from './src/contexts/AuthContext';
import { LessonProvider } from './src/contexts/LessonContext';
import { useUser, UserProvider } from './src/contexts/UserContext';
import { NavigationProvider } from './src/contexts/NavigationContext';

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
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <UserProvider>
        <AuthProvider>
          <LessonProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <NavigationProvider>
                <Main />
              </NavigationProvider>
            </GestureHandlerRootView>
          </LessonProvider>
        </AuthProvider>
      </UserProvider>
    </SafeAreaProvider>
  );
}