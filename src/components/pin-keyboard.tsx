import { Ionicons } from '@expo/vector-icons';
import React from 'react';

import { Text, TouchableOpacity, View } from '@/components/ui';

type Props = {
  onPress: (val: string) => void;
};

const PinKeyboard = ({ onPress }: Props) => {
  const keys = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    [',', '0', 'delete'],
  ];

  return (
    <View className="w-full overflow-hidden rounded-xl px-2 py-4 dark:bg-neutral-800">
      {keys.map((row, rowIndex) => (
        <View key={rowIndex} className={`flex-row`}>
          {row.map((key, colIndex) => (
            <TouchableOpacity
              key={colIndex}
              className={`h-16 flex-1 items-center justify-center border-l border-neutral-600 ${
                colIndex === 0 ? 'border-l-0' : ''
              }`}
              onPress={() => onPress(key)}
              disabled={key === ''}
            >
              {key === 'delete' ? (
                <Ionicons name="backspace-outline" size={24} color="white" />
              ) : (
                <Text className="text-xl">{key}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

export default PinKeyboard;
