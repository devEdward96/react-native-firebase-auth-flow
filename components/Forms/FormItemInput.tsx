import React from 'react';
import { FormikProps } from 'formik';
import { TextInputProps } from 'react-native';
import Styled from '../../modules/Authentication/Styled';
import Input from './Input';
import Text from '../Typography/Text';

const FormItem = ({
  formProps,
  field,
  icon,
  placeholder,
  inputProps = {},
}: {
  formProps: FormikProps<any>;
  field: string;
  icon: string;
  placeholder: string;
  inputProps?: TextInputProps;
}) => {
  return (
    <Styled.EmailPasswordSignInFormItem>
      <Input
        {...inputProps}
        style={formProps.touched[field] && formProps.errors[field] ? { borderWidth: 1, borderColor: 'red' } : {}}
        onChangeText={formProps.handleChange(field)}
        onBlur={formProps.handleBlur(field)}
        value={formProps.values[field]}
        icon={icon}
        placeholder={placeholder}
      />
      {formProps.touched[field] && formProps.errors[field] ? (
        <Text color={'red'} medium textProps={{ style: { marginTop: 3 } }}>
          {formProps.errors[field].toString()}
        </Text>
      ) : null}
    </Styled.EmailPasswordSignInFormItem>
  );
};

export default FormItem;
