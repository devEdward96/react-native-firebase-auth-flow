import React from 'react';
import { View, Animated } from 'react-native';
import Text from '../Typography/Text';
import Styled from './Styled';

export default class BaseTabBar extends React.PureComponent<any> {
  renderTab = ({ icon, label }, page, isTabActive, onPressHandler) => {
    return (
      <Styled.BaseTabBar.TabBar
        key={label}
        underlayColor={'#ddd'}
        accessible={true}
        accessibilityLabel={label}
        accessibilityTraits="button"
        onPress={() => onPressHandler(page)}
      >
        <View>
          <Text medium>{label}</Text>
        </View>
      </Styled.BaseTabBar.TabBar>
    );
  };

  render() {
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: 1,
      backgroundColor: 'black',
      bottom: 0,
    };

    const translateX = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, containerWidth / numberOfTabs],
    });
    return (
      <Styled.BaseTabBar.Container style={[this.props.style]}>
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(this.props.initialTabs[page], page, isTabActive, this.props.goToPage);
        })}
        <Animated.View
          style={[
            tabUnderlineStyle,
            {
              transform: [{ translateX }],
            },
            this.props.underlineStyle,
          ]}
        />
      </Styled.BaseTabBar.Container>
    );
  }
}
