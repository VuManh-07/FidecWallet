import { CameraView, useCameraPermissions } from 'expo-camera';
import { Stack, useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

import ActionButtons from '@/components/scan/action-button';
import Header from '@/components/scan/header';
import Instruction from '@/components/scan/instruction';
import QRFrame from '@/components/scan/qr-frame';
import { translate } from '@/lib';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const route = useRouter();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text>{translate('camera.permissionMessage')}</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.container}>
        <CameraView style={styles.camera} facing={'back'}>
          <Header title={translate('scan.title')} onBack={() => route.back()} />
          <View className="flex-1 items-center justify-center">
            <QRFrame />
            <Instruction />
          </View>
          <ActionButtons />
        </CameraView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
});
