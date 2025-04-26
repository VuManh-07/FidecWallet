import React from 'react';

import { Select } from '@/components/ui';
import { translate } from '@/lib';

export default function ItemNetworkSelect() {
  return (
    <Select
      label={translate('common.network')}
      value={'ethereum'}
      options={[
        { label: 'Ethereum', value: 'ethereum' },
        { label: 'Polygon', value: 'polygon' },
        { label: 'BSC', value: 'bsc' },
        { label: 'Arbitrum', value: 'arbitrum' },
        { label: 'Optimism', value: 'optimism' },
        { label: 'Avalanche', value: 'avalanche' },
        { label: 'Gnosis', value: 'gnosis' },
        { label: 'Fantom', value: 'fantom' },
        { label: 'Cronos', value: 'cronos' },
      ]}
    />
  );
}
