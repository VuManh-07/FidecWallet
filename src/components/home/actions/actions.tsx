import {
  Buy as BuyIcon,
  More as MoreIcon,
  Scan as ScanIcon,
  Send as SendIcon,
} from '@/components/ui/icons';
import { translate } from '@/lib';

export const actions = [
  {
    label: translate('home.buy'),
    icon: <BuyIcon color="#FBBF24" />,
    onPress: () => console.log('Buy Pressed'),
  },
  {
    label: translate('home.send'),
    icon: <SendIcon color="#FBBF24" />,
    onPress: () => console.log('Sent Pressed'),
  },
  {
    label: translate('home.scan'),
    icon: <ScanIcon color="#FBBF24" />,
    onPress: () => console.log('Scan Pressed'),
  },
  {
    label: translate('home.more'),
    icon: <MoreIcon color="#FBBF24" />,
    onPress: () => console.log('More Pressed'),
  },
];
