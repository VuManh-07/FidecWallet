import React from 'react';

import { Text } from '@/components/ui';
import { translate } from '@/lib';

export default function Instruction() {
  return (
    <Text className="mt-4 text-center text-sm text-white">
      {translate('scan.instruction') || 'Scan address to send funds'}
    </Text>
  );
}
