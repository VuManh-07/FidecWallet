import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { binanceClient } from '../common';
import type { Coin } from './types';

type Response = Coin[];

const getIcon = (symbol: string): string => {
  const name = symbol.replace('USDT', '').toLowerCase();

  const map: Record<string, string> = {
    btc: 'bitcoin-btc',
    eth: 'ethereum-eth',
    bnb: 'binance-coin-bnb',
    sol: 'solana-sol',
    ada: 'cardano-ada',
    xrp: 'xrp-xrp',
    doge: 'dogecoin-doge',
    dot: 'polkadot-new-dot',
    matic: 'polygon-matic',
    link: 'chainlink-link',
  };

  const logoName = map[name];
  return logoName
    ? `https://cryptologos.cc/logos/${logoName}-logo.png?v=026`
    : 'https://cryptologos.cc/logos/generic-coin-logo.png?v=026';
};

const symbolToNameMap: Record<string, string> = {
  BTC: 'Bitcoin',
  ETH: 'Ethereum',
  BNB: 'BNB',
  SOL: 'Solana',
  ADA: 'Cardano',
  XRP: 'XRP',
  DOGE: 'Dogecoin',
  DOT: 'Polkadot',
  MATIC: 'Polygon',
  LINK: 'Chainlink',
};

export const useTrendingCoins = createQuery<Response, AxiosError>({
  queryKey: ['trending-coins'],
  fetcher: async () => {
    const response = await binanceClient.get('ticker/24hr');
    const data = response.data;

    const topCoins = data
      .filter(
        (item: any) =>
          item.symbol.endsWith('USDT') &&
          parseFloat(item.quoteVolume) > 10000000
      )
      .slice(0, 10);

    return topCoins.map((coin: any) => {
      const symbol = coin.symbol.replace('USDT', '');
      const name = symbolToNameMap[symbol] || symbol;

      return {
        name,
        symbol,
        price: `$${parseFloat(coin.lastPrice).toFixed(2)}`,
        change: `${coin.priceChangePercent.toFixed(2)}%`,
        icon: getIcon(coin.symbol),
      };
    });
  },
});
