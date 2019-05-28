import React from "react";
import { Provider } from "react-redux";
import { render } from "react-testing-library";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../redux/reducers";
import sagas from "../redux/sagas";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

export function renderWithRedux(
  ui,
  {
    initialState,
    store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware))
  } = {}
) {
  sagaMiddleware.run(sagas, store.dispatch);
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  };
}

export const axiosMock = {
  request: jest.fn(() => Promise.resolve({ data: {} }))
};

export const initialState = {
  users: {
    suggestions: [
      {
        id: 1,
        username: "xyzt"
      },
      {
        id: 2,
        username: "abcd"
      },
      {
        id: 3,
        username: "xgh"
      },
      {
        id: 4,
        username: "xgh"
      },
      {
        id: 5,
        username: "xgh"
      },
      {
        id: 6,
        username: "xgh"
      },
      {
        id: 7,
        username: "xgh"
      }
    ],
    user: {
      id: 2,
      username: "abcd"
    }
  },
  repositories: {
    repositories: [
      {
        created_at: "2012-01-01T00:31:50Z",
        archived: false,
        forked: false,
        private: false,
        name: "aaa",
        description: "aasdasdasdasdasdasd"
      },
      {
        created_at: "2012-01-01T00:31:50Z",
        archived: false,
        forked: false,
        private: false,
        name: "aaa",
        description: "aasdasdasdasdasdasd"
      },
      {
        created_at: "2012-01-01T00:31:50Z",
        archived: false,
        forked: false,
        private: false,
        name: "aaa",
        description: "aasdasdasdasdasdasd"
      }
    ],
    loaded: true,
    loading: false
  }
};
