import createStore from 'react-waterfall';

const config = {
  initialState: {},
  actionsCreators: {},
};

export const { Provider, connect, actions } = createStore(config);
