import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner, Card, CardSection} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {loggedIn: null};

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

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <Card>
            <CardSection>
              <Spinner size="large" />
            </CardSection>
          </Card>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
