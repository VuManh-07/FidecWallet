import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '../common';
import type { Post } from './types';

type Response = Post[];
type Variables = void; // as react-query-kit is strongly typed, we need to specify the type of the variables as void in case we don't need them

export const usePosts = createQuery<Response, Variables, AxiosError>({
  queryKey: ['posts'],

  fetcher: (): Promise<Response> => {
    return client.get(`posts`).then((response) => {
      const posts = response.data.posts;

      return posts.map((post: any) => {
        return {
          id: post.id,
          username: 'ManhFidec',
          avatar: 'https://i.pravatar.cc/300',
          isBullish: true,
          isVerified: true,
          content: post.body,
          tags: post.tags,
          images: [
            'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1515386474292-47555758ef2e?auto=format&fit=crop&w=800&q=80',
            'https://plus.unsplash.com/premium_photo-1666815503002-5f07a44ac8fb?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=800&q=80',
          ],
          date: new Date().toLocaleDateString('dd/MM'),
          likes: post.reactions.likes,
          comments: post.views,
          shares: 100,
        };
      });
    });
  },
});
