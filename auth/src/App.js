import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAASZmZ7bBI9uQuo8OJRBlmlP_7FscXOFg',
      authDomain: 'nsb4auth.firebaseapp.com',
      projectId: 'nsb4auth',
      storageBucket: 'nsb4auth.appspot.com',
      messagingSenderId: '1071666603613',
      appId: '1:1071666603613:web:a01dc9e2816df088e18fb4',
      measurementId: 'G-4CQ63JK4EJ',
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
