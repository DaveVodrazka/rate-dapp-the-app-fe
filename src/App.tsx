import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Controller } from "./Controller";
import { CssBaseline } from "@mui/material";
import { Mainpage } from "./pages/Mainpage";

const App = () => {
  return (
    <Provider store={store}>
      <Controller>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Mainpage />} />
          </Routes>
        </Router>
      </Controller>
    </Provider>
  );
};

export default App;
