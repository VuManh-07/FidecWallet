/* eslint-disable react/react-in-jsx-scope */
import { useRouter } from 'expo-router';
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
import { signOut as signOutFn, translate } from '@/lib';
import { useModeApp } from '@/lib/hooks/use-mode-app';
import { HEIGHT, WIDTH } from '@/lib/hooks/use-responsive-dimensions';

export default function Profiles() {
  const { mode } = useModeApp((s) => ({ mode: s.mode }));
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  const iconColor =
    colorScheme === 'dark' ? colors.neutral[100] : colors.neutral[500];

  const onLogout = () => {
    signOutFn(mode);
    router.push(
      mode === 'hot'
        ? '/login/sign-in-hot-wallet'
        : '/login/sign-in-cold-wallet'
    );
  };

  return (
    <>
      <FocusAwareStatusBar />

      <ScrollView>
        <View className="flex-1" style={{ padding: WIDTH(20) }}>
          {/* Page Title */}
          <Text
            className="text-center text-xl font-bold leading-tight"
            style={{ marginVertical: HEIGHT(12) }}
          >
            {translate('profile.title')}
          </Text>

          {/* Information Section */}
          <ItemsContainer title="profile.information.title">
            <NameItem iconColor={iconColor} />
            <PhoneItem iconColor={iconColor} />
            <EmailItem iconColor={iconColor} />
          </ItemsContainer>

          {/* Settings Section */}
          <ItemsContainer title="profile.settings.title">
            <TwoFaItem iconColor={iconColor} />
            <CodeToEnterIntoApp iconColor={iconColor} />
            <AllowFaceId iconColor={iconColor} />
            <Fingerprint iconColor={iconColor} />
            <LanguageItem iconColor={iconColor} />
            <ThemeItem iconColor={iconColor} />
          </ItemsContainer>

          {/* Manage Section */}
          <ItemsContainer title="profile.manage.title">
            <PostedItem iconColor={iconColor} />
            <CardItem iconColor={iconColor} />
            <WalletconnectItem iconColor={iconColor} />
            <DeviceItem iconColor={iconColor} />
          </ItemsContainer>

          {/* Other Section */}
          <ItemsContainer title="profile.other.title">
            <Support24hItem iconColor={iconColor} />
            <ShareItem iconColor={iconColor} />
            <LogoutItem onPress={onLogout} />
          </ItemsContainer>
        </View>
      </ScrollView>
    </>
  );
}
