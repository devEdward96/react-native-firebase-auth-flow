import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import { View } from 'react-native';
import SignIn, { DefaultSignInTheme } from './modules/Authentication/SignIn';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <SignIn
          theme={DefaultSignInTheme}
          firebase={firebase}
          brand={<View style={{ height: 400, backgroundColor: 'red' }} />}
          onLoggedIn={() => console.log('Logged in!')}
        />
      </View>
    );
  }
}
