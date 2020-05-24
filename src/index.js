import "firebaseui/dist/firebaseui.css";
import "antd/dist/antd.css";
import "./index.scss";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import React from "react";
import ReactDOM from "react-dom";
// import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import App from "./components/App/App.component";
import rootReducer from "./state/reducers";

let initialStore = {};

const store = createStore(
  rootReducer,
  initialStore,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const client = new ApolloClient({
  uri: "api/graphql",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
