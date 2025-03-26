import { useColorScheme } from 'nativewind';
import { TabBar } from 'react-native-tab-view';

const TabBarComponent = (props: any) => {
  const { colorScheme } = useColorScheme();

  return (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#F9D54A' }}
      style={{ backgroundColor: colorScheme === 'dark' ? 'black' : 'white' }}
      activeColor={colorScheme === 'dark' ? 'white' : 'black'}
      inactiveColor="gray"
    />
  );
};

export default TabBarComponent;
