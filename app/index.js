import "./style.css";
import createStore from './src/utils/createStore';
import reducer from './src/reducer';
import createRootRenderer from './src/render';

const { dispatch, subscribe } = createStore(reducer);
subscribe(createRootRenderer(dispatch));
