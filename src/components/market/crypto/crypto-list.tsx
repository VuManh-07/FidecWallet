import React from 'react';

import { type Coin } from '@/api/market/types';
import { FlatList } from '@/components/ui';

import { ItemCrypto } from './item-crypto';

export type TabKey = 'favoriteList' | 'popular' | 'rise' | 'discount' | 'new';

type Props = {
  data?: Coin[];
};

export const CryptoList = ({ data }: Props) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(_, i) => `coin-${i}`}
      renderItem={({ item }) => (
        <ItemCrypto
          name={item.name}
          symbol={item.symbol}
          price={item.price}
          change={item.change}
          icon={item.icon}
        />
      )}
    />
  );
};
