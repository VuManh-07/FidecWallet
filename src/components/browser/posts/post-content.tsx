import React from 'react';

import { Text } from '@/components/ui';

export default function PostContent({ content }: { content: string }) {
  return (
    <>
      <Text className="mb-2 text-white">{content}</Text>
    </>
  );
}
