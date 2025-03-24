import * as React from 'react';
import { type TextStyle } from 'react-native';

import { Pressable, Switch, Text, View } from '@/components/ui';
import { ArrowRight, CheckCircle } from '@/components/ui/icons';
import type { TxKeyPath } from '@/lib';
import {
  getFontSize,
  getSize,
  HEIGHT,
} from '@/lib/hooks/use-responsive-dimensions';

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
  styleTitle?: TextStyle;
  styleValue?: TextStyle;
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
  titleFont = 'bold',
  valueFont = 'normal',
  styleTitle,
  styleValue,
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
      className="flex-row items-center justify-between rounded-lg pl-2 pr-4 dark:bg-neutral-900"
    >
      <View className="my-3 flex-row items-center">
        {icon && <View className="mr-1">{icon}</View>}
        <View>
          <View className="mb-1 flex-row items-center">
            <Text
              className={`font-${titleFont} ${isTitleOpacity ? 'opacity-50' : ''} dark:text-white`}
              style={[
                { fontSize: getFontSize(14), lineHeight: HEIGHT(14) },
                styleTitle,
              ]}
              tx={title}
            />
            {isShowIconVerified && (
              <CheckCircle
                className="ml-1"
                color={isVerified ? 'green' : 'gray'}
                width={getSize(14)}
                height={getSize(14)}
              />
            )}
          </View>
          {value?.trim() && (
            <Text
              className={`font-${valueFont} mt-1 dark:text-white ${isValueOpacity ? 'opacity-50' : ''}`}
              style={[
                { fontSize: getFontSize(12), lineHeight: HEIGHT(14) },
                styleValue,
              ]}
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
        !isSwitch &&
        !!onPress && (
          <ArrowRight
            className="text-neutral-500"
            width={getSize(6)}
            height={getSize(10)}
          />
        )
      )}
    </Pressable>
  );
};
