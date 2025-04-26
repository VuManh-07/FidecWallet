import React from 'react';

import { Text, TouchableOpacity, View } from '@/components/ui';
import { CheckTick as CheckTickIcon } from '@/components/ui/icons';
import { HEIGHT, WIDTH } from '@/lib/hooks/use-responsive-dimensions';

export interface GasOption {
  label: string;
  amount: string;
  amountDola: string;
}

type Props = {
  options: GasOption[];
  selected: string;
  setSelected: (label: string) => void;
};

export default function BasicGasFee({ options, selected, setSelected }: Props) {
  return (
    <View className="my-2">
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={{
            marginVertical: HEIGHT(8),
            padding: WIDTH(8),
            opacity: selected === option.label ? 1 : 0.5,
          }}
          onPress={() => setSelected(option.label)}
        >
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="w-2">
                {selected === option.label ? (
                  <CheckTickIcon />
                ) : (
                  <View className="boder-white size-4 rounded-full border-2 dark:border-neutral-500" />
                )}
              </View>
              <Text className="mx-6 text-base font-medium">{option.label}</Text>
            </View>
            <Text className="text-base font-medium">{option.amount}</Text>
          </View>
          <Text className="self-end text-xs font-medium text-neutral-400 dark:text-neutral-400">
            ${option.amountDola}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
