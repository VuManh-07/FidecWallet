/* eslint-disable react/react-in-jsx-scope */

import { useColorScheme } from 'nativewind';

import { EmailItem } from '@/components/profiles/information/email-item';
import { NameItem } from '@/components/profiles/information/name-item';
import { PhoneItem } from '@/components/profiles/information/phone-item';
import { ItemsContainer } from '@/components/profiles/items-container';
import { CardItem } from '@/components/profiles/manage/card-item';
import { DeviceItem } from '@/components/profiles/manage/device-item';
import { PostedItem } from '@/components/profiles/manage/posted-item';
import { WalletconnectItem } from '@/components/profiles/manage/walletconnect-item';
import { LogoutItem } from '@/components/profiles/other/logout-item';
import { ShareItem } from '@/components/profiles/other/share-item';
import { Support24hItem } from '@/components/profiles/other/support-24h-item';
import { TwoFaItem } from '@/components/profiles/settings/2fa-item';
import { AllowFaceId } from '@/components/profiles/settings/allow-face-id';
import { CodeToEnterIntoApp } from '@/components/profiles/settings/code-to-enter-into-app';
import { Fingerprint } from '@/components/profiles/settings/fingerprint';
import { LanguageItem } from '@/components/profiles/settings/language-item';
import { ThemeItem } from '@/components/profiles/settings/theme-item';
import {
  colors,
  FocusAwareStatusBar,
  ScrollView,
  Text,
  View,
} from '@/components/ui';
import { translate, useAuth } from '@/lib';
import { HEIGHT, WIDTH } from '@/lib/hooks/use-responsive-dimensions';

export default function Profiles() {
  const signOut = useAuth.use.signOut();
  const { colorScheme } = useColorScheme();
  console.log(colorScheme);
  const iconColor =
    colorScheme === 'dark' ? colors.neutral[100] : colors.neutral[500];
  return (
    <>
      <FocusAwareStatusBar />

      <ScrollView>
        <View className="flex-1" style={{ padding: WIDTH(20) }}>
          <Text
            className="text-center text-xl font-bold leading-tight"
            style={{
              marginVertical: HEIGHT(12),
            }}
          >
            {translate('profiles.title')}
          </Text>

          <ItemsContainer title="profiles.information.title">
            <NameItem iconColor={iconColor} />
            <PhoneItem iconColor={iconColor} />
            <EmailItem iconColor={iconColor} />
          </ItemsContainer>

          <ItemsContainer title="profiles.settings.title">
            <TwoFaItem iconColor={iconColor} />
            <CodeToEnterIntoApp iconColor={iconColor} />
            <AllowFaceId iconColor={iconColor} />
            <Fingerprint iconColor={iconColor} />
            <LanguageItem iconColor={iconColor} />
            <ThemeItem iconColor={iconColor} />
          </ItemsContainer>

          <ItemsContainer title="profiles.manage.title">
            <PostedItem iconColor={iconColor} />
            <CardItem iconColor={iconColor} />
            <WalletconnectItem iconColor={iconColor} />
            <DeviceItem iconColor={iconColor} />
          </ItemsContainer>

          <ItemsContainer title="profiles.other.title">
            <Support24hItem iconColor={iconColor} />
            <ShareItem iconColor={iconColor} />
            <LogoutItem onPress={signOut} />
          </ItemsContainer>
        </View>
      </ScrollView>
    </>
  );
}
