import React from 'react';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Item({ children, className }: Props) {
  const vStyle = React.useMemo(
    () =>
      twMerge(
        'mx-2 flex-row items-center justify-between rounded-lg bg-zinc-200 dark:bg-neutral-700',
        className
      ),
    [className]
  );

  return <View className={vStyle}>{children}</View>;
}
