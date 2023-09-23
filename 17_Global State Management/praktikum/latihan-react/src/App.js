import './App.css';
import Routers from './routers';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routers/>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;