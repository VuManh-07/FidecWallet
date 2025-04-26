import { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';

import { View } from '@/components/ui';
import { translate } from '@/lib';

import NFTScreen from './nft';
import TabBarComponent from './tab-bar-component';
import TokenScreen from './token';
import RecentTransactions from './transaction';

const renderScene = SceneMap({
  transactions: RecentTransactions,
  token: TokenScreen,
  nft: NFTScreen,
});

export default function TabNavigator() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'transactions', title: translate('common.transaction') },
    { key: 'token', title: 'Token' },
    { key: 'nft', title: 'NFT' },
  ]);

  useEffect(() => {
    console.log(index, routes[index].key);
  }, [index, routes]);

  return (
    <View className="mt-2 flex-1">
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={TabBarComponent}
      />
    </View>
  );
}
