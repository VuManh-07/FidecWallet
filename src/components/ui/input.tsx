import * as React from 'react';
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { useController } from 'react-hook-form';
import type { TextInputProps } from 'react-native';
import { I18nManager, Pressable, StyleSheet, View } from 'react-native';
import { TextInput as NTextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

import colors from './colors';
import { Text } from './text';

const inputTv = tv({
  slots: {
    container: 'mb-2',
    label: 'text-grey-100 mb-1 text-lg dark:text-neutral-100',
    input:
      'mt-0 rounded-xl border-[0.5px] border-neutral-300 bg-neutral-100 px-4 py-3 font-inter text-base font-medium leading-5 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white',
  },
  variants: {
    focused: {
      true: {
        input: 'border-yellow-400 dark:border-yellow-400',
      },
    },
    error: {
      true: {
        input: 'border-danger-600',
        label: 'text-danger-600 dark:text-danger-600',
      },
    },
    disabled: {
      true: {
        input: 'bg-neutral-200',
      },
    },
  },
  defaultVariants: {
    focused: false,
    error: false,
    disabled: false,
  },
});

export interface NInputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  error?: string;
  labelClassName?: string;
  inputClassName?: string;
  containerClassName?: string;
  secureTextEntryToggle?: boolean;
}

type TRule<T extends FieldValues> =
  | Omit<
      RegisterOptions<T>,
      'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
    >
  | undefined;

export type RuleType<T extends FieldValues> = { [name in keyof T]: TRule<T> };
export type InputControllerType<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: RuleType<T>;
};

interface ControlledInputProps<T extends FieldValues>
  extends NInputProps,
    InputControllerType<T> {}

export const Input = React.forwardRef<NTextInput, NInputProps>((props, ref) => {
  const {
    label,
    labelClassName,
    error,
    testID,
    inputClassName,
    containerClassName,
    secureTextEntryToggle,
    ...inputProps
  } = props;

  const [isFocussed, setIsFocussed] = React.useState(false);
  const [secure, setSecure] = React.useState(!!secureTextEntryToggle); // 👈 mặc định ẩn nếu có toggle

  const onBlur = React.useCallback(() => setIsFocussed(false), []);
  const onFocus = React.useCallback(() => setIsFocussed(true), []);
  const toggleSecure = () => setSecure(!secure);

  const styles = React.useMemo(
    () =>
      inputTv({
        error: Boolean(error),
        focused: isFocussed,
        disabled: Boolean(props.disabled),
      }),
    [error, isFocussed, props.disabled]
  );

  const labelStyle = React.useMemo(
    () => twMerge(styles.label(), labelClassName),
    [styles, labelClassName]
  );

  const inputStyle = React.useMemo(
    () => twMerge(styles.input(), inputClassName),
    [styles, inputClassName]
  );

  const containerStyle = React.useMemo(
    () => twMerge(styles.container(), containerClassName),
    [styles, containerClassName]
  );

  return (
    <View className={containerStyle}>
      {label && (
        <Text
          testID={testID ? `${testID}-label` : undefined}
          className={labelStyle}
        >
          {label}
        </Text>
      )}
      <View className="relative">
        <NTextInput
          testID={testID}
          ref={ref}
          secureTextEntry={secureTextEntryToggle ? secure : false}
          placeholderTextColor={colors.neutral[400]}
          className={inputStyle}
          onBlur={onBlur}
          onFocus={onFocus}
          {...inputProps}
          style={StyleSheet.flatten([
            { writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' },
            { textAlign: I18nManager.isRTL ? 'right' : 'left' },
            inputProps.style,
          ])}
        />
        {secureTextEntryToggle && (
          <Pressable
            onPress={toggleSecure}
            style={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: [{ translateY: -12 }],
            }}
            hitSlop={10}
          >
            <Ionicons
              name={secure ? 'eye-off' : 'eye'}
              size={20}
              color={colors.neutral[500]}
            />
          </Pressable>
        )}
      </View>
      {error && (
        <Text
          testID={testID ? `${testID}-error` : undefined}
          className="mx-2 text-sm text-danger-400 dark:text-danger-600"
        >
          {error}
        </Text>
      )}
    </View>
  );
});

Input.displayName = 'Input';

export function ControlledInput<T extends FieldValues>(
  props: ControlledInputProps<T>
) {
  const { name, control, rules, ...inputProps } = props;

  const { field, fieldState } = useController({ control, name, rules });

  return (
    <Input
      ref={field.ref}
      autoCapitalize="none"
      onChangeText={field.onChange}
      value={(field.value as string) || ''}
      {...inputProps}
      error={fieldState.error?.message}
    />
  );
}
