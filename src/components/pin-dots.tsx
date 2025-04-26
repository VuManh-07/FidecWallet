import React from 'react';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';

type Props = {
  length?: number;
  currentLength: number;
  className?: string;
};

const PinDots = ({ length = 8, currentLength, className = '' }: Props) => {
  const viewStyle = React.useMemo(
    () => twMerge('flex-row justify-center px-4', className),
    [className]
  );

  return (
    <View className={viewStyle}>
      {[...Array(length)].map((_, index) => (
        <View
          key={index}
          className={`m-1 mx-2 size-8 items-center justify-center rounded-full border-2 
            ${
              currentLength > index
                ? 'border-yellow-400 dark:border-yellow-700 dark:bg-yellow-400'
                : 'border-gray-600 dark:border-neutral-600'
            }
          `}
        />
      ))}
    </View>
  );
};

export default PinDots;
