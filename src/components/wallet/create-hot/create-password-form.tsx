import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import * as z from 'zod';

import { Button, Checkbox, ControlledInput, Text, View } from '@/components/ui';
import { translate } from '@/lib';

const schema = z
  .object({
    name: z.string().optional(),
    password: z
      .string({ required_error: translate('error.password_required') })
      .min(8, translate('error.password_min'))
      .regex(/^[A-Z]/, translate('error.password_upper'))
      .regex(/[^A-Za-z0-9]/, translate('error.password_special')),
    confirm: z.string({
      required_error: translate('error.password_required'),
    }),
  })
  .refine((data) => data.password === data.confirm, {
    message: translate('error.password_mismatch'),
    path: ['confirm'],
  });

export type FormType = z.infer<typeof schema>;

export type LoginFormProps = {
  checked: boolean;
  setChecked: () => void;
  onSubmit?: SubmitHandler<FormType>;
};

export const CreatePasswordForm = ({
  checked,
  setChecked,
  onSubmit = () => {},
}: LoginFormProps) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={10}
    >
      <View className="flex-1 p-4">
        <View className="flex-1">
          <ControlledInput
            testID="name"
            control={control}
            name="name"
            label="Name Account"
            labelClassName="text-sm"
            inputClassName="border text-center border-yellow-400 text-base text-white px-4 py-3 rounded-xl"
          />

          <ControlledInput
            testID="password-input"
            control={control}
            name="password"
            label={translate('auth.password.title') || 'Password'}
            secureTextEntryToggle={true}
            placeholder="*******"
            labelClassName="text-sm"
            inputClassName="border text-center border-yellow-400 text-base text-white px-4 py-3 rounded-xl"
          />
          <ControlledInput
            testID="confirm-input"
            control={control}
            name="confirm"
            label={translate('auth.password.confirm') || 'Confirm Password'}
            secureTextEntryToggle={true}
            placeholder="*******"
            labelClassName="text-sm"
            inputClassName="border text-center border-yellow-400 text-base text-white px-4 py-3 rounded-xl"
          />

          <View className="items- my-6 flex-row">
            <Checkbox.Root
              checked={checked}
              onChange={setChecked}
              accessibilityLabel="accept terms of condition"
            >
              <Checkbox.Icon checked={checked} />
            </Checkbox.Root>
            <Text className="mx-2 text-xs font-medium">
              {translate('auth.acceptClause')?.split('{terms}')[0] ||
                'I certify that I am 18 years of age or older and agree to the '}
              <Text className="mx-2 text-xs font-medium text-yellow-400 dark:text-yellow-400">
                {translate('auth.terms') || 'User Agreement'}
              </Text>
              {' ' + translate('auth.and') + ' '}
              <Text className="mx-2 text-xs font-medium text-yellow-400 dark:text-yellow-400">
                {translate('auth.privacy') || 'Privacy Policy'}
              </Text>
            </Text>
          </View>
        </View>

        <Button
          label="Create Account"
          onPress={handleSubmit(onSubmit)}
          className="mb-4 mt-10 h-14 rounded-xl"
          textClassName="font-bold text-dark text-base"
          disabled={!checked}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
