import { ReactElement } from 'react';
import { ViewProps } from 'react-native';
interface BaseProps {
    gutter: number;
    colProps?: ViewProps;
    children: ReactElement<any>;
}
declare const Col: (props: BaseProps) => JSX.Element;
export default Col;
