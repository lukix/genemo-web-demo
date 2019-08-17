import runEvolutionButtonHandler from './runEvolutionButtonHandler';

const renderButton = ($button, { isRunning, dispatch }) => {
  $button.disabled = isRunning;
  $button.innerHTML = isRunning ? 'Running...' : 'Run Evolution';
  $button.onclick = runEvolutionButtonHandler(dispatch);
}

const renderParam = ($paramBox, { value }) => {
  $paramBox.innerHTML = value;
}

const createRootRenderer = dispatch => {
  const $runButton = document.querySelector('.btn.start-algorithm');
  const $initialDistanceParam = document.querySelector('.value.initial-distance');
  const $iterationParam = document.querySelector('.value.iteration');
  const $distanceParam = document.querySelector('.value.distance');

  return state => {
    const { isRunning, initialDistance, iteration, shortestPath } = state;

    renderButton($runButton, { isRunning, dispatch });
    renderParam($initialDistanceParam, { value: initialDistance });
    renderParam($iterationParam, { value: iteration });
    renderParam($distanceParam, { value: shortestPath });
  }
};

export default createRootRenderer;
