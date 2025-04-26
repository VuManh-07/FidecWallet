import { useColorScheme } from 'nativewind';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function ItemQRAddress({ value }: { value: string }) {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  return (
    <View className="my-10 mb-6 items-center">
      <QRCode
        value={value}
        size={256}
        color={isDarkMode ? '#fff' : '#000'}
        backgroundColor={isDarkMode ? '#000' : '#fff'}
      />
    </View>
  );
}
