import throttle from 'lodash.throttle';
import solveTravelingSalesman from './travelingSalesman';

const throttledCall = throttle(callback => callback(), 50);

const runEvolutionButtonHandler = dispatch => async () => {
  dispatch({ type: 'RUN_EVOLUTION_START' });
  const iterationCallback = ({ generation, shortestPath }) => {
    throttledCall(() => dispatch({
      type: 'UPDATE_EVOLUTION_VALUES',
      payload: { generation, shortestPath },
    }));
  }
  await solveTravelingSalesman(iterationCallback);
  dispatch({ type: 'RUN_EVOLUTION_END' });
};

export default runEvolutionButtonHandler;
