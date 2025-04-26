import { Stack, useRouter } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React from 'react';

import ModelToken from '@/components/modal/token/modal-token';
import { actions, type ActionType } from '@/components/more/actions';
import Item from '@/components/more/item';
import ItemsContainer from '@/components/more/items-container';
import {
  FlatList,
  FocusAwareStatusBar,
  Text,
  useModal,
  View,
} from '@/components/ui';
import { translate } from '@/lib';
import { getFontSize } from '@/lib/hooks/use-responsive-dimensions';

export default function More() {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const route = useRouter();
  const model = useModal();

  const handleActionPress = (item: ActionType) => {
    console.log(item);
    if (item.type === 'navigate' && item.screen) {
      route.push(item.screen as any);
    } else if (item.type === 'modal') {
      model.present();
    }
  };

  return (
    <>
      <View className="flex-1">
        <Stack.Screen
          options={{
            title: `${translate('common.more_services')}`,
            headerBackTitle: 'Home',
            headerTitleStyle: {
              fontSize: getFontSize(18),
            },
            headerStyle: {
              backgroundColor: isDarkMode ? '#000' : '#fff',
            },
          }}
        />
        <FocusAwareStatusBar />
        <ItemsContainer>
          <Text className="m-2 text-base font-bold">
            {translate('common.crypto')}
          </Text>
          <FlatList
            data={actions}
            keyExtractor={(item) => item.id}
            numColumns={4}
            renderItem={({ item }) => (
              <Item
                icon={item.icon}
                title={item.title}
                onPress={() => handleActionPress(item)}
              />
            )}
          />
        </ItemsContainer>
      </View>
      <ModelToken modal={model} testID="model-token" />
    </>
  );
}
