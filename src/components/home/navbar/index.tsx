import { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';

import TabBarComponent from './navbar';
import NFTScreen from './nft';
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
    { key: 'transactions', title: 'Transactions' },
    { key: 'token', title: 'Token' },
    { key: 'nft', title: 'NFT' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={TabBarComponent}
    />
  );
}
