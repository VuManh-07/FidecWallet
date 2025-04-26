import { FlashList } from '@shopify/flash-list';
import React from 'react';

import type { Post } from '@/api';
import { usePosts } from '@/api';
import ActionUser from '@/components/browser/action-user';
import PostCard from '@/components/browser/posts/post-card';
import TabHeader, { type TabType } from '@/components/browser/tab-header';
import { EmptyList, FocusAwareStatusBar, View } from '@/components/ui';

export default function Browser() {
  const [tabCurrent, setTabCurrent] = React.useState<TabType>('Community');
  // const { data, isPending, isError } = usePosts(tabCurrent);

  console.log(tabCurrent);

  const { data, isPending, isError } = usePosts();
  const renderItem = React.useCallback(
    ({ item }: { item: Post }) => <PostCard post={item} />,
    []
  );

  return (
    <View className="flex-1 ">
      <FocusAwareStatusBar />
      <TabHeader tabCurrent={tabCurrent} setTabCurrent={setTabCurrent} />
      <ActionUser />
      <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={
          <EmptyList isLoading={isPending} isError={isError} />
        }
        estimatedItemSize={300}
      />
    </View>
  );
}
