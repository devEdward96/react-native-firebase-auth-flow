import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import * as Yup from 'yup';
import { Formik, FormikProps, FormikActions } from 'formik';
import FormItemInput from '../../components/Forms/FormItemInput';
import Styled from './Styled';
import Text from '../../components/Typography/Text';
import { AuthContext, AuthContextInterface } from '../../contexts/AuthContext';

interface RegisterFormValues {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

class EmailPasswordSignInForm extends React.PureComponent {
  static contextType = AuthContext;
  context: AuthContextInterface;

  render() {
    const { onDisplayGlobalMessage, onSignUp } = this.context;
    return (
      <Styled.EmailPasswordSignInForm>
        <Text medium textProps={{ style: { textAlign: 'center', margin: 20 } }}>
          Sign Up New Account
        </Text>
        <Formik
          initialValues={{ firstName: '', email: '', lastName: '', password: '' }}
          validationSchema={Yup.object({
            firstName: Yup.string().required('Required!'),
            lastName: Yup.string().required('Required!'),
            password: Yup.string().required('Required!'),
            email: Yup.string()
              .email('Invalid email address!')
              .required('Required!'),
          })}
          onSubmit={async (values: RegisterFormValues, actions: FormikActions<RegisterFormValues>) => {
            try {
              const success = await onSignUp(values);
              if (success) {
                actions.setSubmitting(false);
                actions.resetForm();
                onDisplayGlobalMessage({
                  message: `Register successfully! Let's get started to using the app.`,
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
          {(formProps: FormikProps<RegisterFormValues>) => (
            <View>
              <FormItemInput formProps={formProps} placeholder={'First name'} icon={'user'} field={'firstName'} />
              <FormItemInput formProps={formProps} placeholder={'Last name'} icon={'user'} field={'lastName'} />
              <FormItemInput formProps={formProps} placeholder={'Your email'} icon={'mail'} field={'email'} />
              <FormItemInput
                formProps={formProps}
                placeholder={'Your password'}
                icon={'lock'}
                field={'password'}
                inputProps={{ secureTextEntry: true }}
              />
              <Styled.TermsAndPrivacy>
                <Text color={'midGray'}>By sign up you already accepted our</Text>
                <Text color={'blue'} textProps={{ style: { marginLeft: 3 } }}>
                  Privacy Polices.
                </Text>
              </Styled.TermsAndPrivacy>
              <Styled.EmailPasswordSignInFormItem style={{ alignItems: 'center' }}>
                <Button
                  onPress={formProps.handleSubmit as any}
                  contentStyle={{ height: 48, width: 200 }}
                  loading={formProps.isSubmitting}
                  disabled={formProps.isSubmitting}
                  mode="contained"
                >
                  {formProps.isSubmitting ? 'SIGNING UP' : 'SIGN UP'}
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
