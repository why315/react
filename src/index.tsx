
import { Provider } from 'react-redux';
import { history, store } from './store';
import { ConnectedRouter } from 'connected-react-router';
import ReactDOM from 'react-dom';
import Routers from './Router';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root') as HTMLElement

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routers />
      </ConnectedRouter>
    </Provider>
  </BrowserRouter>
  , root)


