export type Post = {
  id: string;
  username: string;
  avatar: string;
  isBullish: boolean;
  isVerified: boolean;
  content: string;
  tags?: string[];
  images?: string[];
  date: string;
  likes: number;
  comments: number;
  shares: number;
};
