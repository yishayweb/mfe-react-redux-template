import React, { useEffect } from "react";
import { useStore } from "react-redux";
import firstAppReducer from "../redux/reducers/firstAppReducer";
import actorsReducer from "../redux/reducers/actorsReducer";
import App from "../components/App";

const reducersList = [
  { name: "firstAppReducer", content: firstAppReducer },
  { name: "actorsReducer", content: actorsReducer },
];

const FirstAppModuleWrapper = () => {
  const store = useStore();

  useEffect(() => {
    store.injectReducer(reducersList);

    // this is an option to remove reducers when leaving this page
    // return () => {
    //   store.cleanReducers(reducersList);
    // }
  }, []);

  return <App />;
};

export default FirstAppModuleWrapper;
