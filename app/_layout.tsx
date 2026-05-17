import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import '@/global.css';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('@/assets/assets-5/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('@/assets/assets-5/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('@/assets/assets-5/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('@/assets/assets-5/fonts/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Stack />;
}
