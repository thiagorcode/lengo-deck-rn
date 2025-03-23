import React, {useState} from 'react';
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
  const [name, setName] = useState<string>('');
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

  function callTelegram() {
    if (name) {
      return name;
    }

    return null;
  }

  function isNullAndUndefined(value: any) {
    return !call;
  }
  const call = callTelegram();

  if (isNullOrUndefined(call))
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
  const renderRightButton = () => {
    return (
      <View
        style={{
          height: 70,
          backgroundColor: Colors.bgSecondary,
          alignItems: 'center',
          paddingLeft: 15,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        {renderLabel()}
        <Pressable onPress={onPressLeftButton}>
          <Icon size={24} name="arrowleft" color={Colors.neutral[100]} />
        </Pressable>
      </View>
    );
  };
  return (
    <View>
      {layout === 'leftButton' && renderLeftButton()}
      {layout === 'rightButton' && renderRightButton()}
    </View>
  );
}
