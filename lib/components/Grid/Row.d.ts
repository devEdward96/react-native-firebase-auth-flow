import { ReactElement } from 'react';
import { ViewProps } from 'react-native';
interface BaseProps {
    gutter: number;
    rowProps?: ViewProps;
    children: Array<ReactElement<any>>;
}
declare const Row: (props: BaseProps) => JSX.Element;
export default Row;
