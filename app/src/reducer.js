const reducer = (
  state = {
    isRunning: false,
    generation: '-',
    shortestPath: '-',
  },
  { type, payload }
) => {
  switch(type) {
    case 'RUN_EVOLUTION_START':
      return { ...state, isRunning: true };
    case 'RUN_EVOLUTION_END':
      return { ...state, isRunning: false };
    case 'UPDATE_EVOLUTION_VALUES':
      return {
        ...state,
        generation: payload.generation,
        shortestPath: payload.shortestPath,
      };
    default:
      return state;
  }
}

export default reducer;
