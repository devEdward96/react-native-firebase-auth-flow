import { FormikProps } from 'formik';
import { TextInputProps } from 'react-native';
declare const FormItem: ({ formProps, field, icon, placeholder, inputProps, }: {
    formProps: FormikProps<any>;
    field: string;
    icon: string;
    placeholder: string;
    inputProps?: TextInputProps;
}) => JSX.Element;
export default FormItem;
