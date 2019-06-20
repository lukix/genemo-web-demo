const createStore = (rootRedurer) => {
  let subscribedCallback = null;
  let state = rootRedurer(undefined, {});

  const dispatch = (action) => {
    state = rootRedurer(state, action);
    subscribedCallback(state);
  }

  const subscribe = callback => {
    subscribedCallback = callback
    subscribedCallback(state);
  };

  return { dispatch, subscribe }
};

export default createStore;
