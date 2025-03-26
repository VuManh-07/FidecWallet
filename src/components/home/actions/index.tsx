import React from 'react';
import { View } from 'react-native';

import { actions } from './actions';
import Item from './item';

const QuickActions = () => {
  return (
    <View className="my-3 flex-row justify-between px-2">
      {actions.map((action, index) => (
        <Item
          key={index}
          icon={action.icon}
          label={action.label}
          onPress={action.onPress}
        />
      ))}
    </View>
  );
};

export default QuickActions;
