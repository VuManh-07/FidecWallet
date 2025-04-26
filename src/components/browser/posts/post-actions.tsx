import { type Post } from '@/api';
import { Text, TouchableOpacity, View } from '@/components/ui';
import {
  Heart as HeartIcon,
  Messages as MessagesIcon,
  MoreDot as MoreDotIcon,
  ShareRepeat as ShareRepeatIcon,
} from '@/components/ui/icons';

const PostActions = ({ post }: { post: Post }) => {
  return (
    <View className="mt-2 flex-row items-center justify-around border-t border-neutral-600 pt-3">
      <TouchableOpacity className="flex-row items-center">
        <HeartIcon />
        <Text className="font-regular ml-1 text-sm dark:text-gray-400">
          {post.likes}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center">
        <MessagesIcon />
        <Text className="font-regular ml-1 text-sm dark:text-gray-400">
          {post.comments}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center">
        <ShareRepeatIcon />
        <Text className="font-regular ml-1 text-sm dark:text-gray-400">
          {post.shares}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center">
        <MoreDotIcon />
        <Text className="font-regular ml-1 text-sm dark:text-gray-400">
          {post.shares}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostActions;
