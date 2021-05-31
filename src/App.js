import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import routes from './routes';
import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont';
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>

        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
