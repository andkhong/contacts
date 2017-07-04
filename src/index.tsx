import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { 
//   BrowserRouter,
//   Route
// } from 'react-router-dom';

import { store } from './store';
import App from './components/';

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <Route path="/" component={App} />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('root') as HTMLElement
// );


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
