// App.js

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import LoginScreen from './scr/LoginScreen';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return (
      <View>
        <HomeScreen />
      </View>
    );
  } else {
    return (
      <View>
        <LoginScreen onLogin={() => setLoggedIn(true)} />
      </View>
    );
  }
}
