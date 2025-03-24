import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

const WalletType = () => {
  const [type, setType] = useState<'hot' | 'cold'>('hot');
  const isHotWallet = type === 'hot';

  return (
    <View className="flex-row items-center justify-center p-4">
      {/* Cold Wallet Button */}
      <Pressable
        className={`m-1 flex-row items-center justify-center rounded-full border px-6 py-3
        ${isHotWallet ? 'border-gray-400 bg-gray-100 dark:border-neutral-500 dark:bg-neutral-700 ' : 'border-yellow-500 dark:border-yellow-500'}`}
        onPress={() => setType('cold')}
        style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
      >
        <View className="flex-row items-center gap-3">
          <FontAwesome5
            name="snowflake"
            size={18}
            color={isHotWallet ? '#A0A0A0' : '#FFD700'}
          />
          <Text className="font-semibold text-gray-900 dark:text-white">
            Cold Wallet
          </Text>
        </View>
      </Pressable>

      {/* Hot Wallet Button */}
      <Pressable
        className={`m-1 flex-row items-center justify-center rounded-full border px-6 py-3 
        ${!isHotWallet ? 'border-gray-400 bg-gray-100 dark:border-neutral-500 dark:bg-neutral-700' : 'border-yellow-500 dark:border-yellow-500'}`}
        onPress={() => setType('hot')}
        style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
      >
        <View className="flex-row items-center gap-3">
          <FontAwesome5
            name="fire"
            size={18}
            color={isHotWallet ? '#FF8C00' : '#A0A0A0'}
          />
          <Text className="font-semibold text-gray-900 dark:text-white">
            Hot Wallet
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default WalletType;
