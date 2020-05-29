import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import 'firebaseui/dist/firebaseui.css';
import 'antd/dist/antd.css';
import './index.scss';
import App from './components/App/App.component';
// import * as serviceWorker from './serviceWorker';
 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './state/reducers';

let initialStore = {
};

const middlewares = [
  applyMiddleware(thunk),
]

if(window.__REDUX_DEVTOOLS_EXTENSION__) {
  middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__())
}

const store = createStore(rootReducer, initialStore, compose(
  ...middlewares
));


const client = new ApolloClient({
  uri: 'api/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
