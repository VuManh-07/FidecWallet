import React from 'react';
import { View } from 'react-native';

import { actions } from './actions';
import Item from './item';

const QuickActions = () => {
  return (
    <View className="mt-4 flex-row justify-between px-8">
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
