import AutoScrollToTop from "components/AutoScrollToTop";
import { BrowserRouter } from "react-router-dom";
import CssImports from "styles/CssImports";
import Layout from "./Layout";
import { Provider } from "react-redux";
import ReduxStore from "redux/ReduxStore";
import store from "redux/store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssImports />
        <ReduxStore />
        <AutoScrollToTop />
        <Layout />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
