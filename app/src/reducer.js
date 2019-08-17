const reducer = (
  state = {
    isRunning: false,
    initialDistance: '-',
    iteration: '-',
    shortestPath: '-',
  },
  { type, payload }
) => {
  switch(type) {
    case 'RUN_EVOLUTION_START':
      return { ...state, isRunning: true };
    case 'RUN_EVOLUTION_END':
      return { ...state, isRunning: false };
    case 'SET_INITIAL_DISTANCE':
      return { ...state, initialDistance: payload };
    case 'UPDATE_EVOLUTION_VALUES':
      return {
        ...state,
        iteration: payload.iteration,
        shortestPath: payload.shortestPath,
      };
    default:
      return state;
  }
}

export default reducer;
