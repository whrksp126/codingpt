// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <NewAppScreen templateFileName="App.tsx" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;





import React, { useState } from 'react';
import { SafeAreaView, ActivityIndicator, View } from 'react-native';

// Context
import { AuthProvider, useAuth } from './src/contexts/AuthContext';
import { LessonProvider } from './src/contexts/LessonContext';
import { useUser, UserProvider } from './src/contexts/UserContext';

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
    <SafeAreaView className="flex-1 bg-gray-50">
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <UserProvider>
      <AuthProvider>
        <LessonProvider>
          <Main />
        </LessonProvider>
      </AuthProvider>
    </UserProvider>
  );
}