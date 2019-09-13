import React from 'react';
declare class CountrySelector extends React.PureComponent<{
    visible: boolean;
    onChange: any;
    onClose: any;
}> {
    state: {
        searchKeyword: string;
        visible: boolean;
        loading: boolean;
    };
    componentDidUpdate(prevProps: Readonly<{
        visible: boolean;
        onChange: any;
        onClose: any;
    }>, prevState: Readonly<{}>, snapshot?: any): void;
    render(): JSX.Element;
}
export default CountrySelector;
