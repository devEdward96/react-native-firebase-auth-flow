import React from 'react';
export default class BaseTabBar extends React.PureComponent<any> {
    renderTab: ({ icon, label }: {
        icon: any;
        label: any;
    }, page: any, isTabActive: any, onPressHandler: any) => JSX.Element;
    render(): JSX.Element;
}
