import React from 'react';
import { Formik, FormikActions, FormikProps } from 'formik';
import * as Yup from 'yup';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import Styled from './Styled';
import Text from '../../components/Typography/Text';
import { AuthContext, AuthContextInterface } from '../../contexts/AuthContext';

import FormItemInput from '../../components/Forms/FormItemInput';

interface LoginFormValues {
  email: string;
  password: string;
}

class EmailPasswordSignInForm extends React.PureComponent<{ theme: any }> {
  static contextType = AuthContext;
  context: AuthContextInterface;

  render() {
    const { onDisplayGlobalMessage, onSignIn } = this.context;
    return (
      <Styled.EmailPasswordSignInForm>
        <Text medium textProps={{ style: { textAlign: 'center', margin: 20 } }}>
          Or Using Your Credentials
        </Text>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object({
            password: Yup.string().required('Required!'),
            email: Yup.string()
              .email('Invalid email address!')
              .required('Required!'),
          })}
          onSubmit={async (values: LoginFormValues, actions: FormikActions<LoginFormValues>) => {
            try {
              const success = await onSignIn(values);
              if (success) {
                actions.setSubmitting(false);
                actions.resetForm();
                onDisplayGlobalMessage({
                  message: `Sign in successfully! Let's get started to using Eco Apps.`,
                  type: 'success',
                });
              }
            } catch (error) {
              actions.setSubmitting(false);
              onDisplayGlobalMessage({
                message: error.toString(),
                type: 'error',
              });
            }
          }}
        >
          {(formProps: FormikProps<LoginFormValues>) => (
            <View>
              <FormItemInput
                formProps={formProps}
                placeholder={'Your email'}
                icon={'mail'}
                field={'email'}
                inputProps={{ keyboardType: 'email-address' }}
              />
              <FormItemInput
                formProps={formProps}
                placeholder={'Your password'}
                icon={'lock'}
                field={'password'}
                inputProps={{ secureTextEntry: true }}
              />
              <Styled.EmailPasswordSignInFormItem style={{ alignItems: 'center' }}>
                <Button
                  onPress={formProps.handleSubmit as any}
                  contentStyle={{ height: 48, width: 200 }}
                  loading={formProps.isSubmitting}
                  disabled={formProps.isSubmitting}
                  mode="contained"
                >
                  {formProps.isSubmitting ? 'SIGNING IN' : 'SIGN IN'}
                </Button>
              </Styled.EmailPasswordSignInFormItem>
            </View>
          )}
        </Formik>
      </Styled.EmailPasswordSignInForm>
    );
  }
}

export default EmailPasswordSignInForm;
