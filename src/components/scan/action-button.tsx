import React, { useState } from 'react';

import { Text, TouchableOpacity, View } from '@/components/ui';
import { translate } from '@/lib';

const ActionButtons: React.FC = () => {
  const [activeButton, setActiveButton] = useState<'scan' | 'myqr' | 'local'>(
    'scan'
  );

  const handlePress = (button: 'scan' | 'myqr' | 'local') => {
    setActiveButton(button);
  };

  // const pickQRCodeFromGallery = async () => {
  //   handlePress('local');
  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: false,
  //     quality: 1,
  //   });

  //   if (!result.canceled) {
  //     console.log('Selected QR Image:', result.assets[0].uri);
  //   }
  // };

  return (
    <View className="mb-6 flex-row justify-center rounded-full">
      {/* Button Chọn QR từ thiết bị */}
      {/* <TouchableOpacity
        className={`rounded-full px-6 py-3 ${
          activeButton === 'local' ? 'bg-yellow-400' : 'bg-neutral-700'
        }`}
        onPress={pickQRCodeFromGallery}
      >
        <Text className="font-semibold text-white">Select QR</Text>
      </TouchableOpacity> */}

      {/* Button Scan QR */}
      <TouchableOpacity
        className={`rounded-full px-6 py-3 ${
          activeButton === 'scan' ? 'bg-yellow-400' : 'bg-neutral-700'
        }`}
        onPress={() => handlePress('scan')}
      >
        <Text className="font-semibold text-white">
          {translate('scan.action.scan')}
        </Text>
      </TouchableOpacity>

      {/* Button My QR Code */}
      <TouchableOpacity
        className={`mr-2 rounded-full px-6 py-3 ${
          activeButton === 'myqr' ? 'bg-yellow-400' : 'bg-neutral-700'
        }`}
        onPress={() => handlePress('myqr')}
      >
        <Text className="font-semibold text-white">
          {translate('scan.action.myqr')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionButtons;
