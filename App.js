import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppScreens from './src/Navigaton/navigation';

export default function App() {
  return (
    <View className="flex-1">
        <AppScreens />     
    </View>
  );
}

