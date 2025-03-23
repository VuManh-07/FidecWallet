import * as React from 'react';

import { Pressable, Switch, Text, View } from '@/components/ui';
import { ArrowRight, CheckCircle } from '@/components/ui/icons';
import type { TxKeyPath } from '@/lib';

type ItemProps = {
  title: TxKeyPath;
  value?: string;
  onPress?: () => void;
  isSwitch?: boolean;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
  icon?: React.ReactNode;
  isTitleOpacity?: boolean;
  isValueOpacity?: boolean;
  isShowIconVerified?: boolean;
  isVerified?: boolean;
  titleSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  valueSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  titleFont?:
    | 'thin'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold';
  valueFont?:
    | 'thin'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold';
};

export const Item = ({
  title,
  value,
  icon,
  onPress,
  isSwitch = false,
  switchValue = false,
  onSwitchChange,
  isTitleOpacity = false,
  isValueOpacity = false,
  isShowIconVerified = false,
  isVerified = true,
  titleSize = 'sm',
  valueSize = 'xs',
  titleFont = 'bold',
  valueFont = 'normal',
}: ItemProps) => {
  const handleSwitchChange = (value: boolean) => {
    if (onSwitchChange) {
      onSwitchChange(value);
    }
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      className="flex-row items-center justify-between rounded-lg px-3 py-2 dark:bg-neutral-900"
    >
      <View className="flex-row items-center space-x-3">
        {icon && <View className="mr-1">{icon}</View>}
        <View>
          <View className="flex-row items-center space-x-1">
            <Text
              className={`text-${titleSize} font-${titleFont} mr-1 dark:text-white ${isTitleOpacity ? 'opacity-50' : ''}`}
              tx={title}
            />
            {isShowIconVerified && (
              <CheckCircle
                className=""
                color={isVerified ? 'green' : 'gray'}
                width={14}
                height={14}
              />
            )}
          </View>
          {value && (
            <Text
              className={`text-${valueSize} font-${valueFont} dark:text-white ${isValueOpacity ? 'opacity-50' : ''}`}
            >
              {value}
            </Text>
          )}
        </View>
      </View>

      {isSwitch ? (
        <Switch.Root
          checked={switchValue}
          onChange={handleSwitchChange}
          accessibilityLabel="switch"
          className="pb-2"
        >
          <Switch.Icon checked={switchValue} />
        </Switch.Root>
      ) : (
        onPress && (
          <ArrowRight className="text-neutral-500" width={6} height={10} />
        )
      )}
    </Pressable>
  );
};
