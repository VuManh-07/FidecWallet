import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface ItemContainerProps {
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
}

const ItemContainer: React.FC<ItemContainerProps> = ({
  icon,
  label,
  onPress,
}) => {
  return (
    <TouchableOpacity
      className="w-70 h-78 flex items-center justify-center rounded-2xl bg-neutral-800 px-8 py-4"
      onPress={onPress}
    >
      <View className="mb-1">{icon}</View>
      <Text className="text-xs font-semibold text-white">{label}</Text>
    </TouchableOpacity>
  );
};

export default ItemContainer;
