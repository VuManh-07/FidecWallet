import * as React from 'react';

import { Pressable, Switch, Text, View } from '@/components/ui';
import { ArrowRight, CheckCircle } from '@/components/ui/icons';
import type { TxKeyPath } from '@/lib';
import { getSize } from '@/lib/hooks/use-responsive-dimensions';

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
  titleFontSize?: string;
  valueFontSize?: string;
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
  titleFontSize = 'text-sm',
  valueFontSize = 'text-xs',
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
          <View className="mb-0.5 flex-row items-center">
            <Text
              className={`font-${titleFont} ${titleFontSize} ${isTitleOpacity ? 'opacity-50' : ''} leading-tight dark:text-white`}
              tx={title}
            />
            {isShowIconVerified && (
              <CheckCircle
                className="ml-0.5"
                color={isVerified ? 'green' : 'gray'}
                width={getSize(14)}
                height={getSize(14)}
              />
            )}
          </View>
          {value?.trim() && (
            <Text
              className={`font-${valueFont} ${valueFontSize} mt-0.5 dark:text-white ${isValueOpacity ? 'opacity-50' : ''} leading-tight`}
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
