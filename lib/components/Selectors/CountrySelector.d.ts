import React from 'react';
declare class CountrySelector extends React.PureComponent<{
    visible: boolean;
    onChange: any;
    onClose: any;
}> {
    state: {
        searchKeyword: string;
        visible: boolean;
    };
    render(): JSX.Element;
}
export default CountrySelector;
