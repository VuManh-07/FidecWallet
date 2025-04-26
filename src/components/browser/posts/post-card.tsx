import React from 'react';

import { type Post } from '@/api';
import { View } from '@/components/ui';

import PostActions from './post-actions';
import PostContent from './post-content';
import PostHeader from './post-header';
import PostImages from './post-images';

const PostCard = ({ post }: { post: Post }) => {
  return (
    <View className="mx-3 my-2 rounded-2xl bg-neutral-700 p-4 dark:bg-neutral-800">
      <PostHeader
        avatar={post.avatar}
        username={post.username}
        isBullish={post.isBullish}
        isVerified={post.isVerified}
        date={post.date}
      />
      <PostContent content={post.content} />
      <PostImages images={post.images || []} />
      <PostActions post={post} />
    </View>
  );
};

export default PostCard;
