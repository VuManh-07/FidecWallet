import { FontAwesome5 } from '@expo/vector-icons';

export const actions = [
  {
    label: 'Buy',
    icon: <FontAwesome5 name="shopping-cart" size={20} color="#FFD700" />,
    onPress: () => console.log('Buy Pressed'),
  },
  {
    label: 'Sent',
    icon: <FontAwesome5 name="paper-plane" size={20} color="#FFD700" />,
    onPress: () => console.log('Sent Pressed'),
  },
  {
    label: 'Scan',
    icon: <FontAwesome5 name="qrcode" size={20} color="#FFD700" />,
    onPress: () => console.log('Scan Pressed'),
  },
  {
    label: 'More',
    icon: <FontAwesome5 name="ellipsis-h" size={20} color="#FFD700" />,
    onPress: () => console.log('More Pressed'),
  },
];
