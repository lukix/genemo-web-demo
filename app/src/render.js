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
  const $generationParam = document.querySelector('.value.generation');
  const $distanceParam = document.querySelector('.value.distance');

  return state => {
    const { isRunning, generation, shortestPath } = state;

    renderButton($runButton, { isRunning, dispatch });
    renderParam($generationParam, { value: generation });
    renderParam($distanceParam, { value: shortestPath });
  }
};

export default createRootRenderer;
