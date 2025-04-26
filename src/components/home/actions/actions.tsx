import {
  Buy as BuyIcon,
  More as MoreIcon,
  Scan as ScanIcon,
  Send as SendIcon,
} from '@/components/ui/icons';
import { translate } from '@/lib';

export type ActionType = {
  label: string;
  icon: JSX.Element;
  redirect: string;
};

export const actions: ActionType[] = [
  {
    label: translate('common.buy'),
    icon: <BuyIcon color="#FBBF24" />,
    redirect: '/home/buy',
  },
  {
    label: translate('common.send'),
    icon: <SendIcon color="#FBBF24" />,
    redirect: '/home/send',
  },
  {
    label: translate('common.scan'),
    icon: <ScanIcon color="#FBBF24" />,
    redirect: '/home/scan',
  },
  {
    label: translate('common.more'),
    icon: <MoreIcon color="#FBBF24" />,
    redirect: '/home/more',
  },
];
