import { TabBar } from 'react-native-tab-view';

const TabBarComponent = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'yellow' }}
    style={{ backgroundColor: 'black' }}
    activeColor="white"
    inactiveColor="gray"
  />
);

export default TabBarComponent;
