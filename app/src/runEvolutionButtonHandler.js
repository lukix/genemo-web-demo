import throttle from 'lodash.throttle';
import solveTravelingSalesman from './travelingSalesman';

const throttledCall = throttle(callback => callback(), 50);

const runEvolutionButtonHandler = dispatch => async () => {
  const iterationCallback = ({ generation, shortestPath }) => {
    throttledCall(() => dispatch({
      type: 'UPDATE_EVOLUTION_VALUES',
      payload: { generation, shortestPath },
    }));
  }

  dispatch({ type: 'RUN_EVOLUTION_START' });
  console.time('time');
  await solveTravelingSalesman(iterationCallback);
  console.timeEnd('time');
  dispatch({ type: 'RUN_EVOLUTION_END' });
};

export default runEvolutionButtonHandler;
