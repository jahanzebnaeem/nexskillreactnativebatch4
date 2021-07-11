import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: 'AIzaSyCXhhLKHsmsPBevfc7mK9EcW69A37Nlaiw',
      authDomain: 'nsrnb4-manager.firebaseapp.com',
      projectId: 'nsrnb4-manager',
      storageBucket: 'nsrnb4-manager.appspot.com',
      messagingSenderId: '1079184797550',
      appId: '1:1079184797550:web:8b17419d9b6e3a4ea01b7f',
      measurementId: 'G-0FZPLJY02Y',
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
