import {Fragment} from "react";

import Routes from "./routes/index";
import CustomLoader from "./components/common/CustomLoader";
import {LoaderContextProvider} from "./store/loder-context";
function App() {
  return (
    <Fragment>
      <LoaderContextProvider>
        <CustomLoader />
        <Routes />
      </LoaderContextProvider>
    </Fragment>
  );
}

export default App;
