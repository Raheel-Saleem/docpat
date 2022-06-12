import {useEffect, useContext, useState, createContext} from "react";

const LoaderContext = createContext({
  isLoad: false,
  startLoading: () => {},
  stopLoading: () => {},
});

export const LoaderContextProvider = ({children}) => {
  const [isLoad, setLoad] = useState(false);

  function handleStartLoader() {
    setLoad(true);
  }
  function handleStopLoader() {
    setLoad(false);
  }

  return (
    <>
      <LoaderContext.Provider
        value={{
          isLoad: isLoad,
          startLoading: handleStartLoader,
          stopLoading: handleStopLoader,
        }}
      >
        {children}
      </LoaderContext.Provider>
    </>
  );
};
export default LoaderContext;
