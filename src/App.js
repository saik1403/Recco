import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Header from './components/header';
import OrderConfiramationPage from './features/order-confirmation-page/order-confirmation-page';
import store from './util/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header></Header>
        <OrderConfiramationPage></OrderConfiramationPage>
      </Provider>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);