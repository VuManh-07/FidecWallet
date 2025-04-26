import { Buy as BuyIcon } from '@/components/ui/icons';
import { translate } from '@/lib';

export type ActionType = {
  id: string;
  title: string;
  type: string;
  icon: JSX.Element;
  screen?: string;
};

export const actions: ActionType[] = [
  {
    id: '1',
    title: `${translate('common.import')}\nToken`,
    icon: <BuyIcon color="#FBBF24" />,
    type: 'modal',
  },
  {
    id: '2',
    title: `${translate('common.import')}\nNFT`,
    icon: <BuyIcon color="#FBBF24" />,
    type: 'navigate',
    screen: '/home/more/add-nft',
  },
  {
    id: '3',
    title: `${translate('common.connect')}\nDapp`,
    icon: <BuyIcon color="#FBBF24" />,
    type: 'navigate',
    screen: 'ConnectDappScreen',
  },
  // {
  //   id: '4',
  //   title: 'Swap',
  //   icon: <BuyIcon color="#FBBF24" />,
  //   type: 'navigate',
  //   screen: 'SwapScreen',
  // },
];
