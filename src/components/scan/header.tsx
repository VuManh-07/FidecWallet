import { Ionicons } from '@expo/vector-icons';
import React from 'react';

import { Text, TouchableOpacity, View } from '@/components/ui';
import { getSize } from '@/lib/hooks/use-responsive-dimensions';

interface HeaderProps {
  title: string;
  onBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBack }) => (
  <View className="mt-2 flex-row items-center px-4 pt-2">
    <TouchableOpacity onPress={onBack}>
      <Ionicons name="arrow-back" size={getSize(24)} color="white" />
    </TouchableOpacity>
    <Text className="mx-2 text-lg font-bold text-white dark:text-white">
      {title}
    </Text>
  </View>
);

export default Header;
