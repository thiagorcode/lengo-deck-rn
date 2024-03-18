import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {Colors, METRICS} from '../../uikit';

type LayoutType = 'custom' | 'leftButton' | 'rightButton' | 'logo';

interface TopBarProps {
  label?: string;
  layout: LayoutType;
  onPressLeftButton?: () => void;
  onPressRightButton?: () => void;
}

export function TopBar({
  label = '',
  onPressLeftButton,
  layout,
}: Readonly<TopBarProps>): React.JSX.Element {
  const renderLabel = () => {
    return (
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 24,
          color: Colors.neutral[100],
        }}>
        {label}
      </Text>
    );
  };

  const renderLeftButton = () => {
    return (
      <View
        style={{
          height: 70,
          backgroundColor: Colors.bgSecondary,
          alignItems: 'center',
          paddingLeft: 15,
          flexDirection: 'row',
        }}>
        <Pressable onPress={onPressLeftButton}>
          <Icon size={24} name="arrowleft" color={Colors.neutral[100]} />
        </Pressable>
        {renderLabel()}
      </View>
    );
  };
  return <View>{layout === 'leftButton' && renderLeftButton()}</View>;
}
